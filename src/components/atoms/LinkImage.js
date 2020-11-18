
import React from 'react'

class LinkImage extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <a href={this.props.url}><img src={this.props.image} alt={this.props.name}/></a>
            </div>
        );
    }
}

export default LinkImage;