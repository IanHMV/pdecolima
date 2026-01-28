import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNavFuncionario from './AppNavFuncionario'
import Footer from './Footer'

function LayoutFuncionario() {
  return (
    <>
    <AppNavFuncionario/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default LayoutFuncionario