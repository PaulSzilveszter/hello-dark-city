/*
  Functionality: Represents the landing page

*/

import React from "react";
import "./LandingPage.css"

import Background from "./reusables/Background";
import Header from "./LandingPage/Header";
import Mid from "./LandingPage/Mid";
import Footer from "./LandingPage/Footer";

import Gif from "../assets/IANUA Background.gif";
import Image from "../assets/Black Overlay.png";


export default function LandingPage(){
  
    return(
    <div id="landing-page">
      <Background isMenu={true} Gif = {Gif} Image ={Image} isImage={true} isGif={true} isAudio={true}/>
      <Header/>
      <Mid/>
      <Footer/>

    </div>
    );

}