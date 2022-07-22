/*
  Functionality: Represents the home page. Navigate to it by adding to the Url: /home

*/

import "./HomePage.css"

import Background from "./reusables/Background";
import HomeButton from "./HomePage/HomeButton";

import Gif from "../assets/ianua-background.gif";
import Image from "../assets/background-black-overlay.png";

export default function HomePage() {


   return (
      <>
         <div id="home-page">
            <Background isMenu={true} Gif = {Gif} Image ={Image} isImage={true} isGif={true} isAudio={true}/>
            <HomeButton id="ai-chat-bot"/>
            <HomeButton id="about"/>
            <HomeButton id="path-of-sol"/>
            <HomeButton id="market"/>
            
            
         </div>

      </>
   )
}