
import React from 'react'

class IconCard extends React.Component {

    render() {
        return (
            <button onClick={() => { this.props.callMethod(this.props.info) }}>
                <img src={this.props.info.icon} alt={this.props.info.name} />
                <p>{this.props.info.name}</p>
            </button>
        );
    }
}

export default IconCard;