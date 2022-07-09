import React from "react";

let textPozition = 0;
let speed = 100;


export default class FooterTextBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }

        this.typewriter = this.typewriter.bind(this);
    }

    typewriter() {
        this.setState({ message: this.props.message.substring(0, textPozition) });
        if (textPozition++ != this.props.message.length) {
            setTimeout(this.typewriter, speed);
        }
    }

    componentDidMount() {
        this.typewriter();
    }


    render() {
        return (
            <div id={this.props.id}>
                {this.state.message}
                <span>{'\u25ae'}</span>
            </div>
        )
    }

}