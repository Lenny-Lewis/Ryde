import { useEffect, useState } from 'react'
import './App.css'

const onboardingSlides = [
  {
    id: 0,
    title: 'The best car in your hands with Ryde',
    description:
      'Move from signup to first ride in minutes with a product designed for daily commuters and teams.',
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=900&q=80',
    cta: 'Start onboarding',
  },
  {
    id: 1,
    title: 'Track every turn with real-time pickup updates',
    description:
      'See your driver live, review arrival windows, and reduce rider uncertainty before pickup.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    cta: 'Track a live trip',
  },
  {
    id: 2,
    title: 'Premium comfort, everyday pricing with Ryde',
    description:
      'Offer solo, comfort, and team-ready rides without losing clarity around price and timing.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
    cta: 'Compare ride plans',
  },
]

const rideOptions = [
  {
    id: 'go',
    name: 'Ryde Go',
    eta: '4 min',
    price: '$18',
    seats: 4,
    note: 'Balanced for daily urban trips.',
  },
  {
    id: 'comfort',
    name: 'Ryde Comfort',
    eta: '6 min',
    price: '$26',
    seats: 4,
    note: 'More space for business and airport runs.',
  },
  {
    id: 'xl',
    name: 'Ryde XL',
    eta: '8 min',
    price: '$34',
    seats: 6,
    note: 'Best for groups and family transfers.',
  },
]

const trustStats = [
  { value: '18k+', label: 'Prototype waitlist signups' },
  { value: '96%', label: 'Booking completion target' },
  { value: '12 cities', label: 'Launch expansion roadmap' },
]

const showcaseCards = [
  {
    title: 'Operations that stay visible',
    text: 'Dispatch states, fare clarity, and ride status keep riders and operators aligned from booking to dropoff.',
  },
  {
    title: 'Built for rider trust',
    text: 'Clear ETAs, vehicle context, and account flows reduce uncertainty during the most important moments.',
  },
  {
    title: 'Presentation-ready product language',
    text: 'The UI now speaks like a service preparing for market, not like a one-off mockup.',
  },
]

const productMilestones = [
  {
    title: 'About Ryde',
    text: 'Ryde is a mobility product focused on dependable city rides, business travel, and transparent booking experiences.',
  },
  {
    title: 'Where the prototype is headed',
    text: 'This build is designed to help validate rider demand, operator workflows, and launch messaging before full release.',
  },
  {
    title: 'What teams can review today',
    text: 'Booking flow, ride selection, onboarding states, and product calls-to-action are already modeled as interactive behaviors.',
  },
]

const actionMessages = {
  onboarding: 'Onboarding preview opened. Flow is ready for stakeholder review.',
  tracking: 'Live trip tracking preview loaded for the current route.',
  plans: 'Ride plan comparison is ready. Review Go, Comfort, and XL options below.',
  walkthrough: 'Product walk-through request captured. Team follow-up can plug in here.',
  estimate: 'Fare estimate refreshed for this route.',
  download: 'app coming soon',
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeRide, setActiveRide] = useState(rideOptions[1].id)
  const [pickup, setPickup] = useState('Westlands Mall')
  const [destination, setDestination] = useState('Upper Hill Towers')
  const [announcement, setAnnouncement] = useState('')

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

  const updateAnnouncement = (message) => {
    setAnnouncement(message)
  }

  const handleEstimate = () => {
    updateAnnouncement(actionMessages.estimate)
  }

  const handleSlideAction = () => {
    if (activeSlideData.id === 0) {
      updateAnnouncement(actionMessages.onboarding)
      return
    }

    if (activeSlideData.id === 1) {
      setPickup('Sarit Centre')
      setDestination('Gigiri Business Park')
      updateAnnouncement(actionMessages.tracking)
      return
    }

    setActiveRide('xl')
    updateAnnouncement(actionMessages.plans)
  }

  const handleDownload = () => {
    updateAnnouncement(actionMessages.download)
  }

  return (
    <main className="page-shell">
      <div className="page-glow page-glow-left" aria-hidden="true" />
      <div className="page-glow page-glow-right" aria-hidden="true" />

      <section className="hero-section" id="hero">
        <header className="topbar">
          <a className="brand" href="#hero" aria-label="Ryde home">
            <span className="brand-mark">R</span>
            <span className="brand-name">Ryde</span>
          </a>

          <nav className="topnav" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <button type="button" className="nav-cta" onClick={handleDownload}>
              Download
            </button>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Urban mobility designed to launch well</p>
            <h1>
              Build rider trust before the first trip with <span>Ryde</span>.
            </h1>
            <p className="hero-text">
              Ryde is positioned as a real booking product with fast trip setup,
              transparent pricing, and an interface that supports launch
              conversations, not just static demos.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-button" onClick={handleDownload}>
                Download app
              </button>
              <a className="ghost-button" href="#about">
                Explore product
              </a>
            </div>

            {announcement ? (
              <div className="inline-status" role="status" aria-live="polite">
                {announcement}
              </div>
            ) : null}

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
                  <h2>Configure routes with believable product behavior</h2>
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
                    onClick={() => {
                      setActiveRide(ride.id)
                      updateAnnouncement(`${ride.name} selected. ${ride.note}`)
                    }}
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

              <div className="booking-actions">
                <button type="button" className="primary-button" onClick={handleEstimate}>
                  Refresh estimate
                </button>
                <button
                  type="button"
                  className="ghost-button ghost-button-solid"
                  onClick={() =>
                    updateAnnouncement(
                      `Route saved for launch review: ${bookingSummary}.`,
                    )
                  }
                >
                  Save route
                </button>
              </div>
            </section>
          </div>

          <div className="hero-visual">
            <div className="background-fragment fragment-left" aria-hidden="true">
              <div className="fragment-title">Create account</div>
              <div className="fragment-field" />
              <div className="fragment-field" />
              <div className="fragment-google">Continue with Google</div>
              <div className="fragment-link">
                New riders onboard in under <span>2 minutes</span>
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
                      <img src={activeSlideData.image} alt="Ryde featured vehicle" />
                    </div>

                    <div className="onboarding-copy">
                      <div className="mini-tag">Live onboarding</div>
                      <h2>{activeSlideData.title}</h2>
                      <p>{activeSlideData.description}</p>

                      <div className="pagination" aria-label="Carousel position">
                        {onboardingSlides.map((slide, index) => (
                          <button
                            key={slide.id}
                            type="button"
                            className={index === activeSlide ? 'is-active' : ''}
                            aria-label={`Show slide ${index + 1}`}
                            onClick={() => {
                              setActiveSlide(index)
                              updateAnnouncement(
                                `Preview moved to slide ${index + 1}: ${slide.title}`,
                              )
                            }}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        className="secondary-button"
                        onClick={handleSlideAction}
                      >
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
          <span>Transparent fares</span>
          <span>Route saving</span>
          <span>Live trip visibility</span>
          <span>Waitlist messaging</span>
          <span>Operational confidence</span>
        </div>
      </section>

      <section className="info-section" id="features">
        <div className="info-inner">
          <h2>
            On-demand rides made practical, scalable, and launch-ready with{' '}
            <span>Ryde</span>
          </h2>
          <p>
            The product now presents clearer user value: booking speed, rider
            certainty, and a polished interface that can support launch planning,
            stakeholder walkthroughs, and early customer validation.
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

      <section className="about-section" id="about">
        <div className="info-inner about-layout">
          <div>
            <p className="booking-kicker">About the product</p>
            <h2>
              <span>Ryde</span> is being shaped as a real mobility service, not a
              throwaway concept.
            </h2>
            <p>
              This prototype communicates market intent clearly: reliable urban
              transport, rider-first design, and launch messaging that supports
              decision-making across product, operations, and business teams.
            </p>
          </div>

          <div className="about-grid">
            {productMilestones.map((item) => (
              <article key={item.title} className="about-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="download">
        <div className="cta-card">
          <div>
            <p className="booking-kicker">Release messaging</p>
            <h2>
              Let users signal interest while <span>Ryde</span> moves toward launch.
            </h2>
            <p>
              Download intent is captured here with clear messaging, while the
              rest of the interface continues to behave like a working product
              prototype.
            </p>
          </div>
          <div className="cta-actions">
            <button type="button" className="primary-button" onClick={handleDownload}>
              Download app
            </button>
            <button
              type="button"
              className="ghost-button"
              onClick={() => updateAnnouncement(actionMessages.walkthrough)}
            >
              Request product walk-through
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
