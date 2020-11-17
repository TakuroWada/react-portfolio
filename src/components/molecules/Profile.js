import React from 'react'
import SectionTitle from '../atoms/SectionTitle'

class Profile extends React.Component {

    profile = {
        name:'和田 拓朗 / Takuro Wada',
        birtr:'1994/06 京都市出身 東京都在住',
        hobby:'デジタルガジェットを買う・見る・さわる、DIY・インテリア、バイクに乗る、 筋トレ、コーヒー、銭湯、YouTubeを見る等'
    }

    render() {
        return (
            <div>
                <SectionTitle title='Profile' />
                <table>
                    <tr>
                        <th>Name</th>
                        <td>{this.profile.name}</td>
                    </tr>
                    <tr>
                        <th>Birth</th>
                        <td>{this.profile.birtr}</td>
                    </tr>
                    <tr>
                        <th>Hobby</th>
                        <td>{this.profile.hobby}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Profile;