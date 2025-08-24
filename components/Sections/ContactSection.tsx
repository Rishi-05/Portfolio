import React from 'react'
import ContactForm from '../Contact'
import Title from '../Title'
import Footer from '../Footer'

const ContactSection = () => {
    return (
        <div className="">
            <div className='flex flex-col items-center h-screen w-full mt-20 z-20' id="contact">
                <Title word1="Contact" word2="Me" className='mt-20 mb-10' />
                <ContactForm />
                <Footer />
            </div>
        </div>
    )
}

export default ContactSection