export interface SpaceObjectProps {
  presignedUrl: any;
  Key?: string | undefined;
  LastModified?: Date | undefined;
  ETag?: string | undefined;
  ChecksumAlgorithm?: string[] | undefined;
  Size?: number | undefined;
  StorageClass?: string | undefined;
  Owner?: string | undefined;
  RestoreStatus?: string | undefined;
}[]
