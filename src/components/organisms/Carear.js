import React from "react";
import styled from "styled-components";
import { breakPoint } from "../../common/breakPoint";
import MediaQuery from "react-responsive";
import SectionTitle from "../atoms/SectionTitle";
import CarearImg from "../../assets/images/carearImg.png";
import CarearImgMobile from "../../assets/images/carearImg-mobile.png";

class Carear extends React.Component {
  carearList = [
    {
      year: "2013",
      title: "高校卒業",
      text: "地元京都市の公立普通科を卒業。",
      color: "#072143",
    },
    {
      year: "2013 ~ 2016",
      title: "小売店就職",
      text:
        "高校新卒で就職。2年目以降は商品発注や売り上げ分析、販売戦略、売場作りなどのマーケティング業務に従事",
      color: "#056481",
    },
    {
      year: "2016 ~ 2018",
      title: "情報系専門学校に進学",
      text:
        "手に職をつけたいと考え進学。C、Java、FE試験を中心にIT基礎を学習。チーム制作でリーダー経験。作品は2年連続学年代表に選出して頂いた",
      color: "#0C5E9A",
    },
    {
      year: "2018 ~ 2019",
      title: "車載Androidソフト開発",
      text:
        "C、Javaがメインの組み込み開発の会社に就職。配属部署ではJavaを使用。主に車載ソフトウェアの電源部分を担当",
      color: "#067E4B",
    },
    {
      year: "2019 ~ 現在",
      title: "Webデザイン/開発",
      text:
        "UI/UX/Webデザインに興味が湧き転職。Webデザイン/サイト設計/フロントエンドコーディング/マネジメントをメインで担当",
      color: "#F48D02",
    },
  ];

  pcQuery = "(min-width:" + breakPoint.desktopMin + "px)";
  spQuery = "(max-width:" + breakPoint.desktopMin + "px)";

  render() {
    return (
      <CarearContent id="carear">
        <SectionTitle title="Carear" />

        {/* モバイル表示 */}
        <MediaQuery query={this.spQuery}>
          <CarearWrpper>
            <img src={CarearImgMobile} alt="Carearline" />
            <div>
              {this.carearList.map((listItem) => {
                return <CarearCard value={listItem} />;
              })}
            </div>
          </CarearWrpper>
        </MediaQuery>

        {/* PC表示 */}
        <MediaQuery query={this.pcQuery}>
          <CarearWrpper>
            <CardWrapper>
              <CarearCard value={this.carearList[0]} />
              <CarearCard value={this.carearList[2]} />
              <CarearCard value={this.carearList[4]} />
            </CardWrapper>

            <img src={CarearImg} alt="Carearline" />

            <CardWrapper>
              <CarearCard value={this.carearList[1]} />
              <CarearCard value={this.carearList[3]} />
            </CardWrapper>
          </CarearWrpper>
        </MediaQuery>
      </CarearContent>
    );
  }
}

class CarearCard extends React.Component {
  render() {
    return (
      <Card top="24px" color={this.props.value.color}>
        <CardTitle>{this.props.value.title}</CardTitle>
        <CardYear>{this.props.value.year}</CardYear>
        <CardText>{this.props.value.text}</CardText>
      </Card>
    );
  }
}

// 以下スタイル
const CarearContent = styled.div`
  width: 100%;
  padding: 24px 8px;

  h2 {
    text-align: center;
  }

  @media screen and (min-width: ${breakPoint.desktopMin}px) {
    margin: 0 auto;
    padding: 64px 8px;
    background-color: #fafafa;
  }
`;

const CarearWrpper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  img {
    margin-top: 24px;
  }

  @media screen and (min-width: ${breakPoint.tabletMin}px) {
    img {
      margin-right: 24px;
    }
  }

  @media screen and (min-width: ${breakPoint.desktopMin}px) {
    display: inherit;
    margin: 48px auto 0 auto;

    img {
      display: block;
      margin: 0 auto;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 48px auto 0 auto;

  @media screen and (min-width: ${breakPoint.desktopMin}px) {
    max-width: 860px;
    margin: 0 auto;
  }
`;

const Card = styled.div.attrs((props) => ({
  margin: props.top || "1px", //topとして受け取りmapping
}))`
  width: 240px;
  height: 240px;
  padding: 16px;
  border-radius: 8px;
  color: #fafafa;
  background-color: ${(props) => props.color};
  margin-top: ${(props) => props.top};

  @media screen and (min-width: ${breakPoint.desktopMin}px) {
    margin-top: 0;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  text-align: center;
`;

const CardYear = styled.p`
  font-size: 18px;
  padding-top: 16px;
  text-align: center;
`;

const CardText = styled.p`
  padding-top: 16px;
`;

export default Carear;
