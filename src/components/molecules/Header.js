import React from 'react'
import Menu from '../atoms/Menu'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Takuro Wadas Portfolio</h1>
                <ul>
                    <Menu item='top' />
                    <Menu item='profile' />
                    <Menu item='carear' />
                    <Menu item='skill' />
                    <Menu item='works' />
                    <Menu item='larning' />
                    <Menu item='contact' />
                </ul>
            </div>
        );
    }
}

export default Header;