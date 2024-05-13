import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './project.css'

import p1 from '../Assets/p1.jpeg'
import p2 from '../Assets/p2.png'
import p3 from '../Assets/p3.jpeg'
import p4 from '../Assets/p4.jpeg'
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
        title: 'Portfolio',
        img:p3,
        discription:'this project is about 1',
    },

    {
        title: 'Portfolio1',
        img:p2,
        discription:'this project is about 2',
    },
    
    {
        title: 'Portfolio2',
        img:p1,
        discription:'this project is about 3',
    },

    {
        title: 'Portfolio3',
        img:p4,
        discription:'this project is about',
    }


]
export default Project