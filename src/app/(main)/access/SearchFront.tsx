import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Spinner } from "@/config/icons";

interface SearchFrontProps {
  onSearch: (term: string) => void;
  loading: boolean;
  error: string | null;
}

export function SearchFront({ onSearch, loading, error }: SearchFrontProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState<string>(() => {
    const encodedKey = searchParams.get("key");
    return encodedKey
      ? Buffer.from(encodedKey, "base64").toString("utf-8")
      : "";
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const encodedKey = inputValue
      ? Buffer.from(inputValue).toString("base64")
      : null;

    const newSearchParams = new URLSearchParams();

    if (encodedKey) {
      newSearchParams.set("key", encodedKey);
    }

    router.push(`?${newSearchParams.toString()}`);

    setSearchTerm(inputValue);
  };

  const handleSearch = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="mx-auto flex min-h-[75vh] w-full flex-col justify-center py-4 ">
      <div className="pb-4">
        <h1 className="font-heading text-4xl">Hello there, </h1>
        <p className="text-sm font-normal">
          Sign in to access your photos from our cloud storage.
        </p>
      </div>
      <form onSubmit={handleSearch}>
        <div className="flex w-full items-center justify-center sm:max-w-[620px]">
          <Input
            className="w-full"
            type="text"
            placeholder="Write a keyword here"
            value={searchTerm}
            onChange={handleInputChange}
            disabled={loading}
          />
          <Button
            size="xl"
            className="sm:min-w-32 ml-2"
            type="submit"
            disabled={loading}
          >
            {!loading ? (
              "Enter"
            ) : (
              <>
                <Spinner className="mr-2 h-5 w-5 animate-spin" />
                Loading...
              </>
            )}
          </Button>
        </div>
        {error && <div className="text-sm text-red-500">{error}</div>}
      </form>
    </div>
  );
}
