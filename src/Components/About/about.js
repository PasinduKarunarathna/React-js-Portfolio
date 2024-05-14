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
                        <p>MERN stack <br /> React-Native <br /> UI/UX Design <br /> CMS</p>
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
                        <p>Bsc. Information Systems Management Rajarata University<br /> BCI Campus- cetificate completed technology and comunication
                        <br />Cetificate completed English <br />University of Moratuwa-Cetificate completed Web development and Python </p>
                    </div>
                </div>
                <div className='text-container'>
                    <p>
                    Greetings! I'm Pasindu Karunarathna, a dedicated undergraduate student at Rajarata University of Sri Lanka, 
                    pursuing a degree in Information Systems. 
                    Endowed with a blend of responsibility and critical thinking, I thrive in the fast-paced realm of 
                    web development, specializing particularly in front-end design. With proficiency in the MERN stack, 
                    including React.js and React Native, I'm constantly honing my skills to stay at the forefront of 
                    technological innovation. However, what truly sets me apart is my collaborative spirit and strong teamwork 
                    abilities. I believe in the power of synergy, leveraging collective expertise to drive impactful results. 
                    Whether it's crafting immersive digital experiences or exploring cutting-edge solutions, 
                    I'm passionate about pushing boundaries and creating meaningful connections through technology. 
                    Join me on this exhilarating journey as we embark on a quest to innovate,
                     collaborate, and make a lasting impact in the digital landscape!
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
