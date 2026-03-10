import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa'

const LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/her_instagram_username',
    icon: <FaInstagram />,
    color: '#E1306C',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348100000000',
    icon: <FaWhatsapp />,
    color: '#25D366',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@her_tiktok_username',
    icon: <FaTiktok />,
    color: '#000000',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/her_facebook_username',
    icon: <FaFacebookF />,
    color: '#1877F2',
  },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#080510',
      padding: '3rem 2rem',
      borderTop: '3px solid #5C7D2D',
      textAlign: 'center',
    }}>

      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.3rem', color: '#ffff',
        marginBottom: '0.5rem', letterSpacing: '0.05em',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '0.6rem',
        }}>
          <img
            src="/images/Logo.png"
            alt="logo"
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
          />
          AmakaBeautyEmpire
        </div>
      </div>

      <p style={{
        color: 'rgba(240,230,211,0.4)',
        fontSize: '0.85rem', marginBottom: '2rem',
      }}>
        Nails · Hair · Makeup
      </p>

      <div style={{
        display: 'flex', justifyContent: 'center',
        gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap',
      }}>
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            title={link.label}
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '0.4rem',
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.querySelector('.icon-circle').style.background = link.color
              e.currentTarget.querySelector('.icon-circle').style.borderColor = link.color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.querySelector('.icon-circle').style.background = 'transparent'
              e.currentTarget.querySelector('.icon-circle').style.borderColor = 'rgba(240,230,211,0.2)'
            }}
          >
            <div
              className="icon-circle"
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'transparent',
                border: '1px solid rgba(240,230,211,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', color: '#f0e6d3',
                transition: 'all 0.2s',
              }}
            >
              {link.icon}
            </div>
            <span style={{
              color: 'rgba(240,230,211,0.4)',
              fontSize: '0.7rem', letterSpacing: '0.05em',
            }}>
              {link.label}
            </span>
          </a>
        ))}
      </div>

      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '0.4rem',
        color: 'rgba(240,230,211,0.3)',
        fontSize: '0.8rem', marginBottom: '1.5rem',
      }}>
        <FaMapMarkerAlt style={{ color: '#5C7D2D' }} />
        Nigeria
      </div>

      <div style={{
        width: '60px', height: '1px',
        background: 'rgba(92,125,45,0.5)',
        margin: '0 auto 1.5rem',
      }} />

      <p style={{
        color: 'rgba(240,230,211,0.3)',
        fontSize: '0.75rem', marginBottom: '0.4rem',
      }}>
        © {new Date().getFullYear()} GlowByAmaka. All rights reserved.
      </p>

      <p style={{ color: 'rgba(240,230,211,0.2)', fontSize: '0.7rem' }}>
        Designed & Built by{' '}
        <span style={{
          color: '#c9a84c', opacity: 0.8,
          fontWeight: 600, letterSpacing: '0.05em',
        }}>
          Dev Anna
        </span>{' '}
        💛
      </p>

    </footer>
  )
}