import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionHeader = styled.button`
cursor: pointer;
background-color: beige;
transition: 0,4s;
border: none;
width: 100%;
max-width: 600px;
height: 30px;
margin: 0 0 10px 0;
  :hover {
  background-color: #B72C72;
  }  
`;

const AccordionContent = styled.div`
overflow: hidden;
max-height: ${(props) => (props.open ? '100%' : '0')};
width: 100%;
`;

export const Accordion = ({ header, content }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <>
      <AccordionHeader onClick={toggleAccordion}>
        {header}
      </AccordionHeader>
      <AccordionContent open={open}>
        {content}
      </AccordionContent>
    </>
  );
};