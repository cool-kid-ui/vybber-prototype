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

  return (
    <nav style={{
      position:'fixed',
      top:0,
      left:0,
      width:'100%',
      background:'var(--background)', // Uses your globals.css dark mode color #0a0a0a
      borderBottom:'1px solid #222',
      zIndex:1000
    }}>
      <div style={{
        maxWidth:'1200px',
        margin:'0 auto',
        padding:'16px 24px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Link href="/" style={{fontSize:'24px',fontWeight:'bold',color:'var(--foreground)',textDecoration:'none'}}>VYBBER</Link>
        
        {/* Desktop nav - hidden on mobile */}
        <div style={{display: isMobile ? 'none' : 'flex', gap:'32px'}}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{color:'var(--foreground)',opacity:0.8,textDecoration:'none'}}>{l.label}</Link>
          ))}
        </div>

        {/* Mobile hamburger - hidden on desktop */}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{background:'none',border:'none',cursor:'pointer',padding:8}}>
            <div style={{width:'24px',height:'2px',background:'var(--foreground)',margin:'5px 0',transition:'0.3s',transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none'}}></div>
            <div style={{width:'24px',height:'2px',background:'var(--foreground)',margin:'5px 0',transition:'0.3s',opacity: open ? 0 : 1}}></div>
            <div style={{width:'24px',height:'2px',background:'var(--foreground)',margin:'5px 0',transition:'0.3s',transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none'}}></div>
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          maxHeight: open ? '400px' : '0',
          overflow:'hidden',
          transition:'max-height 0.4s ease',
          background:'var(--background)',
          borderTop:'1px solid #222'
        }}>
          <div style={{padding:'20px 24px',display:'flex',flexDirection:'column',gap:'20px'}}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{color:'var(--foreground)',opacity:0.9,fontSize:'18px',textDecoration:'none'}}>{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}