import "./Background.css"

import Gif from "../../assets/IANUA Background.gif";
import Layer from "../../assets/Black Overlay.png";
import Audio from "../../assets/BackgroundAudio.wav";

export default function Background() {
    return (
        <div id="background">
            <img src={Gif} id="gif" />
            <img src={Layer} />
            <audio autoPlay loop >
                <source src={Audio} type="audio/wav"/>
            </audio>
            
        </div>
    );
}