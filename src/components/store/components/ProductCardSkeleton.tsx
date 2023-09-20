import Grid from "@/components/global/grid";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <Grid.Item key={i} className="rounded p-6 dark:bg-transparent">
          <Skeleton className="aspect-square" />
          <div>
            <Skeleton className="mt-2 h-5 w-[85%]" />
          </div>
        </Grid.Item>
      ))}
    </>
  );
}
