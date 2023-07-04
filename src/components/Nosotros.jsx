import React from "react";
import ArbolDeLaVida from "./ArbolDeLaVida";
import PartesLogo from "./PartesLogo";
import QuienSomos from "./QuienSomos";
import Directiva from "./Directiva";
import SerParte from "./SerParte";
import Identidad from "./Identidad";
import Form from "./Form"


const Nosotros = () => {
    return (
        <div id="nosotros">
            <QuienSomos/>
            <Directiva/>
            <Identidad/>
            <PartesLogo />
            <ArbolDeLaVida />
            <SerParte />
            <Form />
          
          
        </div>
    );
};

export default Nosotros;
