import Footer from "@/components/layout/templates/footer"
import Nav from "@/components/layout/templates/nav"
import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
