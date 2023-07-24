import React from 'react'
import Nabar from '../Pages/Shared/Navbar/Nabar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'

export default function Main() {
  return (
    <div>
      <Nabar></Nabar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
