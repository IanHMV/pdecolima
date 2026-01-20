import React from "react";
import { motion } from "framer-motion";

const InicioFuncionario = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      
      {/* 🖼️ Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block z-0"
        style={{ backgroundImage: "url('/img/fondoSistemas.png')" }}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* 🧩 Contenido */}
      <motion.div
        className="relative z-20 mx-10 py-32 grid grid-cols-1 gap-2
                   xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* CARD 1 */}
        <motion.div className="p-2" variants={itemVariants}>
          <a
            href="https://pdecolima.mx/s1"
            className="bg-s1-gradiente shadow-cardSystems rounded-lg flex flex-col h-full"
          >
            <button className="flex flex-col items-center justify-center w-full h-full p-8">
              <img src="/img/s1.svg" alt="" className="w-auto object-scale-down" />
              <p className="mt-4 text-white text-center">
                Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal
              </p>
            </button>
          </a>
        </motion.div>

        {/* CARD 2 */}
        <motion.div className="p-2" variants={itemVariants}>
          <a
            className="bg-s-gradiente-deshabilitado shadow-cardSystems rounded-lg flex flex-col h-full cursor-not-allowed"
          >
            <button className="flex flex-col items-center justify-center w-full h-full p-8 cursor-not-allowed">
              <img src="/img/s2.svg" alt="" className="w-auto object-scale-down" />
              <p className="mt-4 text-white text-center">
                Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas
              </p>
            </button>
          </a>
        </motion.div>

        {/* CARD 3*/}
        <motion.div className="p-2" variants={itemVariants}>
          <a
            href="https://pdecolima.mx/s3"
            className="bg-s3-gradiente shadow-cardSystems rounded-lg flex flex-col h-full "
          >
            <button className="flex flex-col items-center justify-center w-full h-full p-8 ">
              <img src="/img/s3.svg" alt="" className="w-auto object-scale-down" />
              <p className="mt-4 text-white text-center">
                Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal
              </p>
            </button>
          </a>
        </motion.div>

        {/* CARD 4 */}
        <motion.div className="p-2" variants={itemVariants}>
          <a
            className="bg-s-gradiente-deshabilitado shadow-cardSystems rounded-lg flex flex-col h-full cursor-not-allowed"
          >
            <button className="flex flex-col items-center justify-center w-full h-full p-8 cursor-not-allowed">
              <img src="/img/s4.svg" alt="" className="w-auto object-scale-down" />
              <p className="mt-4 text-white text-center">
                Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal
              </p>
            </button>
          </a>
        </motion.div>

        {/* CARD 5 */}
        <motion.div className="p-2" variants={itemVariants}>
          <a
            className="bg-s-gradiente-deshabilitado shadow-cardSystems rounded-lg flex flex-col h-full cursor-not-allowed"
          >
            <button className="flex flex-col items-center justify-center w-full h-full p-8 cursor-not-allowed">
              <img src="/img/s5.svg" alt="" className="w-auto object-scale-down" />
              <p className="mt-4 text-white text-center">
                Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal
              </p>
            </button>
          </a>
        </motion.div>


        {/* CARD 6 */}
        <motion.div className="p-2" variants={itemVariants}>
          <a
            className="bg-s-gradiente-deshabilitado shadow-cardSystems rounded-lg flex flex-col h-full cursor-not-allowed"
          >
            <button className="flex flex-col items-center justify-center w-full h-full p-8 cursor-not-allowed">
              <img src="/img/s6.svg" alt="" className="w-auto object-scale-down" />
              <p className="mt-4 text-white text-center">
                Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal
              </p>
            </button>
          </a>
        </motion.div>

        {/* El resto de cards funciona IGUAL */}
      </motion.div>
    </div>
  );
};

export default InicioFuncionario;
