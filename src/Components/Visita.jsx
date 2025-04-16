import React from "react";
import './Visita.css';
import logo1 from "../assets/wall-e_400x400.jpg"
import logo2 from "../assets/insta.webp"
import logo3 from "../assets/wpp.webp"
import logo4 from "../assets/in.webp"
function Visita(){
    return(<>
    <img src={logo1} alt="" className="pizza"/>

    <p>Apenas recolhendo lixo</p>
    <a href="https://www.instagram.com/disneyplusbr/" target="_blank">
                <img src={logo2} alt="" className="Botao" />
            </a>
    <a href="https://w.app/nhmbf5" target="_blank">
                <img src={logo3} alt="" className="Botao" />
            </a>
    <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A10288516&keywords=disney%2B%20hotstar&origin=RICH_QUERY_SUGGESTION&position=9&searchId=d38aa452-4f78-4861-9080-2abb60357686&sid=fyG&spellCorrectionEnabled=false" target="_blank">
                <img src={logo4} alt="" className="Botao" />
            </a>
    </>

    );



};
export default Visita;