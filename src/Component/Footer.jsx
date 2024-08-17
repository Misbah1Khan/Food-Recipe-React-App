import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';   


function Footer() {
    const socialMediaLinks = [
        {
          icon: faFacebook,
          link: 'https://www.facebook.com/'
        },
        {
          icon: faTwitter,
          link: 'https://www.twitter.com/'
        },
        {
          icon: faInstagram,
          link: 'https://www.instagram.com/' 
        }
      ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We're passionate about bringing delicious and  <br />easy-to-follow recipes right to your fingertips. <br /> Our goal is to inspire home cooks of all <br />levels to create amazing meals.</p>
         
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>Contact</li>
            {/* ... other links */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media">
        {socialMediaLinks.map((link, index) => (
          <li key={index}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon}  className="social-icon"/>
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Misbah Khan</p>
      </div>
    </footer>
  );
}

export default Footer;