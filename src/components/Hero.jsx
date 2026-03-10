const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem',
      background: 'linear-gradient(160deg, #0d1a06 0%, #1a2e0d 50%, #0d1a06 100%)',
    }}>

      <div style={{
        position: 'absolute',
        width: '500px', height: '500px', borderRadius: '50%',
        border: '1px solid rgba(92,125,45,0.15)',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '750px', height: '750px', borderRadius: '50%',
        border: '1px solid rgba(92,125,45,0.08)',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(92,125,45,0.12) 0%, transparent 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>

        <p className="fade-in" style={{
          color: '#c9a84c',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          fontSize: '0.8rem',
          marginBottom: '1.5rem',
          animationDelay: '0.2s',
        }}>
          ✦ Nail Technician, Hair Specialist ✦ & Makeup Artist ✦
        </p>

        <h1 className="fade-in" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#f0e6d3',
          marginBottom: '1.5rem',
          animationDelay: '0.4s',
        }}>
          Beauty That
          <br />
          <span style={{ color: '#8aaf45', fontStyle: 'italic' }}>
            Speaks for You
          </span>
        </h1>

        <p className="fade-in" style={{
          color: 'rgba(240,230,211,0.7)',
          fontSize: '1.1rem',
          lineHeight: 1.8,
          marginBottom: '2.5rem',
          animationDelay: '0.6s',
        }}>
          Premium nail sets & protective hairstyles crafted with care.
          <br />
          Book your transformation today.
        </p>

        <div className="fade-in" style={{
          display: 'flex', gap: '1rem',
          justifyContent: 'center', flexWrap: 'wrap',
          animationDelay: '0.8s',
        }}>
          <button
            onClick={() => scrollTo('contact')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 30px rgba(92,125,45,0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
            style={{
              background: '#5C7D2D',
              color: '#fff', border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '0.9rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              cursor: 'pointer', borderRadius: '30px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontFamily: 'inherit',
              boxShadow: '0 4px 20px rgba(92,125,45,0.3)',
            }}
          >
            Book Now
          </button>

          <button
            onClick={() => scrollTo('services')}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(92,125,45,0.1)'
              e.target.style.color = '#8aaf45'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#c9a84c'
            }}
            style={{
              background: 'transparent', color: '#c9a84c',
              border: '1px solid #c9a84c',
              padding: '1rem 2.5rem',
              fontSize: '0.9rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              cursor: 'pointer', borderRadius: '30px',
              transition: 'all 0.2s', fontFamily: 'inherit',
            }}
          >
            View Services
          </button>
        </div>
      </div>

      <div className="bounce" style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(92,125,45,0.6)', fontSize: '1.5rem',
      }}>
        ↓
      </div>
    </section>
  )
}