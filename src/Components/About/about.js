import React from 'react'
import './about.css'

import edu from '../Assets/edu.png';
import topr from '../Assets/topr.png';
import arrows from '../Assets/arrows.png';
import Profile from '../Assets/profile.jpeg';



const About = () => {

    const handleArrowClick = () => {
        window.location.href = './#experience';
      };
  return (
    <section id='about'>
        <p className='section_text_p1'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section_container'>
        
            <div className='about_details-container'>
                <div className='about-containers'>
                    <div className='details-container'>
                        <img
                         src={topr} 
                         alt="experience_icon"
                         className='icon'
                        />
                        <h3>Experience</h3>
                        <p>Web Developer <br /> UI/UX Design <br /> CMS</p>
                    </div>
                    <img 
                         src={Profile} 
                         alt="experience_icon"
                         className='profile'
                        />
                    <div className='details-container'>
                    <img 
                         src={edu} 
                         alt="educatin_icon"
                         className='icon'
                        />
                        <h3>Education</h3>
                        <p>B.sc. Information Systems Management<br /> BCI- cetificate completed technology and comunication
                        <br />Cetificate completed English</p>
                    </div>
                </div>
                <div className='text-container'>
                    <p>
                    Learn how to build and deploy a responsive portfolio website from scratch using only vanilla
                    plain HTML, CSS, and JavaScript. No Frameworks or React knowledge is needed 
                    for this beginner-friendly easy tutorial.Learn how to build and deploy a responsive portfolio website from scratch using only vanilla
                    plain HTML, CSS, and JavaScript. No Frameworks or React knowledge is needed 
                    for this beginner-friendly easy tutorial.Learn how to build and deploy a responsive portfolio website from scratch using only vanilla
                    plain HTML, CSS, and JavaScript. No Frameworks or React knowledge is needed 
                    for this beginner-friendly easy tutorial.Learn how to build and deploy a responsive portfolio website from scratch using only vanilla
                    plain HTML, CSS, and JavaScript. No Frameworks or React knowledge is needed 
                    for this beginner-friendly easy tutorial.this beginner-friendly easy tutorial.friendly easy 
                    </p>
                </div>
            </div>
        </div>
        <img 
            src={arrows} 
            alt='downarrow' 
            className='arrow'
            onClick={handleArrowClick}
        />
    </section>
  )
}

export default About
