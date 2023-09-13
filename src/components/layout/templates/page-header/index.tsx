export type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="border-b py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="container">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {title ? title : "Header"}
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {description ? description : "Description text here"}
        </p>
      </div>
    </section>
  );
}
