import './globals.css'
import Link from 'next/link'
import { useState } from 'react'

export const metadata = {
  title: 'VYBBER - The Future of Social',
  description: 'TikTok swipe + Telegram glass + Skill-Learn + Marketplace + AI Truth Check'
}

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <>
      <Link href="/about" className="hover:text-white transition">About</Link>
      <Link href="/docs" className="hover:text-white transition">Docs</Link>
      <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
      <Link href="/terms" className="hover:text-white transition">Terms</Link>
    </>
  )

  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* Top Nav */}
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/60 border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              VYBBER
            </Link>

            {/* Desktop links - hidden on mobile */}
            <div className="hidden md:flex gap-8 text-gray-300">
              <NavLinks />
            </div>

            {/* Mobile hamburger - hidden on desktop */}
            <button 
              onClick={() => setOpen(!open)}
              className="md:hidden flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-white transition ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition ${open ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile dropdown menu */}
          {open && (
            <div className="md:hidden bg-black/95 border-t border-white/10">
              <div className="flex flex-col gap-6 text-gray-300 px-6 py-6">
                <NavLinks />
              </div>
            </div>
          )}
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-6 mt-20">
          <div className="max-w-6xl mx-auto flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© 2026 VYBBER Technologies. Built in Nigeria, for the world.</p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/docs" className="hover:text-white">Docs</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="mailto:support@vybber.com" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}