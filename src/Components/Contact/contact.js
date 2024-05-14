import React from 'react'
import './contact.css'

import email from '../Assets/email.png'
import linkedin from '../Assets/linkedin.png'

const Contact = () => {
  return (
    <section id='contact'>
        <p className='section_text_p1'>Get in Touch</p>
        <h1 className='title'>Contact Me</h1>
        <div className='contact-info-upper-container'>
            <div className='contact-info-container'>
                <img
                src={email}
                alt='Email icon'
                className='icon contact-icon'
                />
                <p><a href='mailo:pasinduoshadha315@gmail.com'>@gmail</a></p>
            </div>

            <div className='contact-info-container'>
                <img
                src={linkedin}
                alt='Email icon'
                className='icon contact-icon'
                />
                <p><a href='https://www.linkedin.com/in/pasindu-karunarathna/'>Linkedin</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact