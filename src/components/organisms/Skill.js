import React from "react";
import styled from "styled-components";
import { breakPoint } from "../../common/breakPoint";
import SectionTitle from "../atoms/SectionTitle";
import Text from "../atoms/Text";
import BackGround from "../../assets/images/section-bg.jpg";
import SelectIcon from "../../assets/images/icon_arrow.png";

//アイコン
import HtmlLogo from "../../assets/images/html-5.svg";
import CssLogo from "../../assets/images/css-3.svg";
import SassLogo from "../../assets/images/sass.svg";
import JsLogo from "../../assets/images/javascript.svg";
import RubyLogo from "../../assets/images/ruby.svg";
import JavaLogo from "../../assets/images/java.svg";
import PhpLogo from "../../assets/images/php.svg";
import ReactLogo from "../../assets/images/react.svg";
import RailsLogo from "../../assets/images/rails.svg";
import WpLogo from "../../assets/images/wordpress-icon.svg";
import SqliteLogo from "../../assets/images/sqlite.png";
import MySqlLogo from "../../assets/images/mysql.svg";
import GitHubLogo from "../../assets/images/github-octocat.svg";
import GitLabLogo from "../../assets/images/gitlab.svg";
import JiraLogo from "../../assets/images/jira.svg";
import GitLogo from "../../assets/images/git-icon.svg";
import AsLogo from "../../assets/images/android-icon.svg";
import VimLogo from "../../assets/images/vim.svg";
import VscodeLogo from "../../assets/images/visual-studio-code.svg";
import AtomLogo from "../../assets/images/atom.svg";
import MdLogo from "../../assets/images/markdown.svg";
import EclipseLogo from "../../assets/images/eclipse.svg";
import PsLogo from "../../assets/images/ps.png";
import AiLogo from "../../assets/images/ai.svg";
import XdLogo from "../../assets/images/xd.png";
import FirebaseLogo from "../../assets/images/firebase-logo.svg";
import VBLogo from "../../assets/images/vb-logo.png";
import VagrantLogo from "../../assets/images/vagrant.svg";
import RserverLogo from "../../assets/images/server.png";
import FELogo from "../../assets/images/fe.png";

const programLanguages = [
  {
    icon: HtmlLogo,
    name: "HTML5",
    text:
      "基本的な文法、仕様の理解。SEO、構造を意識したマークアップができる。ある程度適切なタグの使い分けができる。",
  },
  {
    icon: CssLogo,
    name: "CSS3",
    text:
      "基本的な文法、仕様の理解。コンポーネント設計(OOCSS, SMACSSなど)を意識したコーディング経験。破綻しにくい設計経験(適切なクラス名の付与、BEMなど)。",
  },
  {
    icon: SassLogo,
    name: "Sass",
    text:
      "SCSS記法をBEMと組み合わせて使用した経験。SMACSSのアイデアを参考にファイルを分割。",
  },
  {
    icon: JsLogo,
    name: "JS",
    text:
      "基礎文法、クラスの動的付与、簡単なアニメーションの制御など。JQueryも調べながら組み込める。",
  },
  {
    icon: RubyLogo,
    name: "Ruby",
    text:
      "社内備品の入出庫管理システムを作るために使用。Railsを使用したので、Rubyに関しては基本的な文法程度。",
  },
  {
    icon: JavaLogo,
    name: "Java",
    text:
      "Android車載ソフトの開発で1年間使用。学生時代に文法、簡単なアプリを作成しその後実務で使用。",
  },
  {
    icon: PhpLogo,
    name: "PHP",
    text:
      "Web制作業務で1年使用。主にWordpressのカスタマイズ、オリジナルテーマ作成時に必要な文法を学習し、Wordpressサイトを実装した。",
  },
  {
    icon: ReactLogo,
    name: "React",
    text: "基本文法、Redux、Hooks、Material UIを実務で使用。",
  },
];

const taskControl = [
  {
    icon: GitLogo,
    name: "Git",
    text:
      "基本的なコマンド操作。5人程度のチームでの管理経験。GitHubを個人で、GitLabを会社で使用。(issueを用いたタスク管理、コミットメッセージやブランチ命名、切り分けのルール化など)GUI、CUI両方使用経験有り。",
  },
  {
    icon: GitHubLogo,
    name: "GitHub",
    text:
      "社内の在庫管理システム作成時に使用。基本コマンド、簡易的なGitflowでのバージョン管理、issueでのタスク管理、ブランチの切り分け、プルリクエスト。",
  },
  {
    icon: GitLabLogo,
    name: "GitLab",
    text:
      "実務で１年以上使用。プロジェクトではGUIツールのSourceTreeと合わせて使用。",
  },
  {
    icon: JiraLogo,
    name: "Jira",
    text: "Android車載ソフト開発で1年使用。基本的な操作。",
  },
];

const infrastructure = [
  {
    icon: FirebaseLogo,
    name: "Firebase",
    text: "Firebaseを用いたWebアプリ開発の実務経験。個人制作でも使用。",
  },
  {
    icon: VBLogo,
    name: "VirtualBox",
    text: "社内の在庫管理システム作成時に使用。rails仮想環境の構築。",
  },
  {
    icon: VagrantLogo,
    name: "Vagrant",
    text: "社内の在庫管理システム作成時に使用。rails仮想環境の構築。",
  },
  {
    icon: RserverLogo,
    name: "RentalServer",
    text: "xserver,さくらサーバーでのWebサイト公開。SSL化。",
  },
];

const designTools = [
  {
    icon: XdLogo,
    name: "XD",
    text:
      "Webサイト制作で2年使用。Webサイトのデザインカンプの作成、リピートグリッド、プロトタイプ作成、コンポーネント分け。",
  },
  {
    icon: PsLogo,
    name: "Ps",
    text: "Webサイト制作で使用。簡単な画像加工、書き出しができる程度。",
  },
  {
    icon: AiLogo,
    name: "Ai",
    text:
      "Webサイト制作で使用。簡単なアイコン作成やロゴ作成、書き出しができる程度。",
  },
];

const qualification = [
  {
    icon: FELogo,
    name: "基本情報技術者",
    text: "午後問題の選択言語はC言語。",
  },
];

const editors = [
  {
    icon: VscodeLogo,
    name: "VSCode",
    text:
      "Web制作業務で1年以上、それ以前から個人的に使用。Git操作、プラグインの使用。",
  },
  {
    icon: AsLogo,
    name: "Android Studio",
    text:
      "Android車載ソフト開発で1年使用。Androidのライフサイクルの理解、UI/UXの作成。",
  },
  {
    icon: AtomLogo,
    name: "Atom",
    text: "VScodeのサブとしてたまに使用。",
  },
  {
    icon: VimLogo,
    name: "Vim",
    text: "ターミナルでのファイル操作で使用。基本操作ができる程度。",
  },
  {
    icon: EclipseLogo,
    name: "Eqlipse",
    text: "学生時代のアプリ制作で少し使用した程度。",
  },
  {
    icon: MdLogo,
    name: "MD",
    text: "社内システム開発の資料制作で使用。基本的な文法がわかる程度。",
  },
];
const fwCms = [
  {
    icon: RailsLogo,
    name: "Ruby on Rails",
    text:
      "社内の在庫管理システム開発で使用。Railsの設計思想に則ったアプリ作成、データベースの操作。",
  },
  {
    icon: WpLogo,
    name: "Word Press",
    text:
      "オリジナルテーマの作成、プラグインの組み込み、サーバーへのインストール、カスタム投稿タイプの組み込みなど。多少バックエンドの修正も可能(DBからのデータ取得など)Webサイト作成に使用。レンタルサーバー上へ構築、既存テーマのカスタマイズ、オリジナルテーマの作成。",
  },
];

const databases = [
  {
    icon: MySqlLogo,
    name: "MySql",
    text:
      "学生時代にRDBの基礎を学習し、その後実務で使用。正規化、テーブル設計、基本的なSQL文。",
  },
  {
    icon: SqliteLogo,
    name: "Sqlite",
    text: "学生時代に開発に使用した程度。",
  },
];

const skillList = {
  ProgramLanguages: programLanguages,
  TaskControl: taskControl,
  Infrastructure: infrastructure,
  DesignTool: designTools,
  "Editor/IDE": editors,
  "FW/CMS": fwCms,
  DataBase: databases,
  Qualification: qualification,
};

const option = [
  "ProgramLanguages",
  "TaskControl",
  "Infrastructure",
  "DesignTool",
  "Editor/IDE",
  "FW/CMS",
  "DataBase",
  "Qualification",
];

class Skill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skillTitle: "ProgramLanguage",
      skillType: programLanguages,
      skillName: programLanguages[0].name,
      skillText: programLanguages[0].text,
    };

    this.doClickCard = this.doClickCard.bind(this);
    this.doChange = this.doChange.bind(this);
  }

  doClickCard(value) {
    this.setState({ skillName: value.name });
    this.setState({ skillText: value.text });
  }

  doChange(e) {
    this.setState({ skillType: skillList[e.target.value] });
    this.setState({ skillTitle: e.target.value });
    this.setState({ skillName: "見たいスキルを選択してください" });
    this.setState({ skillText: "" });
  }

  render() {
    return (
      <SkillContent id="skill">
        <SectionTitle title="Skill" />

        <SelectBox onChange={this.doChange}>
          {option.map((item, index) => {
            return (
              <option key={index} svalue={item}>
                {item}
              </option>
            );
          })}
        </SelectBox>
        <h3>{this.state.skillTitle}</h3>
        <DisplayArea>
          <CardWrapper>
            {this.state.skillType.map((listItem, index) => {
              return (
                <SkillCard
                  key={index}
                  info={{
                    icon: listItem.icon,
                    name: listItem.name,
                    text: listItem.text,
                  }}
                  select={this.state.skillName}
                  callMethod={(value) => this.doClickCard(value)}
                />
              );
            })}
          </CardWrapper>
          <TextArea>
            <h4>{this.state.skillName}</h4>
            <Text text={this.state.skillText} />
          </TextArea>
        </DisplayArea>
      </SkillContent>
    );
  }
}

class SkillCard extends React.Component {
  render() {
    return (
      <SkillButton
        name={this.props.info.name}
        select={this.props.select}
        onClick={() => {
          this.props.callMethod(this.props.info);
        }}
      >
        <img src={this.props.info.icon} alt={this.props.info.name} />
        <p>{this.props.info.name}</p>
      </SkillButton>
    );
  }
}

//以下スタイル
const SkillContent = styled.div`
  width: 100%;
  padding: 24px 8px;
  background-image: url(${BackGround});

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
    margin-top: 24px;
  }

  @media screen and (min-width: ${breakPoint.tabletMin}px) {
    padding: 64px 8px;
  }
`;

const SelectBox = styled.select`
  display: block;
  background-color: #131a29;
  color: #fafafa;
  border-radius: 4px;
  padding: 16px 32px;
  margin: 24px auto 0 auto;

  background-image: url(${SelectIcon});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: right 10px center;
`;

const DisplayArea = styled.div`
  @media screen and (min-width: ${breakPoint.tabletMin}px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #111111aa;
    padding: 32px 8px;
    max-width: 960px;
    margin: 16px auto 0 auto;
    border-radius: 8px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 8px auto 0 auto;

  button {
    margin: 14px;
    font-size: 14px;
    @media screen and (min-width: ${breakPoint.tabletMin}px) {
      margin: 8px;
    }
  }

  @media screen and (min-width: ${breakPoint.tabletMin}px) {
    margin: 0;
  }

  @media screen and (min-width: ${breakPoint.desktopMin}px) {
    max-width: 380px;
  }
`;

const SkillButton = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 42%;
  height: 48px;
  padding: 4px;
  border-radius: 4px;
  border: 2px solid
    ${(props) => (props.name === props.select ? "#131A29" : "#fafafa")};
  background-color: ${(props) =>
    props.name === props.select ? "#131A29" : "#fafafa"};
  color: ${(props) => (props.name === props.select ? "#fafafa" : "#131A29")};
  text-align: center;

  img {
    margin-right: 8px;
    width: 24px;
    height: 24px;

    @media screen and (min-width: ${breakPoint.desktopMin}px) {
      width: 32px;
      height: 32px;
    }
  }

  &:hover {
    border: 2px solid skyblue;
  }

  @media screen and (min-width: ${breakPoint.desktopMin}px) {
    width: 160px;
    height: 56px;
    padding: 8px;
  }
`;

const TextArea = styled.div`
  width: 100%;
  margin: 16px auto 0 auto;
  padding: 16px;
  background-color: #131a29;
  color: #fafafa;
  border-radius: 4px;
  text-align: center;

  h4 {
    color: skyblue;
  }

  p {
    display: inline-block;
    margin: 8px auto 0 auto;
    text-align: left;
  }

  @media screen and (min-width: ${breakPoint.tabletMin}px) {
    margin: 8px 0 0 0;
    height: 264px;
  }

  @media screen and (min-width: ${breakPoint.desktopMin}px) {
    max-width: 400px;
    height: 272px;
  }
`;

export default Skill;
