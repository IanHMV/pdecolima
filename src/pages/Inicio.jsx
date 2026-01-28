import React from "react";
import { Link } from "react-router-dom";
import "../styles/background.css";
import { motion } from "framer-motion";

const Inicio = () => {
  const text1 = "Plataforma";
  const text2 = "Digital";
  const text3 = "Estatal";

  //Contenedor para animacion
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // velocidad de escritura
      },
    },
  };

  //Animacion de letras
  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  //Animacion de Polygonos E Imagen
  const animate = { rotate: [0, 60, 120, 180, 240, 300, 360] };
  const animateInv = { rotate: [360, 300, 240, 180, 120, 60, 0] };
  const transition = {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  };

  //Funcion para texto
  const renderText = text =>
  text.split("").map((char, i) => (
    <motion.span key={i} variants={letter}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  return (
    <div className="relative h-screen w-screen grid grid-rows-3 overflow-hidden">

      
      {/* FILA 1 → Imagen */}
      <div className="flex justify-center items-center">
        <div className="relative w-full h-full">
          <img
            src="/img/icono.png"
            alt="Icono Sesaecol"
            className="absolute inset-0 z-30 w-14 h-14 m-auto"
          />

          {/* Imagen arriba */}
          <motion.img
            src="/img/Polygon.svg"
            className="absolute inset-0 z-20 w-28 h-28 m-auto"
            animate={animateInv}
            transition={transition}
          />

          {/* Imagen de Fondo */}
          <motion.img
            src="/img/Polygon2.svg"
            className="absolute inset-0 z-10 w-40 h-40 m-auto"
            animate={animate}
            transition={transition}
          />
        </div>

      </div>

      {/* FILA 2 → Título */}
      <motion.div
        className="flex items-center justify-center flex-col"
        variants={container}
        initial="hidden"
        animate="visible"
      > 
        <h1 className="rubik-mono-one-regular text-4xl md:text-5xl text-white text-center">
          {renderText(text1)}
        </h1>

        <h1 className="rubik-mono-one-regular text-4xl md:text-5xl text-white text-center">
          {renderText(text2)}
        </h1>

        <h1 className="rubik-mono-one-regular text-4xl md:text-5xl text-white text-center">
          {renderText(text3)}
        </h1>
      </motion.div>

      {/* FILA 3 → Botones */}
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          to="/ciudadano"
          className="bg-button2-inicio-gradiente w-2/5 max-w-sm md:w-1/4 text-center px-6 py-3 text-white font-semibold rounded-lg border-2 border-white/50 hover:border-white transition"
        >
          Soy Ciudadano
        </Link>

        <Link
          to="/funcionario"
          className="bg-button-inicio-gradiente w-2/5 max-w-sm md:w-1/4 text-center px-6 py-3 text-white font-semibold rounded-lg border-2 border-white/50 hover:border-white transition"
        >
          Soy Servidor Público
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
