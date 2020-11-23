import React from 'react'

class LinkButton extends React.Component {

    render() {
        return (
            <a href={this.props.link} >
                <img src={this.props.icon} alt={this.props.text} />
            </a>
        );
    }
}

export default LinkButton;