import React from 'react'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
        <form className="text-center">
            <label for="name">Ime i prezime</label>
            <input type="text" id="name" className="contact-field" placeholder="Unesite Vaše ime i prezime" />
            <label for="name">E-mail</label>
            <input type="email" id="email" className="contact-field" placeholder="Unesite Vaš e-mail" />
            <label for="comments">Pitanje</label>
            <textarea rows="6" placeholder="Postavite pitanje" name="comments" className="contact-field" id="comments"></textarea>
            <input type="submit" className="btn-submit" value="Pošalji" />
          </form>
        </div>
        <div className="flex-large">
          <ul className="custom-list">
            <li><strong>Direktor:</strong> Miloš Kočević <span className="mobile-titula">dipl.inž.maš.</span></li>
            <li><strong>Adresa:</strong> Takovska 5, 36103 Kraljevo</li>
            <li><strong>Mobilni:</strong> + 381 60 1 777 686</li>
            <li><strong>E-mail:</strong> office@euss.rs</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copy-right">
      <div className="flex-large">
          <p>&copy; EUROPEAN SMART SOLUTIONS</p>
      </div>
    </div>
  </footer>
)

export default Footer;