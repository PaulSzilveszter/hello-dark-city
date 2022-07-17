/*
  Functionality: Represents the link page. Navigate to it by adding to the Url: /areyoulost

*/

import "./LinkPage.css"

import Background from "./reusables/Background.js"
import LinkPageButton from "./LinkPage/LinkPageButton"


import Gif from "../assets/LinkPageBackground.gif"
import SignButton1 from "../assets/sign_post_1.png"
import SignButton2 from "../assets/sign_post_2.png"
import Logo from "../assets/logo_white.png"

export default function LinkPage (){

    const logo=(
      <div 
      style={{position:"relative", height:"40%"}}>
        
        <img id="link-page-logo" src={Logo} 
        style={{height:"10rem", width:"10rem", opacity:"70%", top:"50%", left:"50%", transform:"translate(-50%, -50%)", position:"relative"}}/>


      </div>
    );
    const pole = (
      <div style={{backgroundColor: "black", width:"15px", height:"60%", top:"40%"}}></div>
    );

  
    return(
    <div id="link-page">
        <Background  Gif = {Gif} isImage={false} isGif={true} isAudio={true}/>
        
        {logo}
        {pole}

        <LinkPageButton Image={SignButton2} transition={"right"} text="ENTER SITE" link=""/>
        <LinkPageButton Image={SignButton1} transition={"left"} text="DISCORD" link=""/>
        <LinkPageButton Image={SignButton2} transition={"right"} text="TWITTER" link=""/>
        <LinkPageButton Image={SignButton1} transition={"left"} text="WHITEPAPER" link=""/>
        <LinkPageButton Image={SignButton2} transition={"right"} text="ABOUT" link=""/>
        <LinkPageButton Image={SignButton1} transition={"left"} text="WAKE UP" link=""/>
        <LinkPageButton Image={SignButton2} transition={"right"} text="TIK TOK" link=""/>
        
    </div>
    )
  

}