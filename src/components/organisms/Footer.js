import React from 'react'
import styled from 'styled-components'

class Footer extends React.Component {
    render() {
        return (
            <FooterContent>
                <p>CopyRight: TakuroWada</p>
            </FooterContent>
        );
    }
}

//以下スタイル
const FooterContent = styled.div`
    width: 100%;
    padding: 24px 8px;
    background-color: #111;

    p {
        text-align: center;
        font-weight: bold;
        color: #fafafa;
    }
`;

export default Footer;