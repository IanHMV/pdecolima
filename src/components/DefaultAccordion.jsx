import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Lista } from "./Lista";

export default function DefaultAccordion({ data }) {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  return (
    <>
      {data.map((item, i) => (
        <Accordion key={i} open={open === i}>
          <AccordionHeader onClick={() => handleOpen(i)}>
            {item.titulo}
          </AccordionHeader>
          <AccordionBody>
            <Lista listaCompleta={item.links} />
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
