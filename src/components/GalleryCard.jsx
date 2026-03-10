import { useState } from 'react'

export default function GalleryCard({ item }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        aspectRatio: '1',
        border: `1px solid ${hovered ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.15)'}`,
        borderRadius: '4px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, border-color 0.3s',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      <img
        src={item.image}
        alt={item.label}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />

      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: 'rgba(15,10,20,0.9)',
        padding: '1rem',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#D4AF37', fontSize: '0.85rem',
          fontWeight: 600, letterSpacing: '0.05em',
        }}>
          {item.label}
        </p>
      </div>
    </div>
  )
}