
import React from 'react'

class LearningItem extends React.Component {
    
    render() {
        return (
            <div>
                <img src={this.props.icon} alt={this.props.name} />
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default LearningItem;