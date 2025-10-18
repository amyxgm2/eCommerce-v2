import React from 'react';
import './Home.css';
import herovideo from '../assets/hero-video.mp4';
import ecofriendly from '../assets/eco-friendly-icon.svg';
import community from '../assets/community-icon.svg';
import handcrafted from '../assets/handcrafted-icon.svg';
import values from '../assets/values-photo.jpg';
import mission from '../assets/mission-photo.jpg';

function Home() {
  return (
    <main className="hero">
      {/* -------------------- Hero Video -------------------- */}
      <section className="hero-video-container">
        <video className="heroVideo" autoPlay loop muted playsInline>
          <source src={herovideo} type="video/mp4" />
        </video>

        <div className="hero-text">
          <h1>⋆₊˚ Your new favorite stationery store ⋆₊˚</h1>
          <h3>
            Explore one-of-a-kind finds, handpicked for their creativity and charm.
          </h3>
        </div>
      </section>

      {/* -------------------- Mission & Values -------------------- */}
      <section className="about">
        <div className="org-container">
          <img className="org-icon" src={mission} alt="Mission" />
          <h2 className="org-title">Our Mission</h2>
          <p className="org-subtitle">
            To bring charm, creativity, and intention to your everyday notes. Each product
            we carry is thoughtfully curated to spark inspiration and self-expression.
          </p>
        </div>

        <div className="why-container">
          <img className="why-icon" src={values} alt="Values" />
          <h2 className="why-title">Our Values</h2>
          <p className="why-subtitle">
            We believe stationery should be both beautiful and functional — supporting
            mindfulness, creativity, and connection through the art of writing.
          </p>
        </div>
      </section>

      {/* -------------------- Slider Section -------------------- */}
      <section className="slider">
        <h2 className="slider-title">What We Stand For</h2>
        <div className="slider-container">
          <div className="slide">
            <img src={ecofriendly} alt="Eco-Friendly Products" />
            <h3>Eco-Friendly</h3>
            <p>
              Our paper goods are made from sustainable materials, supporting a greener
              planet.
            </p>
          </div>

          <div className="slide">
            <img src={handcrafted} alt="Handcrafted Stationery" />
            <h3>Handcrafted</h3>
            <p>
              Every notebook and pen tells a story — many designed by local artists and
              makers.
            </p>
          </div>

          <div className="slide">
            <img src={community} alt="Community Driven" />
            <h3>Community</h3>
            <p>
              We collaborate with small businesses and creators to celebrate craftsmanship
              and creativity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;