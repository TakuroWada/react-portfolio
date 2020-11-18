
import React from 'react'

class SelectButton extends React.Component {

    render() {
        return (
            <button onClick={() => { this.props.callMethod(this.props.info) }}>
                <img src={this.props.info.icon} alt={this.props.info.title} />
            </button>
        );
    }
}

export default SelectButton;