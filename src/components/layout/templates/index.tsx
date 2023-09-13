import Footer from "@/components/layout/templates/footer"
import Header from "@/components/layout/templates/header/navigation-menu"
import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
