import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about'className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <div className="about-right">
            <div className="about-para">
              <p>As a passionate and dedicated frontend developer, I possess a strong foundation in HTML, CSS, and JavaScript, along with hands-on experience in creating responsive and user-friendly websites.</p>
              <p>I am eager to apply my skills in building interactive web applications and continuously learning new technologies to stay updated in this fast-paced field. With a keen eye for design and a focus on delivering smooth user experiences.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
              <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <h1>10+</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
    </div>
  )
}

export default About
