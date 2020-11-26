import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';
import Icon from '../atoms/Icon'
import LinkArea from '../molecules/LinkArea'
import ProfleImage from '../../assets/images/profleImg.jpg'
import ScrollImage from '../../assets/images/scrollIcon.png'
import BackGround from '../../assets/images/first-view-bg.jpg'
class FirstView extends React.Component {
    render() {
        return (
            <FView>
                <Catch>Welcom To My Portfolio!</Catch>

                <FlexBox>
                    <NameArea>
                        <Icon image={ProfleImage}/>
                        <Name>Takuro Wada</Name>
                    </NameArea>

                    <LinkAreaWrapper>
                        <LinkArea />
                    </LinkAreaWrapper>
                </FlexBox>

                <ScrollIconWrapper>
                    <ScrollIcon link='#' image={ScrollImage} />
                </ScrollIconWrapper>
            </FView>
        );
    }
}

class ScrollIcon extends React.Component {
    render() {
        return (
        <a href={this.props.link}><ScrollImg src={this.props.image} alt='scroll' /></a>
        );
    }
}

const FView = styled.div`
    padding: 96px 8px 16px 8px;
    width: 100%;
    margin: 0 auto;
    background-image: url(${BackGround});
    background-size: cover;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        padding: 160px 0 32px 0;
    }
`;

const Catch = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color:#fafafa;
    text-align: center;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        font-size: 32px;
    }
`

const NameArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px auto 0 auto;

    img {
        margin-right: 16px;
    }

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        flex-direction: column;
        margin: 0 48px 0 0px;

        img {
            margin: 8px;
        }
    }
`;

const Name = styled.p`
    font-size: 18px;
    color: #fafafa;
    text-align: center;
`;

const FlexBox = styled.div`

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 64px;
    }
`;

const ScrollIconWrapper = styled.div`
    margin: 64px auto 0 auto;
    text-align: center;
`;

const ScrollImg = styled.img`
    width: 80px;
    height: 64px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        width: 120px;
        height: 96px;
    }
`;

const LinkAreaWrapper = styled.div`
    margin-top: 32px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
        margin-top: 0;
    }
`;

export default FirstView;