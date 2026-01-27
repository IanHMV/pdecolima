import { Lista } from "../../components/Lista";
import DefaultAccordion from "../../components/DefaultAccordion";

const Entes = () => {

  const contenido = [
    {
      titulo: "Organismos Centralizados",
      links: [
        <a href="https://decla-csp.col.gob.mx/" key="d">Declaranet</a>
      ]
    },
    {
      titulo: "Organismos Vinculados con la Plataforma Digital Estatal",
      links: [
        <a href="https://www.plataformadigitalnacional.org/declaraciones" key="p">Sistema de Declaraciones de Patrimoniales</a>
      ]
    }
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
