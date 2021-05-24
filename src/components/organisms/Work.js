import React from "react";
import styled from "styled-components";
import { breakPoint } from "../../common/breakPoint";
import SectionTitle from "../atoms/SectionTitle";
import BackGround from "../../assets/images/section-bg.jpg";
import WorkImg1 from "../../assets/images/work1.png";
import WorkImg2 from "../../assets/images/work2.png";
import WorkImg3 from "../../assets/images/work3.png";
import WorkImg4 from "../../assets/images/work4.png";
import WorkImg5 from "../../assets/images/work5.png";
import WorkImg6 from "../../assets/images/work6.png";
import WorkImg7 from "../../assets/images/work7.png";
import WorkImg8 from "../../assets/images/work8.png";
import WorkImg9 from "../../assets/images/work9.png";
import TransitionsModal from "../molecules/TransitionsModal";

const workItem = [
  {
    img: WorkImg1,
    url: "https://kanban-rescue.com/",
    title:
      "かんばんの救急車サイトリニューアル/\nアイコン・キャラクターデザイン",
    period: "1ヶ月程度",
    scale: "1名",
    position: "要件定義、デザイン、コーディング、運用担当",
    technology: "HTML5, CSS3, JavaScript, WordPress(PHP), XD",
    detail:
      "自社事業サイトのリニューアル案件。もともとWordPressで出来ていたので、現場の希望もあり引き続き採用。かなり前に作られたサイトでファイル構成や画像などが整理されていなかったため、構成から考え直した。\n\nまた事例、料金、ブログの更新などを簡単にできるようにしてほしいと言われたので、オリジナルテーマを作成することにした。(既存テーマの改修よりデザインもやりやすいと考えた)。\n\nデザイン面に関して。\nメインキャラクターは社内でアイデアを出し合った中で自分の描いたものが投票で選ばれた。ツバメを採用した理由は早いイメージと巣を作る、修復するという部分が看板の制作、修理と似ていると感じため。ラフ画をイラストレーターに読み込んでアイコンを作成した。\n\nサイトの全体的なイメージは事業名に含まれる「救急車」を連想させる赤と白がベース。\n普通の赤だときつい印象になるため、少しピンク寄りに。白と赤だと少し物足りないので、キャラクターのツバメの体色でもある青系を採用しトーンを赤と合わせた。",
  },
  {
    img: WorkImg2,
    url: "https://kanban-rescue.com/lp/",
    title: "かんばんの救急車LPデザイン\nアイコン・キャラクターデザイン",
    period: "2日程度",
    scale: "1名",
    position: "デザイン、コーディング、運用担当",
    technology: "HTML5, CSS3, JavaScript, WordPress(PHP), XD",
    detail:
      "かんばんの救急車サイトでもともとリスティング広告を出していたが専用のLPページがなかったため作成。問い合わせまでに必要な情報をユーザー目線で考えて順に配置。問い合わせボタンを目立たせるアニメーションをつけるなどした。\n\n今見返すとヘッダーやファーストビューの文字が大きすぎて収まりが悪い、太字多用、画像の比率崩れ、ぼやけなど反省点がたくさんある。(退職しているので修正はできない)",
  },
  {
    img: WorkImg3,
    url: "https://kanbantatsujin.com/",
    title: "看板製作撤去の達人サイト\nUI/UXデザイン",
    period: "1ヶ月程度",
    scale: "1-2名",
    position: "要件定義、UIデザイン、コーディング、運用担当",
    technology: "HTML5, CSS3, JavaScript, WordPress(PHP), XD",
    detail:
      "自社事業サイトのリニューアル案件。もともとWordPressで出来ていたので、現場の希望もあり引き続き採用。\n\nこちらのサイトに関してはトップ画面のデザインをグラフィックデザイナーの方が作成していたため、そのデザインを元に他ページもカラーやフォントを合わせた。\n\nデザインがないページのUI、レスポンシブデザイン(スマホサイズに限らず、横幅が変化した時の見せ方)などを新規に考えてコーディングした。\n\nかんばんの救急車と同様のサービス内容のため、サイト構成的にかぶっている部分はあるが、デザインに変化をつけて差別化した。",
  },
  {
    img: WorkImg4,
    url: "https://www.instagram.com/haihinkaisyu_tokyo/",
    title: "廃品回収.comアイコンデザイン",
    period: "30分程度",
    scale: "1名",
    position: "アイコンデザイン",
    technology: "Illustrator",
    detail:
      "SNSマーケティング事業部の同僚が管理するインスタを見て、アイコンがただの文字だったためロゴにしたほうが見栄えがいいと思い作成。本業の片手間で作成した。\n\n廃品回収ということでコーポレートカラーの中型トラックにし、荷台部分に会社ロゴをつけたシンプルなアイコン。事業のターゲットに一人暮らしが多いため、ポップな感じにして若い一人暮らし受けを狙った。",
  },
  {
    img: WorkImg5,
    url: "https://www.sagawa-exp.co.jp/feature/tms/",
    title: "佐川急便TMS (LPコーディング)",
    period: "1ヶ月程度",
    scale: "1名",
    position: "コーディング担当",
    technology: "HTML5, CSS3, JavaScript",
    detail:
      "LPのコーディング案件。デザインはあったので、そのコーディング作業。\n\n納期が短いためタブレットサイズは考慮しておらず、PC画面の横幅固定で対応。スマートフォンサイズは対応。",
  },
  {
    img: WorkImg6,
    url: "https://forest.toppan.co.jp/products/",
    title: "凸版印刷環境デザイン  \n(プロダクトページ以下)",
    period: "2日",
    scale: "1名",
    position: "コーディング担当",
    technology: "HTML5, CSS3, JavaScript",
    detail:
      "プロダクトトップページの修正とインフォウォールページ、ステルスヘルスメーターページの追加。デザインはあったのでその再現コーディング。\n\n二つのページは共通部分があり、今後同じ構成のページが増えることが予想されるためその点を意識してコーディングした。",
  },
  {
    img: WorkImg7,
    url: "https://www.siroca.co.jp/corporate/partner/",
    title: "Sirocaサイト \n(法人ページコーディング)",
    period: "2日",
    scale: "7名程度",
    position: "コーディング担当",
    technology: "HTML5, CSS3, JavaScript, JQuery, WordPress",
    detail:
      "入社直後にヘルプで法人ページのコーディング修正を担当。納期が2日後でありながら表示バグが多すぎる炎上案件。\n\n当ページは業務委託の副業社員が作成していたものだが、デザイン通りにできておらず、そちらの修正を担当。\n\nコーディングがひどい内容で解読が難解であったため、ほぼ作り直しを余儀なくされた。作り直すという早めの判断が功を奏しなんとか納期に間に合った。",
  },
  {
    img: WorkImg8,
    url: "https://gadget-master.web.app/",
    title: "ガジェット管理Webアプリ \n「gadget master」",
    period: "3週間程度",
    scale: "1名",
    position: "個人制作",
    technology: "React, Redux-Toolkit, TypeScript,node-sass,Firebase",
    detail:
      "Reactの理解を深める&前回就活時のポートフォリオとして作成。\n\n機能は少ないが故にシンプルで迷わないUIデザインを心がけた。(ホーム画面に全ての画面への導線を設ける、ステータスの表示）PC、タブレット、スマホ全ての画面に対応。\n\nガジェット関連ということで、メインターゲットは男性。ドット絵やドット文字を一部採用して男心を擽るデザインを意識。\n\n管理アプリなのでWebサイトのような華やかな装飾やアニメーションはさけ、カラーもメインカラー+モノクロ系でまとめシンプルにした。(おすすめ動画のサムネイルやガジェットの写真などでごちゃつくことも考え、極力シンプルに)",
  },
  {
    img: WorkImg9,
    url: "本サイト",
    title: "Reactを使った自己紹介サイト",
    period: "３週間程度",
    scale: "1名",
    position: "個人制作",
    technology: "React, JavaScript, styled-components,AWS Amplify",
    detail:
      "Reactの理解を深める&前回就活時のポートフォリオとして作成。\n\n自分の自己紹介サイトなので「自分を見せる」ことと、美術館が好きで訪れた際に撮った写真があったので、美術館をイメージしたデザインにした。\n\nReactで作成したのでSPAにしシンプルに仕上げた。レスポンシブにも対応。",
  },
];

class Work extends React.Component {
  render() {
    return (
      <WorkContent id="work">
        <SectionTitle title="Work" />
        <WorkText>クリックで詳細が開きます。</WorkText>
        <WorkWrappr>
          {workItem.map((listItem) => {
            return (
              <TransitionsModal
                info={{
                  img: listItem.img,
                  url: listItem.url,
                  title: listItem.title,
                  period: listItem.period,
                  scale: listItem.scale,
                  position: listItem.position,
                  technology: listItem.technology,
                  detail: listItem.detail,
                }}
              />
            );
          })}
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
    padding: 64px 8px;
  }
`;

const WorkText = styled.p`
  text-align: center;
  padding: 16px;
`;

const WorkWrappr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 16px auto 0 auto;
  max-width: 960px;
  width: 100%;

  @media screen and (min-width: ${breakPoint.tabletMin}px) {
    max-width: 100%;
  }
`;

export default Work;
