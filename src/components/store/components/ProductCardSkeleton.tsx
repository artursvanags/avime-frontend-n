import Grid from "@/components/global/grid";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <Grid.Item
          key={i}
          className="rounded border bg-stone-50 p-6 dark:bg-transparent"
        >
          <Skeleton className="aspect-square" />
          <div>
            <Skeleton className="mt-2 h-5 w-[85%]" />
            <div className="space-y-2 pt-2">
              <Skeleton className="h-3 w-[100%] rounded-sm" />
              <Skeleton className="h-3 w-[100%] rounded-sm" />
              <Skeleton className="h-3 w-[45%] rounded-sm" />
            </div>
          </div>
        </Grid.Item>
      ))}
    </>
  );
}
