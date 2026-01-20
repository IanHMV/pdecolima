import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Entes = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-3/4 mt-7 mb-28 shadow-lg p-2 border-2 border-gray-100 rounded-lg">
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              Organismos Centralizados
            </AccordionHeader>
            <AccordionBody className="flex flex-col">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 1
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 2
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 3
              </a>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Organismos Descentralizados
            </AccordionHeader>
            <AccordionBody className="flex flex-col">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 1
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 2
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 3
              </a>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Otros
            </AccordionHeader>
            <AccordionBody className="flex flex-col">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 1
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 2
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Link 3
              </a>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Entes;
