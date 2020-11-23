import React from 'react'
import SectionTitle from '../atoms/SectionTitle'

class Profile extends React.Component {

    profileItem = [
        {
            title: 'Name',
            text: '和田 拓朗 / Takuro Wada',
        },
        {
            title: 'Birth',
            text: '1994/06 京都市出身 東京都在住',
        },
        {
            title: 'Hobby',
            text: 'デジタルガジェットを買う・見る・さわる、DIY・インテリア、バイクに乗る、 筋トレ、コーヒー、銭湯、YouTubeを見る等',
        }
    ];

    render() {
        return (
            <div>
                <SectionTitle title='Profile' />
                {this.profileItem.map((listItem) => {
                    return <ProfileItem title={listItem.title} text={listItem.text}/>
                })}
            </div>
        );
    }
}

class ProfileItem extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Profile;