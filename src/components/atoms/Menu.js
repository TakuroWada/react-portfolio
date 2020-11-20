import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';

class Menu extends React.Component {
    render() {
        return (
        <ListItem><Link href='#'>{this.props.item}</Link></ListItem>
        );
    }
}

const ListItem = styled.li`
        font-size: 16px;
        color: #fafafa;

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding:4px;
        display:inline-block;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 20px;
    }
`;

const Link = styled.a`

    &:hover{color: skyblue;}
    
    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding:16px;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        
    }
`;

export default Menu;