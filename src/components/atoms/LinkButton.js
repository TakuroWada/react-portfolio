
import React from 'react'

class LinkButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.link}>{this.props.text}</button>
        );
    }
}

export default LinkButton;