import "./LinkPageButton.css"

export default function LinkPageButton(props){
    
    
    
    return (
        <a className = {"link-page-button "+props.transition} href={props.link} target="_blank">
            <img  src={props.Image} alt="Background"></img>
            <div className="link-page-button-text">{props.text}</div>
        </a>
    )
}