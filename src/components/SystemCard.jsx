import { motion } from "framer-motion";

export default function SystemCard({ url, imagen, descripcion, activeClass, variants }) {
  const isDisabled = !url;
  const bgClass = isDisabled
    ? "bg-s-gradiente-deshabilitado cursor-not-allowed"
    : activeClass;

  const cardBody = (
    <div className={`${bgClass} shadow-cardSystems rounded-lg flex flex-col h-full`}>
      <div className="flex flex-col items-center justify-center w-full h-full p-8">
        <img src={imagen} alt="" className="w-auto object-scale-down" />
        <p className="mt-4 text-white text-center font-bold text-sm leading-normal">
          {descripcion}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div className="p-2" variants={variants}>
      {isDisabled ? (
        cardBody
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
          {cardBody}
        </a>
      )}
    </motion.div>
  );
}
