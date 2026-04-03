import { useEffect, useState } from 'react'
import './App.css'

const onboardingSlides = [
  {
    id: 0,
    title: 'The best car in your hands with Ryde',
    description:
      'Discover the convenience of finding your perfect ride with our Ryde App.',
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=900&q=80',
    cta: 'Next',
  },
  {
    id: 1,
    title: 'Track every turn with real-time pickup updates',
    description:
      'See your driver move toward you, check ETAs instantly, and ride with more confidence.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    cta: 'Track ride',
  },
  {
    id: 2,
    title: 'Premium comfort, everyday pricing with Ryde',
    description:
      'Choose the ride that matches your day, from quick solo trips to polished client pickups.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
    cta: 'Book now',
  },
]

const rideOptions = [
  { id: 'solo', name: 'Ryde Go', eta: '4 min', price: '$18', seats: 4 },
  { id: 'comfort', name: 'Ryde Comfort', eta: '6 min', price: '$26', seats: 4 },
  { id: 'xl', name: 'Ryde XL', eta: '8 min', price: '$34', seats: 6 },
]

const trustStats = [
  { value: '4.9', label: 'Average rating' },
  { value: '2 min', label: 'Fast booking flow' },
  { value: '24/7', label: 'Ride availability' },
]

const showcaseCards = [
  {
    title: 'Live driver tracking',
    text: 'A moving status panel creates the feeling of a working product, not a flat mockup.',
  },
  {
    title: 'Instant fare clarity',
    text: 'Estimate pricing, pickup time, and ride type before a rider commits.',
  },
  {
    title: 'Client-ready visual polish',
    text: 'Layered cards, soft motion, and clear hierarchy make the concept presentation-grade.',
  },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeRide, setActiveRide] = useState(rideOptions[1].id)
  const [pickup, setPickup] = useState('Westlands Mall')
  const [destination, setDestination] = useState('Upper Hill Towers')

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % onboardingSlides.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [])

  const selectedRide =
    rideOptions.find((ride) => ride.id === activeRide) ?? rideOptions[1]
  const activeSlideData = onboardingSlides[activeSlide]

  const bookingSummary = `${pickup} to ${destination}`

  return (
    <main className="page-shell">
      <div className="page-glow page-glow-left" aria-hidden="true" />
      <div className="page-glow page-glow-right" aria-hidden="true" />

      <section className="hero-section" id="hero">
        <header className="topbar">
          <a className="brand" href="#hero" aria-label="Ryde home">
            <span className="brand-name">Ryde</span>
          </a>

          <nav className="topnav" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#experience">Experience</a>
            <a href="#download" className="nav-cta">
              Request demo
            </a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Everyday rides with premium simplicity</p>
            <h1>
              Your ride, your way. Let&apos;s get started with <span>Ryde</span>.
            </h1>
            <p className="hero-text">
              Enter your destination, sit back, and let us take care of the rest.
              Ryde feels fast, premium, and client-ready on every screen.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#download">
                Get started
              </a>
              <a className="ghost-button" href="#experience">
                See live preview
              </a>
            </div>

            <div className="stats-row">
              {trustStats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>

            <section className="booking-card" aria-label="Interactive booking form">
              <div className="booking-header">
                <div>
                  <p className="booking-kicker">Ride estimator</p>
                  <h2>Show clients a flow that feels real</h2>
                </div>
                <span className="status-pill">Drivers nearby</span>
              </div>

              <div className="booking-fields">
                <label className="field">
                  <span>Pickup</span>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(event) => setPickup(event.target.value)}
                    placeholder="Enter pickup point"
                  />
                </label>
                <label className="field">
                  <span>Destination</span>
                  <input
                    type="text"
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                    placeholder="Where are you going?"
                  />
                </label>
              </div>

              <div className="ride-tabs" role="tablist" aria-label="Ride types">
                {rideOptions.map((ride) => (
                  <button
                    key={ride.id}
                    type="button"
                    className={ride.id === activeRide ? 'ride-tab is-active' : 'ride-tab'}
                    onClick={() => setActiveRide(ride.id)}
                  >
                    <span>{ride.name}</span>
                    <small>{ride.price}</small>
                  </button>
                ))}
              </div>

              <div className="booking-summary">
                <div>
                  <p className="summary-route">{bookingSummary}</p>
                  <p className="summary-meta">
                    {selectedRide.eta} pickup • {selectedRide.seats} seats
                  </p>
                </div>
                <strong>{selectedRide.price}</strong>
              </div>
            </section>
          </div>

          <div className="hero-visual">
            <div className="background-fragment fragment-left" aria-hidden="true">
              <div className="fragment-title">Create account</div>
              <div className="fragment-field" />
              <div className="fragment-field" />
              <div className="fragment-google">Log In with Google</div>
              <div className="fragment-link">
                Don&apos;t have an account? <span>Log in</span>
              </div>
            </div>

            <div className="background-fragment fragment-right" aria-hidden="true">
              <div className="fragment-bar" />
              <div className="fragment-field" />
              <div className="fragment-field" />
              <div className="fragment-small" />
            </div>

            <article className="driver-card">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
                alt="Jane Cooper"
              />
              <div className="driver-details">
                <div className="driver-row">
                  <strong>Jane Cooper</strong>
                  <span className="driver-price">$60</span>
                </div>
                <div className="driver-meta">
                  <span className="driver-rating">★ 4.9</span>
                  <span>10 min</span>
                  <span>4 Seats</span>
                </div>
              </div>
            </article>

            <article className="live-badge">
              <span className="pulse-dot" aria-hidden="true" />
              Driver arriving in {selectedRide.eta}
            </article>

            <div className="phone-wrap">
              <article className="phone-frame">
                <div className="phone-notch" aria-hidden="true" />
                <div className="phone-screen">
                  <div className="phone-card">
                    <div className="map-panel" aria-hidden="true">
                      <span className="route-line route-line-one" />
                      <span className="route-line route-line-two" />
                      <span className="route-pin route-pin-start" />
                      <span className="route-pin route-pin-end" />
                      <span className="route-car" />
                    </div>

                    <div className="car-panel">
                      <img
                        src={activeSlideData.image}
                        alt="Ryde featured vehicle"
                      />
                    </div>

                    <div className="onboarding-copy">
                      <div className="mini-tag">Live onboarding</div>
                      <h2>
                        {activeSlideData.title.split('Ryde')[0]}
                        <span>{activeSlideData.title.includes('Ryde') ? 'Ryde' : ''}</span>
                        {activeSlideData.title.includes('Ryde')
                          ? activeSlideData.title.split('Ryde')[1]
                          : ''}
                      </h2>
                      <p>{activeSlideData.description}</p>

                      <div className="pagination" aria-label="Carousel position">
                        {onboardingSlides.map((slide, index) => (
                          <button
                            key={slide.id}
                            type="button"
                            className={index === activeSlide ? 'is-active' : ''}
                            aria-label={`Show slide ${index + 1}`}
                            onClick={() => setActiveSlide(index)}
                          />
                        ))}
                      </div>

                      <button type="button" className="secondary-button">
                        {activeSlideData.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-strip" aria-label="Product highlights">
        <div className="showcase-marquee">
          <span>Real-time map</span>
          <span>Premium onboarding</span>
          <span>Dynamic fare estimator</span>
          <span>Client-ready presentation</span>
          <span>Mobile-first booking flow</span>
        </div>
      </section>

      <section className="info-section" id="features">
        <div className="info-inner">
          <h2>
            On-Demand Rides Made Simple with a Powerful, User-Friendly App called{' '}
            <span>Ryde</span>
          </h2>
          <p>
            Book faster, track your driver in real time, and move through your day
            with less friction. Ryde combines clean design, reliable ride options,
            and a smooth onboarding flow so getting from point A to point B feels
            effortless.
          </p>

          <div className="feature-grid" id="experience">
            {showcaseCards.map((card) => (
              <article key={card.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="download">
        <div className="cta-card">
          <div>
            <p className="booking-kicker">Client-ready finale</p>
            <h2>
              Present <span>Ryde</span> like a product that already belongs in market.
            </h2>
            <p>
              Responsive layout, interactive UI states, and polished motion make this
              suitable for demos, pitches, and stakeholder reviews.
            </p>
          </div>
          <div className="cta-actions">
            <a className="primary-button" href="#hero">
              Back to top
            </a>
            <button type="button" className="ghost-button">
              Request product walk-through
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
