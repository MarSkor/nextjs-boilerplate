import Nav from "./Nav"
import Footer from "./Footer"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>  
        <Nav />
        <>
          { children }
        </>
        <Footer/>
    </>
  )
}

export default Layout