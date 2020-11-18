import React from 'react'

class Menu extends React.Component {
    render() {
        return (
        <li><a href='#'>{this.props.item}</a></li>
        );
    }
}

export default Menu;