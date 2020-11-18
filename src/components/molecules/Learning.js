import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import LearningItem from '../atoms/LearningItem'

class Learning extends React.Component {

    learningNow = [
        {
            icon: '',
            name: 'React'
        },
        {
            icon: '',
            name: 'Docker'
        },
        {
            icon: '',
            name: 'AWS'
        }
    ];

    learningNext = [
        {
            icon: '',
            name: 'Redux'
        },
        {
            icon: '',
            name: 'TypeScript'
        },
        {
            icon: '',
            name: 'Vue.js'
        }
    ];

    render() {
        return (
            <div>
                <SectionTitle title='Learning' />
                <div>
                    <h3>Now</h3>
                    {this.learningNow.map((listItem) => {
                        return <LearningItem icon={listItem.icon} name={listItem.name} />
                    })}
                </div>
                <p>→</p>
                <div>
                    <h3>Next Level</h3>
                    {this.learningNext.map((listItem) => {
                        return <LearningItem icon={listItem.icon} name={listItem.name} />
                    })}
                </div>
            </div>
        );
    }
}

export default Learning;