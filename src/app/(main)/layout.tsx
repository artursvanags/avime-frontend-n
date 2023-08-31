import Footer from "@/components/layout/templates/footer"
import SiteHeader from "@/components/layout/templates/header/index"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      {children}
      <Footer />
    </>
  )
}
