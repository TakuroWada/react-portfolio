import React from 'react'
import styled from 'styled-components'
import { breakPoint } from '../../common/breakPoint';
import SectionTitle from '../atoms/SectionTitle'
import GmailLogo from '../../assets/images/google-gmail.svg'

class Contact extends React.Component {

    render() {
        return (
            <ContactContent>
                <SectionTitle title='Contact' />
                <ContactItem name='Email' value='takuro.wada6@gmail.com' icon={GmailLogo} />
            </ContactContent>
        );
    }
}

class ContactItem extends React.Component {
    render() {
        return (
            <ItemWrapper>
                <img src={this.props.icon} alt={this.props.name} />
                <p>{this.props.value}</p>
            </ItemWrapper>
        );
    }
}

//以下スタイル
const ContactContent = styled.div`
    width: 100%;
    padding: 24px 8px;

    h2 {
        text-align: center;
    }

    div {
        margin-top: 24px;
    }

    img {
        margin-right: 8px;
        width: 24px;
        height: 24px;

        @media screen and (min-width: ${breakPoint.desktopMin}px) {
            width: 32px;
            height: 32px;
        }
    }

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding: 32px 8px;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Contact;