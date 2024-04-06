import { cn } from "@/lib/utils";

export type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};
//items-center justify-center text-center
export function PageHeader({ title, description, ...props }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "container flex flex-col py-8 dark:bg-transparent md:py-12 lg:py-24",
        props.className,
      )}
    >
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function PageHeaderTwo({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "border-b bg-stone-950 py-8 text-white md:py-12",
        className,
      )}
    >
      <div className="container space-y-4">
        <p className="max-w-[42rem] font-medium leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {description ? description : "Description text here"}
        </p>
        <h1 className="max-w-[64rem] font-heading text-2xl sm:text-3xl md:text-4xl lg:text-7xl">
          {title ? title : "Header"}
        </h1>
      </div>
    </section>
  );
}
