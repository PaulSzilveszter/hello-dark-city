import "./MenuButton.css"

export default function MenuButton(props){
    return (
        <a class = "menu-button" href={props.link}>
            {props.text}
        </a>
    )
}