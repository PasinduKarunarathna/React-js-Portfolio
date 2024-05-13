import React from 'react'
import './experience.css';

import cheack from '../Assets/cheak.png';
import arrows from '../Assets/arrows.png';

const Experience = () => {

    const handleArrowClick = () => {
        window.location.href = './#projects';
      };

  return (
    <section id="experience">
        <p className='section_text_p1'>Explor My</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
            <div className='about-containers'>
                <div className='details-container'>
                    <h2 className='experience-sub-title'>Catagories</h2>
                    <div className='article-container'>
                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>Blog-Sites</h3>
                                <p>Experience</p>
                             </div>
                        </article>
                        
                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>Landing-page</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>Static-Page</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>Ecommerce-Sites</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>Business-Sites</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>Personal-Sites</h3>
                                <p>Experience</p>
                             </div>
                        </article>
                    </div>
                </div>

                <div className='details-container'>
                    <h2 className='experience-sub-title'>Skills</h2>
                    <div className='article-container'>
                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>HTML</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>Python</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>CSS</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>Javascript</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>React js</h3>
                                <p>Experience</p>
                             </div>
                        </article>

                        <article>
                            <img
                             src={cheack} 
                             alt='cheack icon'
                             className='cheak_icon'
                             />
                             <div>
                                <h3>wordpress</h3>
                                <p>Experience</p>
                             </div>
                        </article>
                    </div>
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

export default Experience