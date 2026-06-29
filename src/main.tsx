import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CalendarCheck, Gauge, MapPin, Phone, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import './styles.css';

const services = [
  { title: 'Diagnostics', detail: 'Factory-grade scans with plain-English repair notes.', icon: Gauge },
  { title: 'Repair bays', detail: 'Brake, steering, suspension, and drivability work.', icon: Wrench },
  { title: 'Protection', detail: 'Warranty-minded service records for every visit.', icon: ShieldCheck },
];

const reviews = [
  'They found the fault in one visit after two shops missed it.',
  'Clean handoff, exact estimate, and the car was ready before school pickup.',
  'No pressure. Just the repairs I needed and photos of the work.',
];

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="autoDEAL home">
            <span className="brand-mark">aD</span>
            autoDEAL
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#book">Book</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Independent auto repair, booked without friction</p>
            <h1 id="hero-title">Precise shop work for drivers who need the car back today.</h1>
            <p className="lede">
              autoDEAL handles diagnostics, maintenance, and repair with documented estimates,
              steady updates, and a front desk that respects your schedule.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#book">
                Schedule service <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="tel:+1555014127">
                <Phone size={18} aria-hidden="true" /> (555) 014-127
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Today in the shop">
            <img
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80"
              alt="Mechanic inspecting a vehicle in an auto repair bay"
            />
            <div className="status-card">
              <span>Today</span>
              <strong>7 open bay windows</strong>
              <small>Most diagnostics returned in 74 minutes.</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="service-band" id="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">What the shop does best</p>
          <h2 id="services-title">Repairs are organized around proof, timing, and clean handoffs.</h2>
        </div>
        <div className="service-grid">
          {services.map(({ title, detail, icon: Icon }) => (
            <article className="service-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof" id="reviews" aria-labelledby="reviews-title">
        <div>
          <p className="eyebrow">Driver notes</p>
          <h2 id="reviews-title">People come back because the process is predictable.</h2>
        </div>
        <div className="review-stack">
          {reviews.map((review) => (
            <blockquote key={review}>{review}</blockquote>
          ))}
        </div>
      </section>

      <section className="booking" id="book" aria-labelledby="booking-title">
        <div className="booking-copy">
          <Sparkles size={26} aria-hidden="true" />
          <h2 id="booking-title">Hold a bay for your next service.</h2>
          <p>Share the vehicle, symptoms, and a time window. The shop confirms before work starts.</p>
          <div className="location-line">
            <MapPin size={18} aria-hidden="true" />
            2148 Hollis Ave, open weekdays 7:30-6:00
          </div>
        </div>
        <form className="booking-form" name="service-request">
          <label>
            Name
            <input type="text" name="name" placeholder="Mara Benton" required />
          </label>
          <label>
            Vehicle
            <input type="text" name="vehicle" placeholder="2019 Subaru Outback" required />
          </label>
          <label>
            Service need
            <textarea name="message" placeholder="Brake vibration above 40 mph" rows={4} required />
          </label>
          <button type="submit">
            <CalendarCheck size={18} aria-hidden="true" /> Request appointment
          </button>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
