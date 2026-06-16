import './globals.css'
import Navbar from '../components/Navbar.jsx' // Import your existing Navbar component

export const metadata = {
  title: 'VYBBER - The Future of Social',
  description: 'TikTok swipe + Telegram glass + Skill-Learn + Marketplace + AI Truth Check'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar /> {/* Your Navbar.js handles the nav + hamburger */}

        <main className="pt-20"> {/* pt-20 prevents content hiding under fixed nav */}
          {children}
        </main>

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