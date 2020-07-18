import React from "react";
import Navigation from "./Navigation";
import RegistroEmpleo from "./RegistroEmpleo";

function Index() {
  return (
    <>
      <Navigation />
      <hr/>
      <div className="container p-4">
        <RegistroEmpleo />
      </div>
    </>
  );
}

export default Index;
