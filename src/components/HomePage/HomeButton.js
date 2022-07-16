/*
  Functionality: Represents any of those 4 main buttons of the home page

*/

import "./HomeButton.css"

export default function HomeButton(props){
    return(
    <a id = {props.id} className="homepage-button">{props.id.split('-').join(' ').toUpperCase()}</a>
    )
}