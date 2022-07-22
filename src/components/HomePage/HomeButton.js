/*
  Represents any of those 4 main buttons of the home page

*/

import "./HomeButton.css"

export default function HomeButton(props){
    return(
    <a href={props.link} id = {props.id} className="homepage-button">{props.id.split('-').join(' ').toUpperCase()}</a>
    )
}