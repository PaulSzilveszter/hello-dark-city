import React from "react";
import "./LandingPage.css"

import Background from "./reusables/Background";
import Header from "./LandingPage/Header";
import Mid from "./LandingPage/Mid";
import Footer from "./LandingPage/Footer";

import { ghostCursor } from 'cursor-effects';

new ghostCursor();


export default function LandingPage(){
  
    return(
    <div id="LandingPage">

      <Background/>
      <Header/>
      <Mid/>
      <Footer/>

    </div>
    );

}