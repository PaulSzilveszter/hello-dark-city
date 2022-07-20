import "./MenuButton.css"

export default function MenuButton(props){
   
    return (
        <a  className = {"menu-button "+ "menu-button-"+props.side} href={props.link}>
            {props.text}
        </a>
    )
}