import {
  ListObjectsV2Command,
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client({
  endpoint: process.env.DIGITALOCEAN_ENDPOINT_URL, // Find your endpoint in the control panel, under Settings. Prepend "https://".
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  region: process.env.DIGITALOCEAN_REGION, // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
  credentials: {
    accessKeyId: process.env.DIGITALOCEAN_ACCESS_KEY, // Access key pair. You can create access key pairs using the control panel or API.
    secretAccessKey: process.env.DIGITALOCEAN_SECRET_KEY, // Secret access key defined through an environment variable.
  },
});

const presignedUrlCache = new Map();

export const readObjects = async (folder = "") => {
  let folderName = folder ? `${folder}/` : "";

  const input = {
    Bucket: process.env.DIGITALOCEAN_BUCKET,
    Delimiter: "/",
    Prefix: `${process.env.DIGITALOCEAN_BUCKET_FOLDER}/${folderName}`,
  };

  try {
    const fetch = new ListObjectsV2Command(input);
    const data = await client.send(fetch);

    // Check if Contents exists before filtering
    const fileObjects = data.Contents
      ? data.Contents.filter((object) => object.Key !== input.Prefix)
      : [];

    const objectsWithPresignedUrls = await Promise.all(
      fileObjects.map(async (object) => {
        const objectKey = object.Key;
        const cachedPresignedUrl = presignedUrlCache.get(objectKey);

        if (cachedPresignedUrl) {
          // If a cached presigned URL exists, use it
          return {
            ...object,
            presignedUrl: cachedPresignedUrl,
          };
        } else {
          // Generate a new presigned URL using the presigner
          const objectParams = {
            Bucket: process.env.DIGITALOCEAN_BUCKET,
            Key: objectKey,
          };

          let presignedUrl = await getSignedUrl(
            client,
            new GetObjectCommand(objectParams),
            {
              expiresIn: 3600, // URL expires in 1 hour (adjust as needed)
            },
          );
          // Convert to subdomain
          let url = new URL(presignedUrl);
          url.host = process.env.DIGITALOCEAN_SUBDOMAIN_ENDPOINT_URL;
          presignedUrl = url.toString();

          // Cache the presigned URL for future use
          presignedUrlCache.set(objectKey, presignedUrl);

          return {
            ...object,
            presignedUrl,
          };
        }
      }),
    );

    return { data: objectsWithPresignedUrls, error: null, isLoading: false };
  } catch (err) {
    console.error("Error listing objects with pre-signed URLs:", err);
    return {
      data: [],
      error: err.message || "An error occurred",
      isLoading: false,
    };
  }
};
