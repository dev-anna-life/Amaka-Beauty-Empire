import { useState } from 'react'
import { SERVICES } from '../data/data'
import ServiceCard from './ServiceCard'

const FILTERS = [
  { value: 'all',   label: 'All Services' },
  { value: 'nails', label: '💅 Nails' },
  { value: 'hair',  label: '💇‍♀️ Hair' },
  { value: 'makeup', label: '💄 Makeup' },
]

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredServices = SERVICES.filter(
    (service) => activeFilter === 'all' || service.category === activeFilter
  )

  return (
    <section id="services" style={{
      padding: '6rem 2rem',
      background: '#ffffffd0',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          color: '#5C7D2D', letterSpacing: '0.4em',
          textTransform: 'uppercase', fontSize: '0.75rem',
          textAlign: 'center', marginBottom: '0.75rem',
        }}>
          What We Offer
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#1a2e0d', textAlign: 'center', marginBottom: '0.75rem',
        }}>
          Our Services
        </h2>

        <p style={{
          color: 'rgba(26,46,13,0.5)', textAlign: 'center',
          fontSize: '0.95rem', marginBottom: '3rem',
        }}>
          Nails, hair & make-up done with love, precision and premium products.
        </p>

        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap',
        }}>
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.value
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                style={{
                  padding: '0.6rem 2rem',
                  border: '2px solid',
                  borderColor: isActive ? '#5C7D2D' : 'rgba(92,125,45,0.3)',
                  background: isActive ? '#5C7D2D' : 'transparent',
                  color: isActive ? '#fff' : '#5C7D2D',
                  fontSize: '0.85rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  borderRadius: '30px', transition: 'all 0.2s',
                  fontFamily: 'inherit', fontWeight: 700,
                  boxShadow: isActive ? '0 4px 20px rgba(92,125,45,0.3)' : 'none',
                }}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  )
}