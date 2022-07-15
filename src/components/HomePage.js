import { Link } from "react-router-dom";

import "./HomePage.css"

import Background from "./reusables/Background";
import HomeMenu from "./HomePage/HomeMenu";
import HomeButton from "./HomePage/HomeButton";

export default function HomePage() {


   return (
      <>
         <div id="home-page">
            <Background />
            <HomeButton id="ai-chat-bot"/>
            <HomeButton id="about"/>
            <HomeButton id="path-of-sol"/>
            <HomeButton id="market"/>
            <HomeMenu/>
            
         </div>

      </>
   )
}