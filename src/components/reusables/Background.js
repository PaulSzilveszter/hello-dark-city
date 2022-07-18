import "./Background.css"

import "./Background/Menu.js"


import Audio from "../../assets/BackgroundAudio.wav";

import Menu from "./Background/Menu.js";

export default function Background(props) {
    const gif = <img src={props.Gif} id="background-gif" />
    const image = <img src={props.Image} />

    return (
        <>
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