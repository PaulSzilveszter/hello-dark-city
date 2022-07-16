/*
  Functionality: Represents the link page. Navigate to it by adding to the Url: /areyoulost

*/

import "./LinkPage.css"

import Background from "./reusables/Background.js"
import LinkPageButton from "./LinkPage/LinkPageButton"


import Gif from "../assets/LinkPageBackground.gif"


export default function LinkPage (){

  
    return(
    <div id="link-page">
        <Background  Gif = {Gif} isImage={false} isGif={true} isAudio={true}/>
        
        <LinkPageButton text="MAIN SITE" link=""/>
        <LinkPageButton text="Sample" link=""/>
        <LinkPageButton text="Sample" link=""/>
        <LinkPageButton text="Sample" link=""/>
        <LinkPageButton text="Sample" link=""/>
    </div>
    )
  

}