import React from 'react'
import styled from 'styled-components'
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
`;

export default LinkImage;