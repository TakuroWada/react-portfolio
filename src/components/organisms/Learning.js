import React from 'react'
import styled from 'styled-components'
import { breakPoint } from '../../common/breakPoint';
import MediaQuery from "react-responsive";
import SectionTitle from '../atoms/SectionTitle'

//アイコン
import TsLogo from '../../assets/images/typescript-icon.svg'
import ReactLogo from '../../assets/images/react.svg'
import ReduxLogo from '../../assets/images/redux.svg'
import VueLogo from '../../assets/images/vue.svg'
import DockerLogo from '../../assets/images/docker-icon.svg'
import AwsLogo from '../../assets/images/aws.svg'

class Learning extends React.Component {

    learningNow = [
        {
            icon: ReactLogo,
            name: 'React'
        },
        {
            icon: DockerLogo,
            name: 'Docker'
        },
        {
            icon: AwsLogo,
            name: 'AWS'
        }
    ];

    learningNext = [
        {
            icon: ReduxLogo,
            name: 'Redux'
        },
        {
            icon:  TsLogo,
            name: 'TypeScript'
        },
        {
            icon: VueLogo,
            name: 'Vue.js'
        }
    ];

    nowSectionColor = '#0C499A';
    nextSectionColor = '#F48D02';

    tabletQuery = "(min-width:" + breakPoint.tabletMin + "px)";
    spQuery = "(max-width:" + breakPoint.mobileMax + "px)";

    render() {
        return (
            <LearningContent id='learning'>
                <SectionTitle title='Learning' />
                <DisplayArea> 
                    <LearningSection color={this.nowSectionColor}>
                        <h3>Now</h3>
                        {this.learningNow.map((listItem) => {
                            return <LearningItem icon={listItem.icon} name={listItem.name} />
                        })}
                    </LearningSection>

                    {/* スマホ表示 */}
                    <MediaQuery query={this.spQuery} >
                        <Arrow>∨</Arrow>
                    </MediaQuery>

                    {/* タブレット以上 */}
                    <MediaQuery query={this.tabletQuery} >
                        <Arrow>＞＞</Arrow>
                    </MediaQuery>

                    <LearningSection color={this.nextSectionColor}>
                        <h3>Next Level</h3>
                        {this.learningNext.map((listItem) => {
                            return <LearningItem icon={listItem.icon} name={listItem.name} />
                        })}
                    </LearningSection>
                </DisplayArea>    
            </LearningContent>
        );
    }
}

class LearningItem extends React.Component {
    
    render() {
        return (
            <ItemWrapper>
                <img src={this.props.icon} alt={this.props.name} />
                <p>{this.props.name}</p>
            </ItemWrapper>
        );
    }
}

//以下スタイル
const LearningContent = styled.div`
    width: 100%;
    padding: 24px 8px;
    background-color: #fafafa;

    h2 {
        text-align: center;
    }

    h3 {
        text-align: center;
        font-weight: bold;
    }

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding: 64px 8px;
    }
`;

const DisplayArea = styled.div`

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px auto 0 auto;
        max-width: 800px;
    }
`;

const LearningSection = styled.div`
    background-color: ${props => props.color};
    border-radius: 4px;
    color: #fafafa;
    padding: 32px 16px;
    margin: 16px auto 0 auto;
    width: 100%;

    div {
        margin-top: 32px;
    }

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        margin-top: 0;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 120px;
    width: 100%;
    margin: 0 auto;

    img {
        margin-right: 8px;
        width: 24px;
        height: 24px;

        @media screen and (min-width: ${breakPoint.desktopMin}px) {
            width: 32px;
            height: 32px;
        }
    }
`;

const Arrow = styled.p`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin: 16px auto 0 auto;
    color: skyblue;
    width: 180px;
`;

export default Learning;