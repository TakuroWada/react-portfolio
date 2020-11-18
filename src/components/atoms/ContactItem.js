
import React from 'react'

class ContactItem extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.icon} alt={this.props.name} />
                <p>{this.props.value}</p>
            </div>
        );
    }
}

export default ContactItem;