import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import LinkImage from '../atoms/LinkImage'

class Work extends React.Component {

    render() {
        return (
            <div>
                <SectionTitle title='Work' />
                <LinkImage name='work1' url='#' image='#' />
                <LinkImage name='work2' url='#' image='#' />
            </div>
        );
    }
}

export default Work;