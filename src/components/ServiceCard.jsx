import { useState } from 'react'

export default function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#5C7D2D' : '#f9f9f9',
        border: `2px solid ${hovered ? '#5C7D2D' : '#e8f0e0'}`,
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        cursor: 'default',
        boxShadow: hovered
          ? '0 20px 40px rgba(92,125,45,0.25)'
          : '0 2px 15px rgba(0,0,0,0.05)',
      }}
    >

      <div style={{
        position: 'relative',
        height: '200px',
        overflow: 'hidden',
        background: '#e8f0e0',
      }}>
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            style={{
              width: '100%',
              height: '200%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #e8f0e0, #c8ddb0)',
          }}>
            {service.icon}
          </div>
        )}

        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          background: '#5C7D2D', color: '#fff',
          padding: '0.25rem 0.75rem', borderRadius: '20px',
          fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          {service.category}
        </div>

        <div style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          background: 'rgba(0,0,0,0.55)', color: '#fff',
          padding: '0.25rem 0.75rem', borderRadius: '20px',
          fontSize: '0.7rem', fontWeight: 600,
        }}>
          ⏱ {service.duration}
        </div>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
          padding: '2rem 1rem 0.75rem',
        }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 700,
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}>
            {service.name}
          </p>
        </div>

      </div>

      <div style={{ padding: '1.5rem' }}>
        
        <p style={{
          color: hovered ? 'rgba(255,255,255,0.8)' : 'rgba(26,46,13,0.6)',
          fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.25rem',
          transition: 'color 0.3s',
        }}>
          {service.desc}
        </p>

        <div style={{
          height: '1px',
          background: hovered ? 'rgba(255,255,255,0.2)' : '#e8f0e0',
          marginBottom: '1.25rem',
          transition: 'background 0.3s',
        }} />

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{
            color: hovered ? '#FFD13B' : '#5C7D2D',
            fontWeight: 700, fontSize: '1.2rem',
            transition: 'color 0.3s',
          }}>
            {service.price}
          </span>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: hovered ? '#fff' : 'transparent',
              color: hovered ? '#5C7D2D' : '#5C7D2D',
              border: '2px solid',
              borderColor: hovered ? '#fff' : '#5C7D2D',
              padding: '0.4rem 1.2rem',
              borderRadius: '20px', fontSize: '0.8rem',
              fontWeight: 700, cursor: 'pointer',
              fontFamily: 'inherit', transition: 'all 0.3s',
              letterSpacing: '0.05em',
            }}
          >
            Book →
          </button>
        </div>

      </div>
    </div>
  )
}