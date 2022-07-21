/*
    Represents the typewriter message from the landing page
*/
import TypewriterEffect from "../../reusables/TypewriterEffect";

import "./FooterTextBox.css";




export default function FooterTextBox(props) {
  
        return (
            <div id={props.id}>
                <TypewriterEffect message={"IANUA SAYS: HELLO OLD FRIEND,\nHOW WAS YOUR LIFE?\nWELCOME TO THE DARK CITY"} speed={100}/>
            </div>
        )

}