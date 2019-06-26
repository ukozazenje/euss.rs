import React from "react"

import Layout from "../../components/layoutEnglish"
import SEO from "../../components/seo"
import Hero from "../../components/heroEnglish"
import grejanje from '../../images/grejanje.png'
import klimatizacija from '../../images/klimatizacija.png'
import gasneInstalacije from '../../images/gasne-instalacije.png'
import ElaboratiEnergetskeEfikasnostin from '../../images/elaborati.png'
import komponovaniVazduh from '../../images/komponovani-vazduh.png'
import ventilacija from '../../images/ventilacija.png'
import alternativniIzvorEnergije from '../../images/alternativni-izvor-energije.png'
import kotlarnice from '../../images/ikonica-smanjena.svg'
import sistemiVentilacija from '../../images/1.svg'
import implementacija from '../../images/implementacija-standarda.png'
import zahtevi from '../../images/tehnicki-zahtevi.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" /> 
    <Hero />
    <div className="cards-wrapper-top"></div>
    <div className="cards-wrapper">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large card-1">
            <div className="card vertical-center">
              <h3 className="card-title">HEATING</h3>
              <ul className="card-list">
                <li className="card-list-item">Radiator</li>
                <li className="card-list-item">Air</li>
                <li className="card-list-item">Floor</li>
                <li className="card-list-item">Panel</li>
                <li className="card-list-item">IC heaters</li>
              </ul>
              <img src={grejanje} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-2">
            <div className="card vertical-center">
              <h3 className="card-title">COOLING<br /> AIR CONDITION</h3>
              <ul className="card-list">
                <li className="card-list-item">Air</li>
                <li className="card-list-item">Panel</li>
              </ul>
              <img src={klimatizacija} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-3">
            <div className="card vertical-center">
              <h3 className="card-title">GAS INSTALLATIONS</h3>
              <ul className="card-list">
                <li className="card-list-item">Measuring regulation stations</li>
                <li className="card-list-item">Inner gas installations</li>
                <li className="card-list-item">Gas boilers</li>
                <li className="card-list-item">Gas pipelines</li>
              </ul>
              <img src={gasneInstalacije} alt="klima" />
            </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-large card-4">
            <div className="card vertical-center">
              <h3 className="card-title">ELABORATES OF ENERGY EFFICIENCY</h3>
              <img src={ElaboratiEnergetskeEfikasnostin} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-5">
            <div className="card vertical-center">
              <h3 className="card-title">COMPRESSED AIR</h3>
              <ul className="card-list">
                <li className="card-list-item">Compressor stations</li>
                <li className="card-list-item">Distribution of compressed air</li>
              </ul>
              <img src={komponovaniVazduh} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-6">
            <div className="card vertical-center">
              <h3 className="card-title">VENTILATION</h3>
              <ul className="card-list">
                <li className="card-list-item">Industrial facilities</li>
                <li className="card-list-item">Residential buildings</li>
                <li className="card-list-item">Commercial facilities</li>
                <li className="card-list-item">Sports facilities</li>
              </ul>
              <img src={ventilacija} alt="klima" />
            </div>
          </div>
        </div>
        
        <div className="flex-row">
          <div className="flex-large card-4">
            <div className="card vertical-center">
              <h3 className="card-title">ALTERNATIVE SOURCES<br />
              ENERGY</h3>
              <ul className="card-list">
                <li className="card-list-item">Heat pumps</li>
                <li className="card-list-item">Solar panels</li>
                <li className="card-list-item">Geothermal sources</li>
                <li className="card-list-item">Wind generators</li>
              </ul>
              <img src={alternativniIzvorEnergije} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-5">
            <div className="card vertical-center">
              <h3 className="card-title">STEAM DISTRIBUTION BOILER ROOM</h3>
              <h4 className="left-mobile">On all types of fuel</h4>
              <ul className="card-list">
                <li className="card-list-item">coal</li>
                <li className="card-list-item">pellet</li>
                <li className="card-list-item">a wooden cutter</li>
                <li className="card-list-item">fuel oil</li>
                <li className="card-list-item">LPG</li>
              </ul>
              <img style={{height: '99px'}} src={kotlarnice} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-6">
            <div className="card vertical-center">
              <h3 className="card-title">WASTE SYSTEM
VENTILATION</h3>
              <ul className="card-list">
                <li className="card-list-item">Cyclone</li>
                <li className="card-list-item">Vrećasti filteri</li>
              </ul>
              <img style={{height: '183px'}} src={sistemiVentilacija} alt="klima" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="cards-wrapper-bottom"></div>
    <div className="container">
      <div className="flex-row implementation-intro-text text-right">
        <div className="flex-large ">
          <span className="hide-mobile">
          STANDARD IMPLEMENTATION&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONSULTING<br />
          TECHNICAL REQUIREMENTS FOR PRODUCTS &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; IMPLEMENTATION OF CE mark<br />
          </span>
          <span className="hide-desktop">
              <span className="p-1">STANDARD IMPLEMENTATION<br /> CONSULTING<br /></span>
              TECHNICAL REQUIREMENTS FOR PRODUCTS<br /> IMPLEMENTATION OF CE mark<br />
          </span>
        </div>
      </div>
    </div>

    <div className="container implementation-section">
      <div className="flex-row">
        <div className="flex-large">
          <h3>STANDARD IMPLEMENTATION</h3>
          <ul className="custom-list">
            <li>EN ISO 50001 - Energy management systems - Requirements</li>
            <li>ISO 9001 - Quality management systems - Requirements</li>
            <li>ISO 45001 - Occupational Health and Safety Management Systems - Requirements</li>
          </ul>
          <h3>KONSULTANTSKE USLUGE</h3>
          <ul className="custom-list">
            <li>EN ISO 50001 - Energy management systems - Requirements</li>
            <li>ISO 9001 - Quality management systems - Requirements </li>
            <li>ISO 21500 - Project Management Guidelines</li>
            <li>ISO 31000 - Risk Management - Principles and Guidelines</li>
            <li>ISO 45001 - Occupational Health and Safety Management Systems - Requirements</li>
            <li>CE mark - Product compliance with EU requirements</li>
          </ul>
        </div>
        <div className="flex-large implementation-img">
            <img src={implementacija} alt="" className="implementation-img" />
        </div>
      </div>
    </div>

    <div className="container demands-content">
      <div className="flex-row">
        <div className="flex-large">
            <img src={zahtevi} alt="" className="implementation-img" />
        </div>
        <div className="flex-large">
          <h3>TECHNICAL REQUIREMENTS FOR PRODUCTS<br />
            <span className="sub-heading">ANALYSIS / ELABORATES for products that are covered by the following directives</span> 
          </h3>
          <ul className="custom-list">
            <li>CE mark - Product compliance with EU requirements</li>
            <li>AAA mark - conformity to products with RS requirements</li>
            <li>Machinery Directive (MD)</li>
            <li>Low Voltage Directive (LVD)</li>
            <li>Electromagnetic Compatibility (EMC)</li>
            <li>Elevator directive</li>
            <li>ATEX Directive</li>
            <li>Noise emission in the environment by equipment for use outdoors (NEEEOR)</li>
          </ul>
          <h3>IMPLEMENTATION OF CE mark</h3>
          <ul className="custom-list">
            <li>Product compliance with EU product requirements</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

