import { useState } from 'react'
import { SERVICES } from '../data/data'

const inputStyle = {
  width: '100%', padding: '0.9rem 1rem',
  background: 'rgba(192, 204, 196, 0.2)',
  border: '1px solid #c0ccc4',
  borderRadius: '2px', color: '#333333',
  fontSize: '0.95rem', fontFamily: 'inherit',
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s',
}

const labelStyle = {
  display: 'block', color: 'rgba(26,46,13,0.5)',
  fontSize: '0.85rem', letterSpacing: '0.1em',
  textTransform: 'uppercase', marginBottom: '0.4rem',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', date: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', service: '', date: '', message: '' })
    }, 2000)
  }

  return (
    <section id="contact" style={{ padding: '6rem 2rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '650px', margin: '0 auto' }}>

        <p style={{
          color: '#333333', letterSpacing: '0.4em',
          textTransform: 'uppercase', fontSize: '0.75rem',
          textAlign: 'center', marginBottom: '0.75rem',
        }}>
          Get In Touch
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#333333', textAlign: 'center', marginBottom: '1rem',
        }}>
          Book Your Session
        </h2>

        <p style={{
          color: 'rgba(26,46,13,0.5)', textAlign: 'center',
          fontSize: '0.9rem', marginBottom: '3rem',
        }}>
          Fill in the form and we'll confirm your appointment within 24 hours.
        </p>

        {submitted ? (
          <div style={{
            textAlign: 'center', padding: '4rem 2rem',
            background: '#5C7D2D', color: '#fff',
            border: '1px solid rgba(212,175,55,0.2)', borderRadius: '4px',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              color: '#fff', fontSize: '1.5rem', marginBottom: '1rem',
            }}>
              Booking Received!
            </h3>
            <p style={{ color: 'rgba(240,230,211,0.7)', lineHeight: 1.8 }}>
              Thank you, {formData.name}! We'll reach out to confirm your{' '}
              {formData.service || 'appointment'} within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <div className="form-grid" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1rem', marginBottom: '1rem',
            }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text" name="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Ada Okonkwo" style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  placeholder="080XXXXXXXX" style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Service *</label>
              <select
                name="service" required
                value={formData.service} onChange={handleChange}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                <option value="" disabled style={{ background: '#333333' }}>
                  Select a service...
                </option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name} style={{ background: '#5C7D2D' }}>
                    {s.icon} {s.name} — {s.price}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Preferred Date</label>
              <input
                type="date" name="date"
                value={formData.date} onChange={handleChange}
                style={{ ...inputStyle, colorScheme: 'dark' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={labelStyle}>Message / Inspo</label>
              <textarea
                name="message"
                value={formData.message} onChange={handleChange}
                placeholder="Describe what you want, or paste an Instagram link for inspo..."
                rows={4} style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              onMouseEnter={(e) => (e.target.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
              style={{
                width: '100%', padding: '1.1rem',
                background: '#5C7D2D', color: '#fff',
                border: 'none', fontSize: '0.95rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer', borderRadius: '2px',
                fontFamily: 'inherit', transition: 'opacity 0.2s',
              }}
            >
              Request Booking ✦
            </button>
          </form>
        )}

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{
            color: 'rgba(240,230,211,0.4)',
            fontSize: '0.85rem', marginBottom: '1rem',
          }}>
            Or reach us directly on
          </p>

          <a href="https://wa.me/2348134918971"
            target="_blank" rel="noreferrer"
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#5C7D2D', color: '#fff',
              padding: '0.75rem 2rem', borderRadius: '2px',
              textDecoration: 'none', fontWeight: 700,
              fontSize: '0.9rem', letterSpacing: '0.05em',
              transition: 'opacity 0.2s',
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
