import { motion } from "framer-motion";

const animate = { rotate: [0, 60, 120] };
const animateInv = { rotate: [120, 60, 0] };

export default function PathDrawing() {
  return (
    <div className="p-4 flex justify-center items-center">
      <div className=" relative w-40 h-40">

        <img src="/img/icono.png" alt="" 
        className="absolute inset-0 z-30 w-14 h-14 m-auto"/>

        {/* Imagen arriba */}
        <motion.img
          src="/img/Group2.svg"
          className="absolute inset-0 z-20 w-28 h-28 m-auto"
          animate={animateInv}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Imagen de Fondo */}
        <motion.img
          src="/img/Polygon.svg"
          className="absolute inset-0 z-10 w-30 h-30 m-auto"
          animate={animate}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}
