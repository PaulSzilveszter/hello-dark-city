/*
This Components Builds the whole menu
*/
import { useState } from "react"

import MenuButton from "./Menu/MenuButton.js";
import SignOutButton from "./Menu/SignOutButton.js";
import URL from "../scripts/URL.js";

import "./Menu.css"

import MenuButtonImg from "../../../assets/menu-button.png"
import Logo from "../../../assets/logo-white.png"


//Gets the main page url:
const mainURL = URL.getDomain();

export default function Menu() {

    //This hook if the menu is opened or not

    const [isOpen, toggleMenu] = useState(false);

    //Menu Closed Parts:

    const menuClosed = (
        <button id="menu-closed" onClick={() => {
            toggleMenu(!isOpen);
        }}>
            <img src={MenuButtonImg} alt="Menu button"/>
        </button>
    )

    

    //Menu Opened Parts:

    const menuUpper = (
        <div id="menu-upper">
            
            <div id="menu-upper-company-name">DARK CITY</div>
            
            <div id="menu-user-greeting">Hello, User!</div>
            
            <button id="menu-close-button" onClick={() => {
                toggleMenu(!isOpen);
            }}>
                X
            </button>
        </div>
    )

    const horizontalLine = (<div className="menu-horizontal-line"></div>)

        //Open the menu to see what this is:

    function category(categoryName) {
        return <div className="menu-category">{categoryName}</div>
    }

        //The menu opened:
        
    const menuOpened = (<div id="menu-opened">
        {menuUpper}

        {horizontalLine}
        {category("SOCIAL MEDIA")}

        <MenuButton side={"left"} text="DISCORD" link="https://discord.gg/ABAvjWVkR5" target={"_blank"}/>
        <MenuButton side={"right"} text="TWITTER" link="https://twitter.com/helloDARKCITY" target={"_blank"}/>
        <MenuButton side={"left"} text="TIKTOK" link="" target={"_blank"}/>
        <MenuButton side={"right"} text="MARKET" link="" target={"_blank"}/>

        {horizontalLine}
        {category("ARE YOU LOST?")}

        <MenuButton side={"left"} text="LANDING PAGE" link={mainURL} />
        <MenuButton side={"right"} text="HOME" link={mainURL + "/home"} />
        <MenuButton side={"left"} text="ABOUT" link="" />
        <MenuButton side={"right"} text="WHITEPAPER" link="https://factoryofthesol.com/whitepaper" />

        <SignOutButton id={"menu-sign-out-button"}/>
    </div>)


    //Rendering:
    return (
        isOpen ? menuOpened : menuClosed

    )
}