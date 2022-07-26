/*
    Represents a button from the menu that can be customised for every instance using props
*/
import "./MenuButton.css"

export default function MenuButton(props){
   
    return (
        <a  className = {"menu-button menu-button-"+props.side} href={props.link} target={props.target} rel="noreferrer">
            {props.text}
        </a>
    )
}