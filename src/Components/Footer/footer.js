import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
        <nav id='desktop-nav'>
            <div>
                <ul className='nav-links'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
        <p>Copyright . 2023 Pasindu. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer