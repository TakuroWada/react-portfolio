
import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';

class Icon extends React.Component {
    render() {
        return (
        <Img src={this.props.image} alt='myicon'/>
        );
    }
}

const Img = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #fafafa;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
    width: 100px;
    height: 100px;
    }
`;

export default Icon;