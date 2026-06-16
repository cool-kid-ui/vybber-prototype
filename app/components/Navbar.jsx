'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const links = [
    { href: '/about', label: 'About' },
    { href: '/terms', label: 'Terms' },
    { href: '/docs', label: 'Docs' },
    { href: '/privacy', label: 'Privacy' }
  ]

  if (!mounted) return <div style={{ height: '88px' }} />

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1200px',
          background: 'rgba(255, 255, 255, 0.05)', // <- 5% white glass, barely there
          backdropFilter: 'blur(16px) saturate(180%)', // <- blur to lift it
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)', // <- 12% border, soft not black
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)', // <- soft shadow, no hard edge
          zIndex: 1000,
          padding: '14px 24px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link
            href="/"
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              textDecoration: 'none',
              background: 'linear-gradient(90deg, #ff0080, #ff8c00, #8a2be2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 15px rgba(255, 0, 128, 0.8))'
            }}
          >
            VYBBER
          </Link>

          {isDesktop ? (
            <div style={{ display: 'flex', gap: '32px' }}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.4)',
                    transition: '0.3s'
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ) : (
            <button
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
            >
              <div style={{ width: '22px', height: '2px', background: '#fff', margin: '4px 0', transition: '0.3s', transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.8)' }} />
              <div style={{ width: '22px', height: '2px', background: '#fff', margin: '4px 0', transition: '0.3s', opacity: open ? 0 : 1, boxShadow: '0 2px 10px rgba(0,0,0,0.8)' }} />
              <div style={{ width: '22px', height: '2px', background: '#fff', margin: '4px 0', transition: '0.3s', transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.8)' }} />
            </button>
          )}
        </div>

        {!isDesktop && (
          <div style={{ maxHeight: open ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease', marginTop: open ? '16px' : '0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: '#fff', fontSize: '17px', textDecoration: 'none', fontWeight: '600', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div style={{ height: '88px' }} />
    </>
  )
}