/*
    Represents a button from the link page that can be customised for every instance using props
*/

import "./LinkPageButton.css"

export default function LinkPageButton(props){
    
    
    
    return (
        <a className = {"link-page-button link-page-button-"+props.transition} href={props.link} target="_blank" rel="noreferrer">

            <img  src={props.Image} alt="Background"/>
            
            <div className="link-page-button-text">{props.text}</div>
        </a>
    )
}