import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import AppNavCiudadano from './AppNavCiudadano'

function LayoutCiudadano() {
  return (
    <>
    <AppNavCiudadano/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default LayoutCiudadano