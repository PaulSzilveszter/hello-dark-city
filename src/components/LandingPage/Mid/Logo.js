/*
    Represents the logo from the landing page that acts as a link
*/
import "./Logo.css";

import LogoImg from "../../../assets/logo_white.png"

export default function Logo(){

 
    return(
    <>
        <a id="logo" href="https://www.factoryofthesol.com/hellodarkcity" target="_blank"> <img src={LogoImg} /></a>
    </>
    )
  

}