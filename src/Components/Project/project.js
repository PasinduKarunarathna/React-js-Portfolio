import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './project.css'

import p1 from '../Assets/p1.png'
import p2 from '../Assets/p2.png'
import p3 from '../Assets/p3.png'
import p4 from '../Assets/p4.jpeg'
import p5 from '../Assets/p5.jpeg'
import p6 from '../Assets/p6.jpeg'
import p7 from '../Assets/p7.png'
import p8 from '../Assets/p8.png'
import arrows from '../Assets/arrows.png'

const Project = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const handleArrowClick = () => {
        window.location.href = './#contact';
      };

  return (
    
    <div className='project-container' id='projects'>
        <p className='section_text_p1'>Brows My</p>
        <h1 className='title'>Projects</h1>
        <div className='card'>
        <Slider {...settings}>
            {data.map((d)=>(
                <div>
                    <div>
                        <img src={d.img} alt='project img'/>
                    </div>

                    <div className='details'>
                        <p>{d.title}</p>
                        <p>{d.discription}</p>
                        {/* <button className='btn btn-color-2'>view</button> */}
                    </div>
                </div>
            ))}
            </Slider>
                       
        </div>
        <div className='arrow-wrapper'>
                        <img 
                        src={arrows} 
                        alt='downarrow' 
                        className='arrow1'
                        onClick={handleArrowClick}
                        />
        </div>
    </div>
  );
}

const data = [

    {
        title: 'NewsApp-Android',
        img:p8,
        discription:'React-Native - ongoing project',
    },

    {
        title: 'Visit Sri-Lanka',
        img:p3,
        discription:'React js',
    },

    {
        title: 'ToDo-Android App',
        img:p7,
        discription:'React-Native',
    },

    {
        title: 'Portfolio Website',
        img:p1,
        discription:'React js',
    },

    {
        title: 'digiwext.com',
        img:p2,
        discription:'Premium Blogger template Customized Manually',
    },

    {
        title: 'ToDo-List',
        img:p6,
        discription:'MERN stack',
    },
    
    {
        title: 'University Counselling System',
        img:p4,
        discription:'mySQL, VsCode',
    },

    {
        title: 'Login-Singnup',
        img:p5,
        discription:'React js',
    }
    

    

    
]
export default Project