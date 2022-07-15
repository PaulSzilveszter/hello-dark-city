import "./LinkPageButton.css"

export default function LinkPageButton(props){
    return (
        <a class = "link-page-button" href={props.link}>
            {props.text}
        </a>
    )
}