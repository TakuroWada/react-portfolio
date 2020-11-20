import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';
import Menu from '../atoms/Menu'

class Header extends React.Component {
    render() {
        return (
            <Head>
                <Title>Takuro Wadas Portfolio</Title>
                <ul>
                    <Menu item='top' />
                    <Menu item='profile' />
                    <Menu item='carear' />
                    <Menu item='skill' />
                    <Menu item='works' />
                    <Menu item='larning' />
                    <Menu item='contact' />
                </ul>
            </Head>
        );
    }
}

const Head = styled.header`
    background-color: #333;
    display:flex;
    position: fixed;
    justify-content:space-between;
    align-items:center;
    padding:8px;
    width: 100%;

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding:16px;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        
    }
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: #fafafa;

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        font-size: 24px;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 28px;
    }
`;

export default Header;