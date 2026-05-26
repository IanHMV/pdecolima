import AppNav from "./AppNav";

const NAV_ITEMS = [
  {
    title: "Sistema 1",
    link: "https://pdecolima.mx/s1/",
    description: "Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal",
  },
  {
    title: "Sistema 3",
    link: "https://pdecolima.mx/s3/",
    description: "Sistema nacional de servidores públicos y particulares sancionados.",
  },
];

export default function AppNavFuncionario() {
  return <AppNav navItems={NAV_ITEMS} />;
}
