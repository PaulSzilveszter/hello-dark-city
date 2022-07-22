/*
    Represents a customisable background
*/
import "./Background.css"

import "./Background/Menu.js"

import Audio from "../../assets/BackgroundAudio.wav";
import Menu from "./Background/Menu.js";

export default function Background(props) {

    const gif = <img src={props.Gif} id="background-gif" alt="Background gif"/>
    const image = <img src={props.Image}  alt="Background"/>

    return (
        <>
            {/*The line below renders the Menu only if the "isMenu" prop is set to true to an instance of this component. This pattern can be found later */ }
            {props.isMenu && <Menu />}
            
            <div id="background">

                {props.isGif && gif}
                {props.isImage && image}
                {props.isAudio && <audio autoPlay loop >
                    <source src={Audio} type="audio/wav" />
                </audio> }

            </div>

        </>);
}