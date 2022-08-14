/*
    Represents a customisable background
*/
import "./Background.css"



import Audio from "../../assets/BackgroundAudio.wav";


export default function Background(props) {

    const gif = <img src={props.Gif} className="background-gif" alt="Background gif"/>
    const image = <img src={props.Image}  alt="Background"/>

    return (
        <>
            {/*The line below renders the Menu only if the "isMenu" prop is set to true to an instance of this component. This pattern can be found later */ }
            
            <div className="background" style={{position: props.position,height: props.height,width: props.width, ...props.style}} >

            

                {props.isGif && gif}
                {props.isImage && image}
                {props.isAudio && <audio autoPlay loop >
                    <source src={Audio} type="audio/wav" />
                </audio> }

                {props.children}
                
              
            </div>

        </>);
}