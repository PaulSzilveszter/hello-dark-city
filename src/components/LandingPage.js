import React from "react";
import "./LandingPage.css"

import Background from "./reusables/Background";
import Header from "./LandingPage/Header";
import Mid from "./LandingPage/Mid";
import Footer from "./LandingPage/Footer";




export default function LandingPage(){
  
    return(
    <div id="landing-page">
      <Background/>
      <Header/>
      <Mid/>
      <Footer/>

    </div>
    );

}