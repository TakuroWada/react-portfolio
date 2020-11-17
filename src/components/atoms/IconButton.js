
import React from 'react'

class IconButton extends React.Component {

    render() {
        return (
        
            <button onClick={() => { this.props.callMethod(this.props.image) }}>
                <img src={this.props.icon} alt={this.props.value}/>
            </button>
        );
    }
}

export default IconButton;