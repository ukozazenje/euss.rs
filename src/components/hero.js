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
            <h2>PROJEKTOVANJE IZVOĐENJE I NADZOR TERMOTEHNIČKIH INSTALACIJA</h2>
            <h2>ENERGETSKA EFIKASNOST KONSULTANTSKE USLUGE</h2>
          </div>
            <div className="slide">
              <h2>IMPLEMENTACIJA STANDARDA <br /> KONSULTANTSKE USLUGE</h2>
              <h2>TEHNIČKI ZAHTEVI ZA PROIZVODE <br /> IMPLEMENTACIJA CE znaka</h2>
            </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="flex-row intro-text">
        <div className="flex-large text-center">
          <h2 className="desktop-intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJEKTOVANJE TERMOTEHNIČKIH INSTALACIJA &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;   KONSULTANTSKE USLUGE<br />
            IZVOĐENJE I NADZOR TERMOTEHNIČKIH INSTALACIJA &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; ENERGETSKA EFIKASNOST<br /></h2>

          <h2 className="mobile-intro">PROJEKTOVANJE TERMOTEHNIČKIH INSTALACIJA<br /> KONSULTANTSKE USLUGE<br /></h2>
          <h2 className="mobile-intro">IZVOĐENJE I NADZOR TERMOTEHNIČKIH INSTALACIJA<br /> ENERGETSKA EFIKASNOST<br /></h2>
        </div>
      </div>
    </div>
  </>
)

export default Hero