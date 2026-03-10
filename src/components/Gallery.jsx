import { useState } from 'react'
import { GALLERY } from '../data/data'
import GalleryCard from './GalleryCard'

const FILTERS = [
  { value: 'all',   label: 'All Work' },
  { value: 'nails', label: '💅 Nails' },
  { value: 'hair',  label: '🌿 Hair' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredItems = GALLERY.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  )

  return (
    <section id="gallery" style={{
      padding: '6rem 2rem',
      background: '#15270A',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          color: '#ffff', letterSpacing: '0.4em',
          textTransform: 'uppercase', fontSize: '0.75rem',
          textAlign: 'center', marginBottom: '0.75rem',
        }}>
          Our Work
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#ffff', textAlign: 'center', marginBottom: '3rem',
        }}>
          The Portfolio
        </h2>

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
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1rem',
        }}>
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}