import React from 'react'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column footer-brand">
            <h3>MagmaEstate</h3>
            <p>
              Your trusted partner in real estate. Helping you find your dream home since 2008.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="footer-column quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/properties">Properties</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <Phone className="footer-icon" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail className="footer-icon" size={20} />
                <span>support@magmaestate.com</span>
              </li>
              <li>
                <MapPin className="footer-icon" size={20} />
                <span>123 Real Estate Ave, Suite 100, City, Country</span>
              </li>
            </ul>
          </div>

          <div className="footer-column newsletter">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest properties and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MagmaEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer