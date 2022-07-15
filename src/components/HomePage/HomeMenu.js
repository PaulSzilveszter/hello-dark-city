import { useState } from "react"

import HomeMenuButton from "./HomeMenu/HomeMenuButton";

import "./HomeMenu.css"

import MenuButton from "../../assets/MenuButton.png"
import Logo from "../../assets/DARK CITY Logo white.png"

export default function HomeMenu() {

    const [isOpen, toggleMenu] = useState(false);

    const menuClosed = (
        <button id="homepage-menu-closed" onClick={() => {
            toggleMenu(!isOpen);
        }}>
            <img src={MenuButton} />
        </button>
    )

    const closeButton = (
        <div id="homepage-menu-upper">
            <img src={Logo} style={{opacity:"50%"}}/>
            <button id="homepage-menu-close-button" onClick={() => {
                toggleMenu(!isOpen);
            }}>
                X
            </button>
        </div>
    )

    const menuOpened = (<div id="homepage-menu-opened">
        {closeButton}
        <HomeMenuButton text="MAIN SITE" link="" />
        <HomeMenuButton text="TWITTER" link="" />
        <HomeMenuButton text="DISCORD" link="" />
        <HomeMenuButton text="AI CHAT BOT" link="" />
        <HomeMenuButton text="WHITEPAPER" link="" />
        <HomeMenuButton text="TIK TOK" link="" />

    </div>)

    return (
        
            isOpen ? menuOpened : menuClosed
        
    )
}