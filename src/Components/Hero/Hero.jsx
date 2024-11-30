import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id ='home'className='hero'>
        <h1><span>I'm Pratham Raut, </span>Full Stack Developer From Mumbai</h1>
        <p>I am a Full Stack Developer from Mumbai,Graduated from Patkar Varde College in degree of BScIT.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
