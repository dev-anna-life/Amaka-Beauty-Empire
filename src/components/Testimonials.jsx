import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '../data/data'

export default function Testimonials() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const active = TESTIMONIALS[current]

    return (
        <section id="testimonials" style={{
            padding: '6rem 2rem', background: '#333333', textAlign: 'center',
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                <p style={{
                    color: '#D4AF37', letterSpacing: '0.4em',
                    textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.75rem',
                }}>
                    Client Love
                </p>

                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    color: '#f0e6d3', marginBottom: '4rem',
                }}>
                    What They Say
                </h2>

                <div style={{
                    background: 'rgba(212,175,55,0.04)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    borderRadius: '4px', padding: '3rem 2.5rem',
                    marginBottom: '2rem', position: 'relative',
                }}>

                    <div style={{
                        position: 'absolute', top: '1rem', left: '2rem',
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '5rem', color: 'rgba(212,175,55,0.1)',
                        lineHeight: 1, pointerEvents: 'none',
                    }}>
                        "
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        {Array(active.stars).fill(0).map((_, i) => (
                            <span key={i} style={{ color: '#D4AF37', fontSize: '1.2rem' }}>★</span>
                        ))}
                    </div>

                    <p style={{
                        color: 'rgba(240,230,211,0.85)', fontSize: '1.05rem',
                        lineHeight: 1.9, fontStyle: 'italic', marginBottom: '2rem',
                    }}>
                        "{active.text}"
                    </p>

                    <p style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.95rem' }}>
                        {active.name}
                    </p>
                    <p style={{
                        color: 'rgba(240,230,211,0.4)', fontSize: '0.8rem',
                        letterSpacing: '0.1em', marginTop: '0.25rem',
                    }}>
                        {active.service}
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            style={{
                                width: i === current ? '24px' : '8px',
                                height: '8px', borderRadius: '4px',
                                background: i === current ? '#D4AF37' : 'rgba(212,175,55,0.3)',
                                border: 'none', cursor: 'pointer',
                                transition: 'all 0.3s ease', padding: 0,
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
