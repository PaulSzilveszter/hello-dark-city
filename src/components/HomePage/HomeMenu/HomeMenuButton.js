import "./HomeMenuButton.css"

export default function HomeMenuButton(props){
    return (
        <a class = "homepage-menu-button" href={props.link}>
            {props.text}
        </a>
    )
}