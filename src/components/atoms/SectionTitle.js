
import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';

class SectionTitle extends React.Component {
    render() {
        return (
            <Title>{this.props.title}</Title>
        );
    }
}

const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    color: #0A88CB;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 24px;
    }
`;

export default SectionTitle;