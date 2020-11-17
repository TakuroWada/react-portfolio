import React from 'react'
import SectionTitle from '../atoms/SectionTitle'

class Carear extends React.Component {

    carearList = [
        {
            year: '2013',
            title: '高校卒業',
            text: '地元京都市の公立普通科を卒業。'
        },
        {
            year: '2013 ~ 2016',
            title: '小売店就職',
            text: 'スーパーマーケットに高校新卒で就職。初めは雑用が多かったが、2年目以降は商品発注や売り上げ分析、販売戦略、売場作りなどのマーケティング業務を行った。'
        },
        {
            year: '2016 ~ 2018',
            title: '情報系専門学校に進学',
            text: '手に職をつけたい思い進学。C、Java、FE試験をメインにITの基礎を学習。年に1度のチーム制作でチームリーダーを経験。作品は2年連続で学年代表として選出して頂いた。'
        },
        {
            year: '2018 ~ 2019',
            title: '車載Androidソフト開発',
            text: '当時のメインスキルがC言語であったこともあり組み込み開発の会社に就職。配属部署ではJavaを使用。主に車載ソフトウェアの電源部分を担当。'
        },
        {
            year: '2019 ~ 2020',
            title: 'Web制作/SEO/業務Webシステム開発',
            text: 'UI/UX/Webデザインに興味が湧き転職。社内Webデザイナーとして入社。Webサイトのデザイン、コーディングをメインに直近は社内システムの開発も担当(Rails)。また、自社サイトのSEO対策なども担当しサイト順位を向上させた。'
        }
    ];

    render() {
        return (
            <div>
                <SectionTitle title='Carear' />
                
                    { this.carearList.map( (listItem) => {
                        return <div>
                                    <h3>{listItem.year}</h3>
                                    <h4>{ listItem.title }</h4>
                                    <p>{listItem.text}</p>
                                </div>
                    })}
            </div>
        );
    }
}

export default Carear;