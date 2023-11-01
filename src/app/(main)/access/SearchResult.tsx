import { Button } from "@/components/ui/button";
import { SpaceObjectProps } from "@/types/space";
import Grid from "@/components/global/grid";
import ImageCard from "./image-card";

interface SearchResultProps {
  data: SpaceObjectProps[];
  onGoBack: () => void;
}

const GridNumbers = (data: SpaceObjectProps[]): string => {
  let gridClass = "";
  if (data.length > 4) {
    gridClass = "lg:grid-cols-6";
  } else {
    gridClass = `lg:grid-cols-3`;
  }
  return gridClass;
};

export function SearchResult({ data, onGoBack }: SearchResultProps) {
  const gridClass = GridNumbers(data);
  return (
    <div className="py-4">
      <div className="flex flex-1 items-center justify-between py-4">
        <Button size="xl" onClick={onGoBack}>
          Go Back
        </Button>
        {/* {(
          data.reduce((totalSize, a) => totalSize + (a.Size ?? 0), 0) /
          (1024 * 1024)
        ).toFixed(2)}
        MB */}
      </div>
      <Grid className={`grid-cols-2 sm:grid-cols-2 ${gridClass}`}>
        {data.map((res, index) => (
          <ImageCard key={index} src={res} />
        ))}
      </Grid>
    </div>
  );
}
