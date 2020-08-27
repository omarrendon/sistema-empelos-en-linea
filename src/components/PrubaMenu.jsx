import React from "react";
import { Button } from "react-bootstrap";

export const PrubaMenu = ({ history }) => {
  const handleEmpresario = () => {
    console.log("empresario");
    history.replace('/empresario');
  };

  const handleCandidato = () => {
    console.log("candidato");
    history.replace("/candidato");
  };

  return (
    <div>
      <Button onClick={handleEmpresario}>Empresario</Button>
      <Button onClick={handleCandidato}>Candidato</Button>
    </div>
  );
};
