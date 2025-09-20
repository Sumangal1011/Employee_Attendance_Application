import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './src/Components/Navbar/Navbar.jsx'
import Footer from './src/Components/Footer/Footer.jsx'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
