import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import ContactItem from '../atoms/ContactItem'

class Contact extends React.Component {

    render() {
        return (
            <div>
                <SectionTitle title='Contact' />
                <ContactItem name='Email' value='takuro.wada6@gmail.com' icon='#' />
            </div>
        );
    }
}

export default Contact;