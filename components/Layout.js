import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Navbar config={{logo: "/img/logo.svg", phoneNumber: "08154711"}}/>
        {children}
        <Footer />
    </>
  )
}

export default Layout