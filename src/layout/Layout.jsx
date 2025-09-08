import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <AppNav/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout