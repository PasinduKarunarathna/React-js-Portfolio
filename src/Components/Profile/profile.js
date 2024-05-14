import React from 'react'
import './profile.css';
import proImg from '../Assets/profile.jpeg';
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/github.png';
import arrows from '../Assets/arrows.png';

const Profile = () => {

    const handleArrowClick = () => {
        window.location.href = './#about';
      };

    const redirectToLinkedIn = () => {
        window.open('https://github.com/PasinduKarunarathna');
      };
    
      const redirectToGitHub = () => {
        window.open('https://www.linkedin.com/in/pasindu-karunarathna/');
      };

  return (
    <section id='profile'>
        <div className="section_pic-container">
            <img className='img1' src={proImg} alt='profile_picture'/>
        </div>
        <div className='section_text'>
            <p className='section_text_p1'>Hello, I'm</p>
            <h1 className='title'>Pasindu</h1>
            <p className='section_text_p2'>Web Developer</p>
            <div className='btn-container'>
                <button className='btn btn-color-2'
                onClick="window.open('./')"
                >
                    Download cv
                </button>
                
                <button className='btn btn-color-1'
                onclick="window.location.href = '#contact'"
                >
                    Contact Info
                </button>
            </div>
            <div id='socials-container'>
                <img src={linkedin} alt='linkedin'
                className='icon'
                onClick={redirectToGitHub}
                />

                <img src={github} alt='linkedin'
                className='icon'
                onClick={redirectToLinkedIn}
                                />
            </div>
            <img 
            src={arrows} 
            alt='downarrow' 
            className='arrows'
            onClick={handleArrowClick}
        />
        </div>
        
    </section>
  )
}

export default Profile