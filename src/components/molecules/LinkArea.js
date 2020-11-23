import React from 'react'
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
            <div>
                {this.linkItem.map((listItem) => {
                    return <LinkButton link={ listItem.link } icon={ listItem.icon } text={ listItem.text }/>
                    })}
            </div>
        );
    }
}

export default LinkArea;