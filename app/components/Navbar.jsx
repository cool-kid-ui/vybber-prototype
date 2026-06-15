'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <>
      <Link href="/about" className="hover:text-white transition" onClick={() => setOpen(false)}>About</Link>
      <Link href="/docs" className="hover:text-white transition" onClick={() => setOpen(false)}>Docs</Link>
      <Link href="/privacy" className="hover:text-white transition" onClick={() => setOpen(false)}>Privacy</Link>
      <Link href="/terms" className="hover:text-white transition" onClick={() => setOpen(false)}>Terms</Link>
    </>
  )

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/60 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          VYBBER
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <NavLinks />
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`w-6 h-0.5 bg-white transition ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="flex flex-col gap-6 text-gray-300 px-6 py-6">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  )
}