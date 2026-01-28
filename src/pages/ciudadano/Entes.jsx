import { Lista } from "../../components/Lista";
import DefaultAccordion from "../../components/DefaultAccordion";

const Entes = () => {
  const contenido = [
    {
      titulo: "Poder Ejecutivo",
      descripcion:"Este enlace dirige al sistema de consulta de los entes afiliados al Poder Ejecutivo del Estado de Colima.",
      links: [
        {
          url: "https://decla-csp.col.gob.mx/",
          text: "Declaranet",
        },
      ],
    },
    {
      titulo: "Organismos Vinculados a la Plataforma Digital Estatal",
      descripcion:"Estos enlaces dirigen a los sistemas de consulta de los entes vinculados a la Plataforma Digital Estatal y, por ende, a la Plataforma Digital Nacional.",
      links: [
        {
          url: "https://www.plataformadigitalnacional.org/declaraciones",
          text: "Sistema de Declaraciones Patrimoniales",
        },
        {
          url: "https://www.plataformadigitalnacional.org/sancionados",
          text: "Sistema de servidores públicos y particulares sancionados",
        },
      ],
    },
  ];

  return (
    // Contenedor para que se despliegue en toda la pantalla
    <div className="min-h-screen">
      {/* Contenedor para ajustar los items al medio */}
      <div className="flex items-center justify-center py-40">
        <div className="bg-white rounded-md p-2 w-3/4">
          <DefaultAccordion data={contenido} />
        </div>
      </div>
    </div>
  );
};

export default Entes;
