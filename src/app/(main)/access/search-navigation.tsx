"use client";

import { SpaceObjectProps } from "@/types/space";
import { useState } from "react";
import { SearchFront } from "./SearchFront";
import { SearchResult } from "./SearchResult";

export default function SearchNavigation() {
  const [data, setData] = useState<SpaceObjectProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (term: string) => {
    if (!term.trim()) {
      setError("Please enter a keyword");
      return;
    }

    const cleanedSearchTerm = term.trim().toLowerCase();

    try {
      setLoading(true);
      const res = await fetch(`/api/access-photos?folder=${cleanedSearchTerm}`);
      if (!res.ok) {
        setError(`Error: ${res.status}`);
        setLoading(false);
        return;
      }
      const fetchedData: SpaceObjectProps[] = await res.json();
      if (fetchedData.length === 0) {
        setError("No Results Found");
        setLoading(false);
        return;
      }
      setData(fetchedData);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching objects:", error);
      setError("An error occurred");
    }
  };

  const resetSearch = () => {
    setData([]);
    setError(null);
  };

  return (
    <div className="container ">
      {!data.length ? (
        <SearchFront onSearch={handleSearch} loading={loading} error={error} />
      ) : (
        <SearchResult onGoBack={resetSearch} data={data} />
      )}
    </div>
  );
}
