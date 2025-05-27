import React from 'react'
import { Phone, Mail, MapPin, Send, ChevronDown } from 'lucide-react';
import './contact.css'
import Footer from '../footer/Footer';

function Contact() {
  const handleAccordionToggle = (e) => {
    const accordion = e.currentTarget;
    accordion.classList.toggle('active');
    const panel = accordion.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
  };

  return (
    <div className="contact-us-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Contact Us</h1>
              <p className="hero-subtitle">We’re here to help you find your dream home</p>
              <p className="hero-description">
                Whether you're looking to buy, sell, or just have a question, our team at MagmaEstate is ready to assist you. 
                Reach out to us through the form below, or use our contact details to get in touch directly.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>support@magmaestate.com</span>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>123 Real Estate Ave, Suite 100, City, Country</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="contact-visual"></div>
              <div className="floating-element star"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="form-container">
            <div className="form-image"></div>
            <div className="form-content">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="How can we help you?" rows="5"></textarea>
              </div>
              <button className="btn-primary">
                <Send className="btn-icon" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us on the Map</h2>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241267502562!2d-73.98657608459375!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a4051f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1634545281449!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="LamaEstate Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </div>
              <h3>How do I schedule a property viewing?</h3>
              <p>
                You can schedule a property viewing by filling out the form above or calling us directly at +1 (555) 123-4567. 
                Our team will arrange a convenient time for you to visit the property.
              </p>
            </div>
            <div className="faq-card">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </div>
              <h3>What documents do I need to sell my property?</h3>
              <p>
                To sell your property, you'll typically need a title deed, property tax receipts, and any relevant permits. 
                Our team can guide you through the process and ensure all paperwork is in order.
              </p>
            </div>
            <div className="faq-card">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </div>
              <h3>Do you offer virtual tours?</h3>
              <p>
                Yes, we offer virtual tours for most of our properties. Contact us to request a virtual tour, and we'll set it up for you.
              </p>
            </div>
            <div className="faq-card">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </div>
              <h3>How long does the buying process take?</h3>
              <p>
                The buying process can take anywhere from 30 to 60 days, depending on financing, inspections, and other factors. 
                We'll keep you updated every step of the way.
              </p>
            </div>
            <div className="faq-card">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </div>
              <h3>Can you help with property financing?</h3>
              <p>
                Yes, we partner with trusted financial institutions to help you secure the best mortgage rates. Contact us to learn more about your options.
              </p>
            </div>
            <div className="faq-card">
              <div className="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </div>
              <h3>What areas do you serve?</h3>
              <p>
                We operate in over 50 cities nationwide. Reach out to us to confirm if we cover your desired location.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact