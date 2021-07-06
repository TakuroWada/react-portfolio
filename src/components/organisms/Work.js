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
import WorkImg10 from "../../assets/images/work10.png";
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
      "自社事業サイトのリニューアル案件。既存サイトはWordPressを使用。\n社員がWordPress管理画面の操作に慣れていることを考慮して、WordPressを継続してのリニューアルを行いました。既存サイトはかなり昔に作られていたようで、情報整理が追いついていなかったということもあり、メンテナンス性向上とパフォーマンス向上を心がけてサイト構成から再度設計を行いました。\n\nまた事例、料金、ブログの更新などを簡単にできるようにしてほしいとの要望から、既存テーマを使用せずにオリジナルテーマを作成しました。\n\nデザイン面に関して。\nメインキャラクターは社内でアイデアを出し合った中から投票で自分の作品を選んでいただきました。ツバメを採用した理由は早いイメージと巣を作る、修復するという部分が看板の制作、修理と似ていると考えたからです。ラフ画をイラストレーターに読み込んでアイコンを作成しました。\n\nサイトの全体的なイメージは事業名に含まれる「救急車」を連想させる赤と白をベースにしました。原色の赤だときつい印象になってしまうと思い、少しピンク寄りに調整しました。白と赤だとのみだと少しメリハリがないと感じたのでキャラクターのツバメの体色でもある青系を採用しトーンを合わせました。",
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
      "かんばんの救急車サイトのリスティング広告用のLPページ作成。\n問い合わせ増加が目標でしたので、問い合わせ前に必要な情報をユーザー目線で考えて順に配置しました。社内の要望を考慮しボタンにアニメーションを加えるなどの工夫を行いました。\n\nその結果、電話での問い合わせ数が向上しました。\n\nしかし改めて見直すと文字サイズや太さのバランス、画像の比率崩れ、ぼやけなどが課題と感じ、今後の反省材料となりました。",
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
      "自社事業サイトのリニューアル案件。既存サイトはWordPressを使用。社員がWordPress管理画面の操作に慣れていることを考慮して、WordPressを継続してのリニューアルを行いました。\n\nこちらのサイトはリニューアルトップ画面のデザインをグラフィックデザイナーの方が作成済みでしたのでトップページはそのデザインを再現し、他ページもカラーやフォントを合わせてデザインを行いました。\n\nデザインがないページのUI、レスポンシブデザイン(スマホサイズに限らず、横幅が変化した時の見せ方)などを新規に考えてコーディングしました。",
  },
  {
    img: WorkImg10,
    url: "https://pr-g.jp/web/210616report",
    title: "クラウドコンシェルジュ「TSUNAGU」\nUIデザイン改善、開発",
    period: "デザイン２週間程度",
    scale: "開発５名",
    position: "ディレクション、要件定義、デザイン、コーディング、運用担当",
    technology: "React, GCP, Xd",
    detail:
      "半自社開発のWebアプリケーション(CRM)。前任者からの引き継ぎで主にディレクションとデザイン改善を担当。\n\nクライアントの要望で優先度が高かったのが「使いやすさ向上」でしたので自分はUIデザインの改善に注力しました。\n\nシステムの複雑な作りやmaterialUIベースで作成していることから、今後のメンテナンス性を考慮すると自由が効かないことが多かったですが、その制約の中でクライアントの要望を実現できるように考えながらUIデザインを行いました。\n\n大幅なUI改修の結果、クライアントからは「見栄えが良くなった」「わかりやすくなった」と好評をいただくことができました。",
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
      "SNSマーケティング事業部の同僚がインスタグラム運用を始めたので、デザイン面で少し協業しました。\n最初はアイコンが文字だけだったのでアイコンにした方が親しみが沸きやすいと思い作成しました。\n\n廃品回収なのでコーポレートカラーを取り入れた中型トラックのアイコンにしました。\n荷台部分に会社ロゴというシンプルな形に。事業のターゲット的に一人暮らしが多いため、\nポップな感じにして若い人に親しみを持ってもらえるようにしました。\n\nまた、投稿に関しても初めは文字だけでしたので背景画像やイラストを使用するようにアドバイス。その結果、毎日投稿の努力も重なり１ヶ月でフォロワー2000人越えを達成しました。",
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
      "LPのコーディング案件。デザインを元にコーディングを行いました。 \n短納期案件のためタブレットサイズは考慮しなくて良いとのことから、PC画面の横幅固定で対応しました。スマートフォンサイズには対応させています。",
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
      "プロダクトトップページの修正とインフォウォールページ、ステルスヘルスメーターページの追加コーデイング。デザインを元に再現コーディングを行いました。\n\n二つのページは共通部分があり、今後同じ構成のページが増えることが予想されるため、再利用を意識してコーディングを行いました。",
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
      "既存ページのデザインカンプとの相違部分の修正依頼。\n既存コードを確認したところ、メンテナンス性の観点で課題があると判断したのでコーディングのやり直しを提案しました。OKがもらえたのでデザインを忠実に再現しつつメンテナンス性の向上を意識してコーディングを行いました。",
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
      "Reactの理解を深める&前回就活時のポートフォリオとして作成しました。\n\n機能が少ない故にシンプルで迷わないUIデザインを心がけました。(ホーム画面に全ての画面への導線を設ける、ステータスの表示など）PC、タブレット、スマホ全ての画面サイズに対応させました。\n\nガジェット関連ということで、メインターゲットは男性を想定し、ドット絵やドット文字を一部採用して男心を擽るデザインを意識しました。\n\n管理アプリなのでWebサイトのような華やかな装飾やアニメーションはさけ、カラーもメインカラー+モノクロ系でまとめシンプルにしました。(おすすめ動画のサムネイルやガジェットの写真などでごちゃつくことも考慮して)\n\nまた、ガジェット好きの人は新しいものが好きな傾向があるため、最新のガジェット動画を確認できるようにYouTubeのAPIを使用して最新動画を表示する機能を作成しました。",
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
      "Reactの理解を深める&前回就活時のポートフォリオとして作成しました。\n\n自分の自己紹介サイトなので「自分を見せる」ことと、美術館が好きで訪れた際に撮った写真があったので、美術館をイメージしたデザインにしました。情報量的に１ページ完結の方が的確に情報を伝えられると思ったのでそこもReact(SPA)と相性が良かったと感じています。",
  },
];

class Work extends React.Component {
  render() {
    return (
      <WorkContent id="work">
        <SectionTitle title="Work" />
        <WorkText>クリックで詳細が開きます。</WorkText>
        <WorkWrappr>
          {workItem.map((listItem, index) => {
            return (
              <TransitionsModal
                key={index}
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
  padding: 64px 0;
  background-image: url(${BackGround});
  background-size: cover;

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
    font-weight: bold;
  }

  @media screen and (min-width: ${breakPoint.PcMin}px) {
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
