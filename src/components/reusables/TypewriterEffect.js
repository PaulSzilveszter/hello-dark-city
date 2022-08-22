/*
    Typewriter effect animation
*/
import React from "react";

import "./TypewriterEffect.css"

let currentCharacter = 0;


export default class TypewriterEffect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }

        this.typewriter = this.typewriter.bind(this);
    }

    //The function:

    typewriter() {
        this.setState
            (
                { message: this.props.message.substring(0, currentCharacter) }
            );


        if (currentCharacter++ !==this.props.message.length) {
            setTimeout(this.typewriter, this.props.speed);
        }
    }

    //Initializes when created:

    componentDidMount() {
        this.typewriter();
    }

    //Renders:

    render() {
        return (
            <>
                {this.state.message}
                <span className="blinker">{'\u25ae'}</span>
            </>
        )
    }

}