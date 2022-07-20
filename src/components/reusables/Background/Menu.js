import { useState } from "react"

import MenuButton from "./Menu/MenuButton.js";

import "./Menu.css"

import MenuButtonImg from "../../../assets/MenuButton.png"
import Logo from "../../../assets/logo_white.png"

import URL from "../scripts/URL.js";
const mainURL=URL.getMainURL();

export default function Menu() {

    const [isOpen, toggleMenu] = useState(false);

    const menuClosed = (
        <button id="menu-closed" onClick={() => {
            toggleMenu(!isOpen);
        }}>
            <img src={MenuButtonImg} />
        </button>
    )

        const logo =(<img src={Logo} style={{opacity:"50%"}}/>);

    const menuUpper = (
        <div id="menu-upper">
            <div id="menu-upper-company-name">DARK CITY</div>
            <div id = "menu-user-greeting">Hello, User!</div>
            <button id="menu-close-button" onClick={() => {
                toggleMenu(!isOpen);
            }}>
                X
            </button>
        </div>
    )

    const horizontalLine=(<div className="menu-horizontal-line"></div>)
     
    function category(categoryName){
         return <div className="menu-category">{categoryName}</div>
    }

    const menuOpened = (<div id="menu-opened">
        {menuUpper}

            {horizontalLine}
            {category("SOCIAL MEDIA")}
        
        <MenuButton side = {"left"} text="DISCORD" link="https://discord.gg/ABAvjWVkR5" />
        <MenuButton side ={"right"} text="TWITTER" link="https://twitter.com/helloDARKCITY" />
        <MenuButton side = {"left"} text="TIKTOK" link="" />
        <MenuButton side ={"right"} text="MARKET" link="" />

        {horizontalLine}
        {category("ARE YOU LOST?")}

        <MenuButton side = {"left"} text="LANDING PAGE" link={mainURL} />
        <MenuButton side ={"right"} text="HOME" link={mainURL+"/home"} />
        <MenuButton side = {"left"} text="ABOUT" link="" />
        <MenuButton side ={"right"} text="WHITEPAPER" link="https://factoryofthesol.com/whitepaper" />
        

    </div>)
    console.log(URL.getMainURL());
        return (
        
            isOpen ? menuOpened : menuClosed
        
    )
}