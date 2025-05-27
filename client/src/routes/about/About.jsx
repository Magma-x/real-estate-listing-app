import React from 'react';
import {Award, Users, Building, Star, Shield, Target, Heart, Globe, TrendingUp, Zap, Home, Calendar, MapPin, Phone, Mail  } from 'lucide-react';
import './about.css';
import Footer from "../footer/Footer";
    
function About() {
    return (
      <div className="about-us-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>About MagmaEstate</h1>
              <p className="hero-subtitle">Your trusted partner in real estate excellence</p>
              <p className="hero-description">
                For over 16 years, MagmaEstate has been transforming the real estate landscape with innovative solutions,
                personalized service, and unwavering commitment to our clients' dreams. We don't just sell properties -
                we create lasting relationships and help families find their perfect homes.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="stat-number">16+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">2000+</div>
                  <div className="stat-label">Happy Families</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="building-card primary">
                <div className="building-visual primary"></div>
              </div>
              <div className="floating-element star"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><Award /></div>
              <div className="stat-number">200</div>
              <div className="stat-label">Awards Gained</div>
              <p className="stat-description">Industry recognition for excellence</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Building /></div>
              <div className="stat-number">2000+</div>
              <div className="stat-label">Properties Sold</div>
              <p className="stat-description">Successful transactions completed</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Users /></div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
              <p className="stat-description">Satisfied families and investors</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Globe /></div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Cities Covered</div>
              <p className="stat-description">Nationwide presence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p className="story-intro">
                Founded in 2008 with a simple vision: to revolutionize the way people buy and sell real estate.
              </p>
              <p>
                What started as a small family business has grown into one of the most trusted names in real estate.
                Our journey began when our founder, Sarah Johnson, recognized the need for a more personalized approach
                to real estate services.
              </p>
              <p>
                Today, MagmaEstate stands as a testament to what happens when passion meets expertise. We've helped
                thousands of families find their dream homes, assisted investors in building their portfolios, and
                supported sellers in achieving their goals.
              </p>
              <div className="story-highlights">
                <div className="highlight"><strong>2008:</strong> MagmaEstate founded</div>
                <div className="highlight"><strong>2012:</strong> Expanded to 10 cities</div>
                <div className="highlight"><strong>2018:</strong> Reached 1000+ properties sold</div>
                <div className="highlight"><strong>2024:</strong> Leading real estate platform</div>
              </div>
            </div>
            <div className="story-image">
              <div className="timeline-visual">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Foundation</h4>
                    <p>Started with a vision</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Growth</h4>
                    <p>Expanded nationwide</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Innovation</h4>
                    <p>Technology integration</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Leadership</h4>
                    <p>Industry recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Shield /></div>
              <h3>Trust & Integrity</h3>
              <p>We build lasting relationships through honest communication and transparent practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Target /></div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every interaction, delivering top-quality service.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Heart /></div>
              <h3>Client-Centric</h3>
              <p>Your dreams are our priority—we listen, understand, and deliver tailored solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Globe /></div>
              <h3>Innovation</h3>
              <p>We embrace technology to make real estate transactions smoother and efficient.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><TrendingUp /></div>
              <h3>Growth</h3>
              <p>We are committed to continuous improvement and expanding our reach.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Zap /></div>
              <h3>Passion</h3>
              <p>Our enthusiasm for real estate drives us to exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2>Meet Our Expert Team</h2>
            <p>Dedicated professionals committed to your success</p>
          </div>
          <div className="team-grid">
            <div className="team-member featured">
              <div className="member-image founder"></div>
              <div className="member-info">
                <h3>Sarah Johnson</h3>
                <p className="member-role">CEO & Founder</p>
                <p className="member-bio">With 20+ years in real estate, Sarah founded LamaEstate with a vision to transform the industry through personalized service.</p>
                <div className="member-rating">
                  {Array(5).fill().map((_, i) => <Star key={i} className="star filled" />)}
                </div>
                <div className="member-stats"><span>500+ Properties Sold</span></div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image agent1"></div>
              <div className="member-info">
                <h3>Michael Chen</h3>
                <p className="member-role">Senior Sales Agent</p>
                <p className="member-bio">Specializing in luxury properties and commercial real estate with exceptional market insight.</p>
                <div className="member-rating">
                  {Array(5).fill().map((_, i) => <Star key={i} className="star filled" />)}
                </div>
                <div className="member-stats"><span>300+ Properties Sold</span></div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image agent2"></div>
              <div className="member-info">
                <h3>Emily Rodriguez</h3>
                <p className="member-role">Marketing Director</p>
                <p className="member-bio">Expert in digital marketing and property presentation, ensuring maximum exposure for listings.</p>
                <div className="member-rating">
                  {Array(5).fill().map((_, i) => <Star key={i} className="star filled" />)}
                </div>
                <div className="member-stats"><span>95% Client Satisfaction</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Dream Property?</h2>
            <p>Let our experienced team help you navigate the real estate market with confidence.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Browse Properties</button>
              <button className="btn-secondary">Contact Our Team</button>
            </div>
          </div>
        </div>
      </section>
          <Footer />
    </div>
    )
}

export default About