import React from 'react'
import { Link } from "react-router-dom"

const Inicio = () => {
  return (
    <div className="relative min-h-screen w-screen flex flex-col justify-end items-center">

      {/*Fondo mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/img/fondoPDE-Mobile.png')" }}
      />

      {/*Fondo desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/img/fondoPDE.png')" }}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col gap-4 pb-40 sm:pb-20 md:pb-14 lg:pb-12 xl:pb-14">
        <Link
          to="/ciudadano"
          className="bg-button2-inicio-gradiente   px-6 py-3 text-white font-semibold rounded-lg border-2 border-white/50 hover:border-white hover:brightness-110 active:scale-95 transition-all duration-300"
        >
          Soy Ciudadano
        </Link>

        <Link
          to="/funcionario"
          className="bg-button-inicio-gradiente px-6 py-3 text-white font-semibold rounded-lg border-2 border-white/50 hover:border-white hover:brightness-110 active:scale-95 transition-all duration-300"
        >
          Soy Funcionario
        </Link>
      </div>
    </div>
  )
}

export default Inicio
