
import React from 'react'

class ScrollIcon extends React.Component {
    render() {
        return (
        <a href={this.props.link}><img src={this.props.image} alt='scroll' /></a>
        );
    }
}

export default ScrollIcon;