import React from 'react'
import styled from 'styled-components'
import { breakPoint } from '../../common/breakPoint';
class LinkImage extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <a href={this.props.url}><Img src={this.props.image} alt={this.props.name}/></a>
            </div>
        );
    }
}

const Img = styled.img`
    margin-top: 16px;
    max-width: 320px;
    width: 100%;
    border-radius: 4px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        transition:1s all;

        &:hover{
            transform:scale(1.2,1.2);
            transition:1s all;
        }
    }
`;

export default LinkImage;