import Footer from "@/components/layout/templates/footer";
import SiteHeader from "@/components/layout/templates/header/index";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
