'use client'

import Image from 'next/image'

const eventDetails = [
  { label: 'WHEN', value: 'March 20, 2028' },
  { label: 'WHERE', value: 'Los Angeles' },
  { label: 'WHO', value: 'Los Angeles residents' },
]

const experiences = [
  {
    number: '01',
    title: 'Discover',
    description: "Explore new styles and South Korea's new and trending brands.",
  },
  {
    number: '02',
    title: 'Shop',
    description: 'Browse and shop clothing from the brands on show.',
  },
  {
    number: '03',
    title: 'Celebrate',
    description: 'Stay for the party.',
  },
]

export function BandooEventPage() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Bandoo, back to top">
          BANDOO<span className="wordmark-dot">.</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">The pop-up</a>
          <a href="#experience">What to expect</a>
          <a className="nav-rsvp" href="#rsvp">
            RSVP <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A fashion pop-up in Los Angeles</p>
          <h1 id="hero-title">A new point<br />of <em>view.</em></h1>
          <p className="hero-description">
            South Korea&apos;s new and trending fashion brands, brought to Los Angeles.
          </p>
          <a className="text-link" href="#about">
            Discover the pop-up <span aria-hidden="true">↓</span>
          </a>
          <div className="hero-stamp" aria-hidden="true">
            <span>SEOUL</span><span className="stamp-divider">/</span><span>LOS ANGELES</span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/bandoo-fashion-editorial.png"
            alt="Three models wearing contemporary black and white fashion"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
            className="hero-image"
          />
          <div className="image-index"><span>01</span><span>03</span></div>
          <p className="image-caption">BANDOO POP-UP — LOS ANGELES</p>
        </div>
      </section>

      <section className="event-strip" aria-label="Event details">
        {eventDetails.map((detail) => (
          <div className="detail-item" key={detail.label}>
            <span className="detail-label">{detail.label}</span>
            <span className="detail-value">{detail.value}</span>
          </div>
        ))}
        <a className="strip-link" href="#rsvp">Plan to join <span aria-hidden="true">↗</span></a>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-kicker"><span>01</span> ABOUT THE POP-UP</div>
        <div className="about-content">
          <h2 id="about-title">A closer look at<br />what&apos;s <em>next.</em></h2>
          <div className="about-copy">
            <p>
              Bandoo brings South Korea&apos;s new and trending brands to LA residents. Come explore a new kind of style, discover brands, shop clothing, and enjoy the party.
            </p>
            <p className="about-note">Made for Los Angeles residents.</p>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="experience-heading">
          <div className="section-kicker"><span>02</span> THE EXPERIENCE</div>
          <h2 id="experience-title">See it. Wear it.<br /><em>Be there.</em></h2>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-row" key={experience.number}>
              <span className="experience-number">{experience.number}</span>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
              <span className="experience-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="rsvp-section" id="rsvp" aria-labelledby="rsvp-title">
        <div className="rsvp-topline"><span>BANDOO POP-UP</span><span>LOS ANGELES · MARCH 20, 2028</span></div>
        <h2 id="rsvp-title">We&apos;ll see<br />you <em>there.</em></h2>
        <div className="rsvp-bottomline">
          <p>RSVP details will be posted later.</p>
          <span className="rsvp-status"><span className="status-dot" /> RSVP COMING SOON</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">BANDOO<span className="wordmark-dot">.</span></a>
        <span>Fashion, brought closer.</span>
        <a href="#top" className="back-to-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default BandooEventPage
