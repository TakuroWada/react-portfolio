import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';

class LinkButton extends React.Component {
    render() {
        return (
            <Link href={this.props.link} >
                <Img src={this.props.icon} alt={this.props.text} />
            </Link>
        );
    }
}

const Link = styled.a`
    display: inline-block;
    background-color: #131A29;
    opacity: .8;
    width: 80px;
    text-align: center;
    padding: 8px;
    border-radius: 4px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        width: 100px;
    }
`;

const Img = styled.img`
    width: 24px;
    height: 24px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        width: 32px;
        height: 32px;
    }
`;

export default LinkButton;