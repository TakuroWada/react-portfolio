import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';
import MediaQuery from "react-responsive";
import SimpleMenu from '../atoms/SimpleMenu'
import MenuItem from '@material-ui/core/MenuItem';
class Header extends React.Component {

    pcQuery = "(min-width:" + breakPoint.desktopMin + "px)";
    spQuery = "(max-width:" + breakPoint.desktopMin + "px)";

    render() {
        return (
            <Head>
                <Title>Takuro Wadas Portfolio</Title>
                {/* モバイル表示 */}
                <MediaQuery query={this.spQuery} >
                    <SimpleMenu />
                </MediaQuery>

                {/* PC表示 */}
                <MediaQuery query={this.pcQuery} >
                    <Gmenu>
                        <MenuItem>Top</MenuItem>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Carear</MenuItem>
                        <MenuItem>Skill</MenuItem>
                        <MenuItem>Learning</MenuItem>
                        <MenuItem>Work</MenuItem>
                        <MenuItem>Contect</MenuItem>
                    </Gmenu>
                </MediaQuery>
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
    z-index:1;

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding:16px;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        
    }
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: #fafafa;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 20px;
    }
`;

const Gmenu = styled.ul`
    li {
        display: inline;
        color: #fafafa;
    }
`;

export default Header;