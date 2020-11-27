import React from 'react'
import styled from 'styled-components'
import { breakPoint } from '../../common/breakPoint';
import SectionTitle from '../atoms/SectionTitle'
import LinkImage from '../atoms/LinkImage'
import BackGround from '../../assets/images/section-bg.jpg'
import WorkImg1 from '../../assets/images/work1.png'
import WorkImg2 from '../../assets/images/work2.png'

class Work extends React.Component {

    render() {
        return (
            <WorkContent id='work'>
                <SectionTitle title='Work' />
                <WorkWrappr>
                    <LinkImage name='看板制作撤去の達人HP (コーディング)' url='https://kanbantatsujin.com/' image={ WorkImg1 } />
                    <LinkImage name='かんばんの救急車HP (UI/UX/コーディング)' url='https://kanban-rescue.com/' image={ WorkImg2 } />
                </WorkWrappr>
            </WorkContent>
        );
    }
}

//以下スタイル
const WorkContent = styled.div`
    width: 100%;
    padding: 64px 8px;
    background-image: url(${BackGround});
    background-size: cover;

    h2 {
        text-align: center;
    }

    h3 {
        text-align: center;
        font-weight: bold;
    }

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding: 40px 8px;
    }
`;

const WorkWrappr = styled.div`
    margin: 16px auto 0 auto;
    max-width: 800px;
    width: 100%;

    div {
        padding: 8px;
        margin: 0 auto;
        text-align: center;
    }

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 24px;
    }
`;

export default Work;