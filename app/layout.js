import './globals.css'
import Link from 'next/link'
import Navbar from './components/Navbar.jsx'

export const metadata = {
  title: 'VYBBER - The Future of Social',
  description: 'TikTok swipe + Telegram glass + Skill-Learn + Marketplace + AI Truth Check'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        
        <main style={{paddingTop: '55px'}}>
          {children}
        </main>

        <footer className="border-t border-white/10 py-12 px-6 mt-20">
          <div className="max-w-6xl mx-auto flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© 2026 VYBBER Technologies. Built in Nigeria, for the world.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/docs" className="hover:text-white">Docs</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="mailto:support@vybber.com" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}