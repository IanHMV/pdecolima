import AppNav from "./AppNav";

const NAV_ITEMS = [
  {
    title: "Sistema 1",
    link: "https://www.plataformadigitalnacional.org/declaraciones",
    description: "Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal",
  },
  {
    title: "Sistema 3",
    link: "https://www.plataformadigitalnacional.org/sancionados",
    description: "Sistema nacional de servidores públicos y particulares sancionados.",
  },
];

export default function AppNavCiudadano() {
  return <AppNav navItems={NAV_ITEMS} />;
}
