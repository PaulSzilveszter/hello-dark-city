/*
  Functionality: Represents the link page. Navigate to it by adding to the Url: /areyoulost

*/
import { Helmet } from "react-helmet";

import "./LinkPage.css"

import Background from "./reusables/Background.js";
import LinkPageButton from "./LinkPage/LinkPageButton";
import TypewritterEffect from "./reusables/TypewriterEffect.js";

import Gif from "../assets/link-page-background.gif"
import SignButton1 from "../assets/sign-post-1.png"
import SignButton2 from "../assets/sign-post-2.png"
import Logo from "../assets/logo-white.png"

export default function LinkPage() {

  const message = (
    <div id="link-page-message">
      <TypewritterEffect message={"A VOICE SAYS: ARE YOU LOST, CHILD?"} speed={100} />
    </div>
  )

  const logo = (
    <div
      style={{ position: "relative", height: "40%" }}>

      <img id="link-page-logo" src={Logo}
        style={{ height: "10rem", width: "10rem", opacity: "70%", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "relative" }} alt="Dark city logo" />


    </div>
  );
  const pole = (
    <div style={{ backgroundColor: "black", width: "15px", height: "60%", top: "40%" }}></div>
  );


  return (<>
    <Helmet>
    <meta name="description" content="Dark City's link page"/>
      <title>Hello Dark City Link Page</title>
      
     
    </Helmet>

    <div id="link-page">
      <Background Gif={Gif} isImage={false} isGif={true} isAudio={true} />
      {message}
      {logo}
      {pole}

      <LinkPageButton Image={SignButton2} transition={"right"} text="ENTER SITE" link="https://www.factoryofthesol.com/hellodarkcity" />
      <LinkPageButton Image={SignButton1} transition={"left"} text="DISCORD" link="https://discord.gg/ABAvjWVkR5" />
      <LinkPageButton Image={SignButton2} transition={"right"} text="TWITTER" link="https://twitter.com/helloDARKCITY" />
      <LinkPageButton Image={SignButton1} transition={"left"} text="WHITEPAPER" link="https://www.factoryofthesol.com/whitepaper" />
      <LinkPageButton Image={SignButton2} transition={"right"} text="ABOUT" link="" />
      <LinkPageButton Image={SignButton1} transition={"left"} text="WAKE UP" link="" />
      <LinkPageButton Image={SignButton2} transition={"right"} text="TIK TOK" link="https://www.tiktok.com/@hellodarkcity" />

    </div>
  </>)


}