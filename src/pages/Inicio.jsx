import React from "react";
import { Link } from "react-router-dom";
import "../styles/background.css";
import '../styles/fonts.css';
import { motion } from "framer-motion";

const Inicio = () => {

  const text1 = "Plataforma";
  const text2 = "Digital";
  const text3 = "Estatal";

  const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // velocidad de escritura
    },
  },
};

const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
  
  return (
    <div className="relative h-screen w-screen grid grid-rows-3 overflow-hidden">

      {/* Fondo */}
      <div className="tech-background absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* FILA 1 → Imagen */}
      <div className="z-20 flex items-center justify-center">
        <img
          src="/img/pde.svg"
          alt="PDE"
          className="w-60"
        />
      </div>

      {/* FILA 2 → Título */}
      <motion.div
      className="z-20 flex items-center justify-center flex-col"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h1 className="rubik-mono-one-regular text-4xl md:text-5xl text-white text-center">

        {text1.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

      </h1>
      <h1 className="rubik-mono-one-regular text-4xl md:text-5xl text-white text-center">

        {text2.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

      </h1>
      <h1 className="rubik-mono-one-regular text-4xl md:text-5xl text-white text-center">

        {text3.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

      </h1>
    </motion.div>

      {/* FILA 3 → Botones */}
      <div className="z-20 flex flex-col items-center justify-center gap-4">
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
          Soy Funcionario
        </Link>
      </div>

    </div>
  );
};

export default Inicio;
