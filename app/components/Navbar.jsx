'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{position:'fixed',top:0,width:'100%',background:'rgba(0,0,0,0.8)',zIndex:50,borderBottom:'1px solid #333'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'16px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link href="/" style={{fontSize:'24px',fontWeight:'bold',color:'white'}}>VYBBER</Link>
        
        {/* Desktop */}
        <div style={{display:'none',gap:'32px'}} className="desktop-nav">
          <Link href="/about" style={{color:'#ccc'}}>About</Link>
          <Link href="/docs" style={{color:'#ccc'}}>Docs</Link>
        </div>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} style={{background:'none',border:'none',cursor:'pointer'}}>
          <div style={{width:'24px',height:'2px',background:'white',margin:'5px 0',transition:'0.3s',transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none'}}></div>
          <div style={{width:'24px',height:'2px',background:'white',margin:'5px 0',transition:'0.3s',opacity: open ? 0 : 1}}></div>
          <div style={{width:'24px',height:'2px',background:'white',margin:'5px 0',transition:'0.3s',transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none'}}></div>
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{maxHeight: open ? '300px' : '0',overflow:'hidden',transition:'max-height 0.3s',background:'#111'}}>
        <div style={{padding:'20px',display:'flex',flexDirection:'column',gap:'16px'}}>
          <Link href="/about" onClick={() => setOpen(false)} style={{color:'#ccc'}}>About</Link>
          <Link href="/docs" onClick={() => setOpen(false)} style={{color:'#ccc'}}>Docs</Link>
        </div>
      </div>
    </nav>
  )
}