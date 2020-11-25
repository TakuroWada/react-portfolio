import React from 'react'
import SectionTitle from '../atoms/SectionTitle';
import Text from '../atoms/Text';

const programLanguages = [
    {
        icon: '',
        name: 'HTML',
        text: 'Web制作業務で1年、それ以前から個人的に使用。基本タグの使い分け、属性の使い分け、SEOを意識したコーディング、オプション選択、ユーザビリティを意識した属性選択'
    },
    {
        icon: '',
        name: 'CSS',
        text: 'Web制作業務で1年、それ以前から個人的に使用。基本的なプロパティの使用、レスポンシブ対応(スマホ、タブレット)、モバイルファースト、修正を意識したCSS設計(BEM)'
    },
    {
        icon: '',
        name: 'Sass',
        text: 'Web制作業務で1年使用。基本公文の理解(Scss記法)、BEM記法との併用、修正、再利用を意識したファイル分け、WordPressでの使用'
    },
    {
        icon: '',
        name: 'JavaScript',
        text: 'Web制作業務で部分的に使用した。現在進行形で学習中。本ポートフォリオでReactとともに使用。'
    },
    {
        icon: '',
        name: 'Ruby',
        text: '社内の備品入出庫の管理システムを作るために使用。Railsを使用したので、Rubyに関しては基本的な文法程度。'
    },
    {
        icon: '',
        name: 'Java',
        text: 'Android車載ソフトの開発で1年間使用。学生時代に文法、簡単なアプリを作成しその後実務で使用。'
    },
    {
        icon: '',
        name: 'PHP',
        text: 'Web制作業務で使用。主にWordpressのカスタマイズ、オリジナルテーマ作成時に必要な文法を学習し、Wordpressサイトを実装した。'
    },
    {
        icon: '',
        name: 'C',
        text: '最初に学んだプログラミング言語。基本情報技術者試験午後問題のC言語の選択問題が解ける程度。実務では組み込み研修でのみ使用。'
    },                                                
    
];

const taskControl = [
    {
        icon: '',
        name: 'Git',
        text: '基本的なgitコマンド、リモートリポジトリとのSSH接続'
    },
    {
        icon: '',
        name: 'GitHub',
        text: '社内の在庫管理システム作成時に使用。基本コマンド、簡易的なGitflowでのバージョン管理、issueでのタスク管理、ブランチの切り分け、プルリクエスト'
    },
    {
        icon: '',
        name: 'GitLab',
        text: 'Android車載ソフトの開発で1年使用。プロジェクトではGUIツールのsourceTreeと合わせて使用。'
    },
    {
        icon: '',
        name: 'Jira',
        text: 'Android車載ソフト開発で1年使用。基本的な操作。'
    }                                            
];

const designTools = [
    {
        icon: '',
        name: 'XD',
        text: 'Webサイト制作で1年使用。Webサイトのデザインカンプの作成、リピートグリッド、プロトタイプ作成、コンポーネント分けなど'
    },
    {
        icon: '',
        name: 'PhotoShop',
        text: 'Webサイト制作で使用。簡単な画像加工ができる程度。'
    },
    {
        icon: '',
        name: 'Ilstrater',
        text: 'Webサイト制作で使用。簡単なアイコン作成やロゴ作成ができる程度。'
    }                             
];

const editors = [
    {
        icon: '',
        name: 'VSCode',
        text: 'Web制作業務で1年。それ以前から個人的に使用。Gitとの連携、プラグインの使用、ショートカットなど'
    },
    {
        icon: '',
        name: 'AndroidStudio',
        text: 'Android車載ソフト開発で1年使用。Androidのライフサイクルの理解、UI/UXの作成。'
    },
    {
        icon: '',
        name: 'Atom',
        text: 'VScodeのサブとしてたまに使用。'
    },
    {
        icon: '',
        name: 'Vim',
        text: 'ターミナルでのファイル操作で使用。基本操作ができる程度'
    },
    {
        icon: '',
        name: 'Eqlipce',
        text: '学生時代のアプリ制作で少し使用した程度'
    },
    {
        icon: '',
        name: 'Markdown',
        text: '社内システム開発の資料制作で使用。基本的な文法がわかる程度'
    }            
];
const fwCms = [
    {
        icon: '',
        name: 'Ruby on Rails',
        text: '社内の在庫管理システム開発で使用。Railsの設計思想に則ったアプリ作成、データベースの操作。'
    },
    {
        icon: '',
        name: 'Wordpress',
        text: 'Webサイト作成に使用。レンタルサーバー上へ構築、既存テーマのカスタマイズ、オリジナルテーマの作成、'
    }
];

const databases = [
    {
        icon: '',
        name: 'MySql',
        text: '学生時代にRDBの基礎を学習し、その後実務で使用。正規化、テーブル設計、基本的なSQL文。'
    },
    {
        icon: '',
        name: 'Sqlite',
        text: '学生時代に開発に使用した程度'
    }
];

const skillList = {
    'ProgramLanguages': programLanguages,
    'TaskControl':taskControl,
    'DesignTool':designTools,
    'Editor/IDE':editors,
    'FW/CMS':fwCms,
    'DataBase':databases
}

const option = [
    'ProgramLanguages',
    'TaskControl',
    'DesignTool',
    'Editor/IDE',
    'FW/CMS',
    'DataBase'
];

class Skill extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            skillTitle: 'ProgramLanguage',
            skillType: programLanguages,
            skillName: programLanguages[0].name,
            skillText: programLanguages[0].text
        };

        this.doClickCard= this.doClickCard.bind(this);
        this.doChange = this.doChange.bind(this);
    }

    doClickCard(value) {
        this.setState({ skillName: value.name });
        this.setState({ skillText: value.text });
    }

    doChange(e) {
        this.setState({ skillType: skillList[e.target.value] });
        this.setState({ skillTitle: e.target.value });
    }
    
    render() {
        
        return (
            <div>
                <SectionTitle title='Skill' />

                <select onChange={ this.doChange }>
                    { option.map( (item) => {
                        return <option value={item} >{item}</option>
                    })}
                </select>

                <h3>{this.state.skillTitle}</h3>
                
                <div>
                    {this.state.skillType.map((listItem) => {
                        return <SkillCard
                            info={
                                {
                                    icon: listItem.icon ,
                                    name: listItem.name ,
                                    text: listItem.text
                                }
                            }
                            callMethod={(value) => this.doClickCard(value)}/>
                    })}
                    <Text text={this.state.skillText} />
                </div>
            </div>
        );
    }
}

class SkillCard extends React.Component {
    render() {
        return (
            <button onClick={() => { this.props.callMethod(this.props.info) }}>
                <img src={this.props.info.icon} alt={this.props.info.name} />
                <p>{this.props.info.name}</p>
            </button>
        );
    }
}

export default Skill;