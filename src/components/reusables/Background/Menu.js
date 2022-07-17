import { useState } from "react"

import MenuButton from "./Menu/MenuButton.js";

import "./Menu.css"

import MenuButtonImg from "../../../assets/MenuButton.png"
import Logo from "../../../assets/logo_white.png"

export default function Menu() {

    const [isOpen, toggleMenu] = useState(false);

    const menuClosed = (
        <button id="menu-closed" onClick={() => {
            toggleMenu(!isOpen);
        }}>
            <img src={MenuButtonImg} />
        </button>
    )

    const closeButton = (
        <div id="menu-upper">
            <img src={Logo} style={{opacity:"50%"}}/>
            <button id="menu-close-button" onClick={() => {
                toggleMenu(!isOpen);
            }}>
                X
            </button>
        </div>
    )

    const menuOpened = (<div id="menu-opened">
        {closeButton}
        <MenuButton text="MAIN SITE" link="" />
        <MenuButton text="TWITTER" link="" />
        <MenuButton text="DISCORD" link="" />
        <MenuButton text="AI CHAT BOT" link="" />
        <MenuButton text="WHITEPAPER" link="" />
        <MenuButton text="TIK TOK" link="" />

    </div>)

    return (
        
            isOpen ? menuOpened : menuClosed
        
    )
}