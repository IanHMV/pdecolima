import { motion } from "framer-motion";
import SystemCard from "../../components/SystemCard";

const SISTEMAS = [
  {
    url: "https://www.plataformadigitalnacional.org/declaraciones",
    imagen: "/img/s1.svg",
    descripcion: "Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal",
    activeClass: "bg-s1-gradiente",
  },
  {
    url: null,
    imagen: "/img/s2.svg",
    descripcion: "Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas",
    activeClass: null,
  },
  {
    url: "https://www.plataformadigitalnacional.org/sancionados",
    imagen: "/img/s3.svg",
    descripcion: "Sistema nacional de servidores públicos y particulares sancionados",
    activeClass: "bg-s3-gradiente",
  },
  {
    url: null,
    imagen: "/img/s4.svg",
    descripcion: "Sistema de información y comunicación del Sistema Nacional Anticorrupción y del Sistema Nacional de Fiscalización",
    activeClass: null,
  },
  {
    url: null,
    imagen: "/img/s5.svg",
    descripcion: "Sistema de denuncias públicas de faltas administrativas y hechos de corrupción",
    activeClass: null,
  },
  {
    url: null,
    imagen: "/img/s6.svg",
    descripcion: "Sistema de información pública de contrataciones",
    activeClass: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const InicioCiudadano = () => (
  <motion.div
    className="mx-10 py-32 grid grid-cols-1 gap-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    {SISTEMAS.map((sistema, i) => (
      <SystemCard key={i} {...sistema} variants={itemVariants} />
    ))}
  </motion.div>
);

export default InicioCiudadano;
