import React from 'react'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
        <form className="text-center">
            <label for="name">First and Last name</label>
            <input type="text" id="name" className="contact-field" placeholder="Enter first and last name" />
            <label for="name">E-mail</label>
            <input type="email" id="email" className="contact-field" placeholder="Enter e-mail" />
            <label for="comments">Question</label>
            <textarea rows="6" placeholder="Ask question" name="comments" className="contact-field" id="comments"></textarea>
            <input type="submit" className="btn-submit" value="Send" />
          </form>
        </div>
        <div className="flex-large">
          <ul className="custom-list">
            <li><strong>Director:</strong> Miloš Kočević <span className="mobile-titula">dipl.ing.me</span></li>
            <li><strong>Address:</strong> Takovska 5, 36103 Kraljevo</li>
            <li><strong>Mobile:</strong><a href="tel:+381601777 686"> + 381 60 1 777 686</a></li>
            <li><strong>E-mail:</strong><a href="mailto:office@euss.rs">office@euss.rs</a></li>
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