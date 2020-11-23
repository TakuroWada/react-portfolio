import React from 'react'
import Icon from '../atoms/Icon'
import LinkArea from '../molecules/LinkArea'
import ScrollIcon from '../atoms/ScrollIcon'
import ProfleImage from '../../assets/images/profleImg.jpg'
import ScrollImage from '../../assets/images/scrollIcon.png'
class FirstView extends React.Component {
    render() {
        
        return (
            <div>
                <h2>Welcom To My Portfolio!</h2>
                <Icon image={ProfleImage}/>
                <p>Takuro Wada</p>

                <LinkArea />
                
                <ScrollIcon link='#' image={ScrollImage} />
            </div>
        );
    }
}

export default FirstView;