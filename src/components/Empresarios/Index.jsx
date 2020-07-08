import React from "react";
// import { useForm } from "../../Hooks/useForm";
import Mapa from "./Mapa";
import Navigation from "./Navigation";
import RegistroEmpleo from "./RegistroEmpleo";

function Index() {
  

  return (
    <div className="">
      <Navigation />
      <RegistroEmpleo/>
      {/* <div className="row">

        <div className="col-md-5 col-sm-12 col-xs-12">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
        <div className="col-md-7 col-sm-12 col-xs-12">
          <Mapa />
        </div>
      </div>
      <hr /> */}
    </div>
  );
}

export default Index;
