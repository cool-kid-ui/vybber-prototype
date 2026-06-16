'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const links = [
    {href: '/about', label: 'About'},
    {href: '/terms', label: 'Terms'},
    {href: '/docs', label: 'Docs'},
    {href: '/privacy', label: 'Privacy'}
  ]

  const navPadding = isMobile ? '12.8px 24px' : '16px 24px'

  return (
    <nav style={{
      position:'fixed',
      top:0,
      left:0,
      width:'100%',
      background:'#0a0a0a', // FORCED black. Ignores phone light/dark mode
      borderBottom:'1px solid #222',
      zIndex:1000
    }}>
      <div style={{
        maxWidth:'1200px',
        margin:'0 auto',
        padding: navPadding,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        {/* Gradient VYBBER logo */}
        <Link href="/" style={{
          fontSize:'24px',
          fontWeight:'bold',
          textDecoration:'none',
          background:'linear-gradient(90deg, #ff0080, #ff8c00, #8a2be2)',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent',
          backgroundClip:'text'
        }}>VYBBER</Link>
        
        {/* Desktop nav */}
        <div style={{display: isMobile ? 'none' : 'flex', gap:'32px'}}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{color:'#ededed',opacity:0.8,textDecoration:'none',fontSize:'16px'}}>{l.label}</Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{background:'none',border:'none',cursor:'pointer',padding:6}}>
            <div style={{width:'22px',height:'2px',background:'#ededed',margin:'4px 0',transition:'0.3s',transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none'}}></div>
            <div style={{width:'22px',height:'2px',background:'#ededed',margin:'4px 0',transition:'0.3s',opacity: open ? 0 : 1}}></div>
            <div style={{width:'22px',height:'2px',background:'#ededed',margin:'4px 0',transition:'0.3s',transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none'}}></div>
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && (
        <div style={{
          maxHeight: open ? '400px' : '0',
          overflow:'hidden',
          transition:'max-height 0.4s ease',
          background:'#0a0a0a', // Also forced black
          borderTop:'1px solid #222'
        }}>
          <div style={{padding:'16px 24px',display:'flex',flexDirection:'column',gap:'18px'}}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{color:'#ededed',opacity:0.9,fontSize:'17px',textDecoration:'none'}}>{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}