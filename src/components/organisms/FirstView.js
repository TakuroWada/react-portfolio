import React from 'react'
import Icon from '../atoms/Icon'
import LinkButton from '../atoms/LinkButton'
import ScrollIcon from '../atoms/ScrollIcon'
import Screen from '../atoms/Screen'
import ProfleImage from '../../assets/images/profleImg.jpg'
import ScrollImage from '../../assets/images/scrollIcon.png'

class FirstView extends React.Component {
    render() {
        const profleImg = ProfleImage;
        const scrollImg = ScrollImage;
        
        return (
            <div>
                <h2>Welcom To My Portfolio!</h2>
                <Icon image={profleImg}/>
                <p>Takuro Wada</p>
                <LinkButton link='#' text='github'/>
                <Screen />
                <ScrollIcon link='#' image={scrollImg} />
            </div>
        );
    }
}

export default FirstView;