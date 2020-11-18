import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import IconCard from '../atoms/IconCard'
import SelectButton from '../atoms/SelectButton'
import Text from '../atoms/Text'

class Skill extends React.Component {

    programLanguages = [
        {
            icon: '',
            name: 'HTML',
            text: 'Web制作業務で1年。それ以前から個人的に使用。基本的なタグの使い分け、基本的な属性の使い分け、SEOを意識したコーディング、CSS設計を意識した記述順序、タグ選択、オプション選択、ユーザビリティを意識した属性選択など'
        },
        {
            icon: '',
            name: 'CSS',
            text: 'Web制作業務で1年。それ以前から個人的に使用。基本的なプロパティの使用、レスポンシブ対応(スマホ、タブレット)、モバイルファースト、デスクトップファースト修正を意識したCSS設計'
        },
        {
            icon: '',
            name: 'Sass',
            text: 'Web制作業務で1年使用。基本公文の理解(Scss記法)、BEM記法との併用、修正、再利用を意識したファイル分け、WordPressでの使用'
        },
        {
            icon: '',
            name: 'JavaScript',
            text: 'Web制作業務で使用したが、部分的に使用した程度。現在、基礎から学び直し中。本ポートフォリオ でReactとともに使用。'
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
            text: '最初に学んだプログラミング言語。基本情報技術者試験午後問題のC言語の選択問題が解ける程度。実務では使用経験なし。'
        },                                                
        
    ];
    
    taskControl = [
        {
            icon: '',
            name: 'Git',
            text: '基本的なgitコマンド、リモートリポジトリ とのSSH連携'
        },
        {
            icon: '',
            name: 'GitHub',
            text: '社内の在庫管理システム作成時に使用。開発は1人で行ったがチーム開発を意識して、簡易的なGitflowでのバージョン管理、issueでのタスク管理、セルフプルリクエストなどを行った。'
        },
        {
            icon: '',
            name: 'GitLab',
            text: 'Android車載ソフトの開発で1年使用。GUIツールのsourceTreeと合わせて使用。'
        },
        {
            icon: '',
            name: 'Jira',
            text: 'Android車載ソフト開発で1年使用。基本的な操作。'
        }                                            
    ];

    designTools = [
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

    editors = [
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

    fwCms = [
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

    databases = [
        {
            icon: '',
            name: 'MySql',
            text: '学生時代にRDBの基礎を学習し、その後実務で使用。正規化、テーブル設計、基本的なSQL文。'
        },
        {
            icon: '',
            name: 'Sqlite',
            text: 'Webサイト制作で使用。簡単な画像加工ができる程度。'
        }
    ];

        skillList = [
        {
            icon: '',
            name: 'ProgramLanguage',
            item: this.programLanguages
        },
        {
            icon: '',
            name: 'TaskControl',
            item: this.taskControl
        },
        {
            icon: '',
            name: 'DesignTool',
            item: this.designTools
        },
        {
            icon: '',
            name: 'Editor/IDE',
            item: this.editors
        },
        {
            icon: '',
            name: 'FW/CMS',
            item: this.fwCms
        },
        {
            icon: '',
            name: 'DataBase',
            item: this.databases
        }
    ]

    constructor(props) {
        super(props);

        this.state = {
            skillTitle: 'ProgramLanguage',
            skillType: this.programLanguages,
            skillName: this.programLanguages[0].name,
            skillText: this.programLanguages[0].text
        };
    }

    changeState(value) {
        this.setState({ skillName: value.name });
        this.setState({ skillText: value.text });
    }

    changeSkillType(value) {
        this.setState({ skillTitle: value.title})
        this.setState({ skillType: value.item });
        this.setState({ skillText: '' });
    }
    
    render() {
        
        return (
            <div>
                <SectionTitle title='Skill' />
                <h3>{this.state.skillTitle}</h3>
                <div>
                    {this.state.skillType.map((listItem) => {
                        return <IconCard
                            info={
                                {
                                    icon: listItem.icon ,
                                    name: listItem.name ,
                                    text: listItem.text
                                }
                            }
                            callMethod={(value) => this.changeState(value)}/>
                    })}
                    <Text text={this.state.skillText} />
                </div>
                <div>
                    {this.skillList.map((listItem) => {
                        return <SelectButton
                            info={
                                {
                                    icon: listItem.icon,
                                    title: listItem.name ,
                                    item: listItem.item
                                }
                            }
                            callMethod={(value) => this.changeSkillType(value)}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default Skill;