import React from 'react'
import styled from 'styled-components'
import { breakPoint } from '../../common/breakPoint';
import SectionTitle from '../atoms/SectionTitle'
import LinkImage from '../atoms/LinkImage'

class Work extends React.Component {

    render() {
        return (
            <WorkContent>
                <SectionTitle title='Work' />
                <WorkWrappr>
                    <LinkImage name='work1' url='#' image='#' />
                    <LinkImage name='work2' url='#' image='#' />
                </WorkWrappr>
            </WorkContent>
        );
    }
}

//以下スタイル
const WorkContent = styled.div`
    width: 100%;
    padding: 24px 8px;

    h2 {
        text-align: center;
    }

    h3 {
        text-align: center;
        font-weight: bold;
    }

    @media screen and (min-width: ${breakPoint.tabletMin}px) {
        padding: 32px 8px;
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