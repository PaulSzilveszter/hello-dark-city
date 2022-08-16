import "./IanuaAIDemo.css"

import Background from "./reusables/Background";


import Gif from "../assets/ianua-background.gif";
import Image from "../assets/background-black-overlay.png";
import Menu from "./reusables/Background/Menu";

export default function IanuaAIDemo(){
  
    return(
    <div id="landing-page">
      <Menu/>
      <Background isMenu={true} Gif = {Gif} Image ={Image} isImage={true} isGif={true} isAudio={true}/>
      

    </div>
    );

}