import React from 'react'
import logo from '../images/logo.png'

const Hero = () => (
  <>
    <div className="hero">
      <div id="slider">
        <div className="slider-container">
          <div className="slide">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="slide">
            <h2>EXECUTION AND CONTROL OF TERMOTECHNICAL INSTALLATIONS</h2>
            <h2>ENERGY EFFICIENCY CONSULTING</h2>
          </div>
            <div className="slide">
              <h2>STANDARD IMPLEMENTATION <br /> CONSULTING</h2>
              <h2>TECHNICAL REQUIREMENTS FOR PRODUCTS <br /> IMPLEMENTATION OF CE mark</h2>
            </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="flex-row intro-text">
        <div className="flex-large text-center">
          <h2 className="desktop-intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESIGN OF TERMOTECHNICAL INSTALLATIONS &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;   CONSULTING<br />
          EXECUTION AND CONTROL OF TERMOTECHNICAL INSTALLATIONS &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; ENERGY EFFICIENCY<br /></h2>

          <h2 className="mobile-intro">DESIGN OF TERMOTECHNICAL INSTALLATIONS<br /> CONSULTING<br /></h2>
          <h2 className="mobile-intro">EXECUTION AND CONTROL OF TERMOTECHNICAL INSTALLATIONS<br /> ENERGY EFFICIENCY<br /></h2>
        </div>
      </div>
    </div>
  </>
)

export default Hero