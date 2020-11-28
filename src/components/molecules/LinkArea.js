import React from 'react'
import styled from 'styled-components';
import { breakPoint } from '../../common/breakPoint';
import LinkButton from '../atoms/LinkButton'
import GitHubIcon from '../../assets/images/githubIcon.png'
import QiitaIcon from '../../assets/images/qiitaIcon.png'
import InstaIcon from '../../assets/images/instaIcon.png'

class LinkArea extends React.Component {

    linkItem = [
        {
            link: 'https://github.com/TakuroWada/react-portfolio',
            icon: GitHubIcon ,
            text: 'github'
        },
        {
            link: 'https://qiita.com/TakuroWada',
            icon: QiitaIcon ,
            text: 'qiita'
        },
        {
            link: 'https://www.instagram.com/dawa_taku/',
            icon: InstaIcon ,
            text: 'insta'
        }
    ];
    
    render() {
        
        return (
            <LinkBox>
                {this.linkItem.map((listItem) => {
                    return <LinkButton link={ listItem.link } icon={ listItem.icon } text={ listItem.text }/>
                    })}
            </LinkBox>
        );
    }
}

const LinkBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    a {
        margin: 0 8px;
    }
`;

export default LinkArea;