import React, { useState } from "react";
import "./css/style.css";
import GlobelTemp from "./GlobelTemp";
import Local from "./Local";


  
const Weatherapp = () => {

   const [active,setActive] = useState("Globel");
   
    return(
        <>
            
            { active === "Globel" && <GlobelTemp/> } 
            { active === "Local" && <Local/> } 
            <button className="btn1" onClick={ ()=> setActive("Globel")}>Globel</button>
            <button className="btn2" onClick={ ()=> setActive("Local")}>Local</button>
            
       </>
    );
}


export default Weatherapp;


