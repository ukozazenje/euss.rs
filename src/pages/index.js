import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import grejanje from '../images/grejanje.png'
import klimatizacija from '../images/klimatizacija.png'
import gasneInstalacije from '../images/gasne-instalacije.png'
import ElaboratiEnergetskeEfikasnostin from '../images/elaborati.png'
import komponovaniVazduh from '../images/komponovani-vazduh.png'
import ventilacija from '../images/ventilacija.png'
import alternativniIzvorEnergije from '../images/alternativni-izvor-energije.png'
import kotlarnice from '../images/ikonica-smanjena.svg'
import sistemiVentilacija from '../images/1.svg'
import implementacija from '../images/implementacija-standarda.png'
import zahtevi from '../images/tehnicki-zahtevi.png'

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
              <h3 className="card-title">GREJANJE</h3>
              <ul className="card-list">
                <li className="card-list-item">Radijatorsko</li>
                <li className="card-list-item">Vazdušno</li>
                <li className="card-list-item">Podno</li>
                <li className="card-list-item">Panelno ( zidno )</li>
                <li className="card-list-item">Zračenjem ( IC grejači )</li>
              </ul>
              <img src={grejanje} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-2">
            <div className="card vertical-center">
              <h3 className="card-title">HLAĐENJE<br /> KLIMATIZACIJA</h3>
              <ul className="card-list">
                <li className="card-list-item">Vazdušno</li>
                <li className="card-list-item">Panelno ( zidno )</li>
              </ul>
              <img src={klimatizacija} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-3">
            <div className="card vertical-center">
              <h3 className="card-title">GASNE INSTALACIJE</h3>
              <ul className="card-list">
                <li className="card-list-item">Merno regulacione stanice MRS</li>
                <li className="card-list-item">Unutrašnje gasne instalacije UGI</li>
                <li className="card-list-item">Gasne kotlarnice</li>
                <li className="card-list-item">Gasovodi</li>
              </ul>
              <img src={gasneInstalacije} alt="klima" />
            </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-large card-4">
            <div className="card vertical-center">
              <h3 className="card-title">ELABORATI ENERGETSKE 
                  EFIKASNOSTI</h3>
              <img src={ElaboratiEnergetskeEfikasnostin} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-5">
            <div className="card vertical-center">
              <h3 className="card-title">KOMPRIMOVANI VAZDUH</h3>
              <ul className="card-list">
                <li className="card-list-item">Kompresorske stanice</li>
                <li className="card-list-item">Razvod komprimovanog vazduha</li>
              </ul>
              <img src={komponovaniVazduh} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-6">
            <div className="card vertical-center">
              <h3 className="card-title">VENTILACIJA</h3>
              <ul className="card-list">
                <li className="card-list-item">Industrijskih objekata</li>
                <li className="card-list-item">Stambenih objekata</li>
                <li className="card-list-item">Poslovnih objekata</li>
                <li className="card-list-item">Sportskih objekata</li>
              </ul>
              <img src={ventilacija} alt="klima" />
            </div>
          </div>
        </div>
        
        <div className="flex-row">
          <div className="flex-large card-4">
            <div className="card vertical-center">
              <h3 className="card-title">ALTERNATIVNI IZVORI<br />
                  ENERGIJE</h3>
              <ul className="card-list">
                <li className="card-list-item">Toplotne pumpe</li>
                <li className="card-list-item">Solarni paneli</li>
                <li className="card-list-item">Geotermalni izvori</li>
                <li className="card-list-item">Vetrogeneratori</li>
              </ul>
              <img src={alternativniIzvorEnergije} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-5">
            <div className="card vertical-center">
              <h3 className="card-title">TOPLOVODI  I PAROVODI KOTLARNICE </h3>
              <h4 className="left-mobile">Na sve vrste goriva</h4>
              <ul className="card-list">
                <li className="card-list-item">ugalj</li>
                <li className="card-list-item">pelet</li>
                <li className="card-list-item">drvena sečka</li>
                <li className="card-list-item">lož ulje</li>
                <li className="card-list-item">TNG</li>
              </ul>
              <img style={{height: '99px'}} src={kotlarnice} alt="klima" />
            </div>
          </div>
          <div className="flex-large card-6">
            <div className="card vertical-center">
              <h3 className="card-title">OTPRAŠIVANJE SISTEMA
                  VENTILACIJE  </h3>
              <ul className="card-list">
                <li className="card-list-item">Ciklon</li>
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
              IMPLEMENTACIJA STANDARDA&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KONSULTANTSKE USLUGE<br />
              TEHNIČKI ZAHTEVI ZA PROIZVODE &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; IMPLEMENTACIJA CE znaka<br />
          </span>
          <span className="hide-desktop">
              <span className="p-1">IMPLEMENTACIJA STANDARDA<br /> KONSULTANTSKE USLUGE<br /></span>
              TEHNIČKI ZAHTEVI ZA PROIZVODE<br /> IMPLEMENTACIJA CE znaka<br />
          </span>
        </div>
      </div>
    </div>

    <div className="container implementation-section">
      <div className="flex-row">
        <div className="flex-large">
          <h3>IMPLEMENTACIJA STANDARDA</h3>
          <ul className="custom-list">
            <li>EN ISO 50001 - Sistemi menadžmenta energijom - Zahtevi</li>
            <li>ISO 9001 - Sistemi menadžmenta kvalitetom - Zahtevi</li>
            <li>ISO 45001 - Sistemi upravljanja zaštitom zdravlja i bezbednosti na radu - Zahtevi</li>
          </ul>
          <h3>KONSULTANTSKE USLUGE</h3>
          <ul className="custom-list">
            <li>EN ISO 50001 - Sistemi menadžmenta energijom - Zahtevi</li>
            <li>ISO 9001 - Sistemi menadžmenta kvalitetom - Zahtevi </li>
            <li>ISO 21500 - Smernice za upravljanje projektima</li>
            <li>ISO 31000 - Menadžment rizikom - Principi i smernice</li>
            <li>ISO 45001 - Sistemi upravljanja zaštitom zdravlja i bezbednosti na radu - Zahtevi</li>
            <li>CE znak - Usaglašenost proizvoda sa zahtevima EU</li>
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
          <h3>TEHNIČKI ZAHTEVI ZA PROIZVODE <br />
            <span className="sub-heading">ANALIZE / ELABORATI za proizvode koji su obuhvaćeni sledećim direktivama</span> 
          </h3>
          <ul className="custom-list">
            <li>CE znak - Usaglašenost proizvoda sa zahtevima EU</li>
            <li>AAA znak - Usaglašenost proizvoda sa  RS zahtevima</li>
            <li>Direktiva o mašinama</li>
            <li>Direktiva o niskonaponskoj opremi</li>
            <li>Elektromagnetna kompatibilnost</li>
            <li>Direktiva o liftovima</li>
            <li>ATEKS Direktiva</li>
            <li>Emisija buke u životnoj sredini od opreme koja se koristi na otvorenom</li>
          </ul>
          <h3>IMPLEMENTACIJA CE znaka </h3>
          <ul className="custom-list">
            <li>Usaglašenost proizvoda sa zahtevima EU za proizvode</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
