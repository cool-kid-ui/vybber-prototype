"use client"
import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Glow Header - VYBBER Privacy Policy */}
        <div className="relative overflow-hidden py-20 mb-12">
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30 -z-10"
            animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50], y: [-30, 30, -30] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

          <div className="relative z-10 text-center">
            <h1 className="text-7xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
              VYBBER Privacy Policy
            </h1>
            <p className="text-gray-400 mt-4">Your privacy matters. Last Updated: April 12, 2026</p>
          </div>
        </div>

        {/* Privacy Content with Unsplash Photos + Overlay */}
        <div className="text-gray-300 space-y-6 leading-8 text-lg">

          <h2 className="text-3xl font-bold text-white mt-12">1. Information We Collect</h2>
          <p>We collect: Email, name, phone. Videos, photos, messages you post. Device info, IP, usage data, location if enabled. Payment info via Stripe only.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop" alt="Data Collection" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">Your data, protected</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">2. How We Use Your Data</h2>
          <p>We use your data to run VYBBER, improve AI algorithm, prevent spam, send updates, process payments. We never sell your personal data to advertisers. Ever.</p>

          <h2 className="text-3xl font-bold text-white mt-12">3. AI & Algorithm</h2>
          <p>Our algorithm analyzes what you watch, like, share to personalize your feed. Data stays on our servers. Reset anytime in Settings &gt; Privacy &gt; Reset AI.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://plus.unsplash.com/premium_photo-1725907643567-1694c2737432?q=80&w=1200&auto=format&fit=crop" alt="AI Privacy" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-blue-600/30 mix-blend-overlay"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">AI stays private</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">4. Chat & Messages</h2>
          <p>Messages use end-to-end encryption like Telegram. We can’t read private chats. Group chats encrypted. Secret chats self-destruct.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop" alt="Encrypted Chat" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">End-to-end encrypted</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">5. Cookies & Tracking</h2>
          <p>We use cookies to keep you logged in. No Facebook Pixel. No third-party tracking. Disable cookies if you want, but features may break.</p>

          <h2 className="text-3xl font-bold text-white mt-12">6. Data Sharing</h2>
          <p>We share only with Cloudflare, Firebase, Stripe, or law enforcement if required by Nigerian law. Never with advertisers or data brokers.</p>

          <h2 className="text-3xl font-bold text-white mt-12">7. Data Security</h2>
          <p>Encryption, firewalls, security audits. If breach happens, we notify you within 72 hours as required by law.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e1?q=80&w=1200&auto=format&fit=crop" alt="Security" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-cyan-600/30 mix-blend-overlay"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">Bank-level security</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">8. Your Rights</h2>
          <p>Under GDPR + Nigerian law: Access, correct, delete, export, object, withdraw consent. Email privacy@vybber.com</p>

          <h2 className="text-3xl font-bold text-white mt-12">9. Data Retention</h2>
          <p>We keep data while account is active. Delete account = data deleted in 30 days except legal records.</p>

          <h2 className="text-3xl font-bold text-white mt-12">10. Children’s Privacy</h2>
          <p>Not for under 13. If we find data from child under 13, we delete immediately.</p>

          <h2 className="text-3xl font-bold text-white mt-12">11. Changes to This Policy</h2>
          <p>We may update this policy. We’ll notify in-app or email. Continued use = acceptance.</p>

          <h2 className="text-3xl font-bold text-white mt-12">12. Contact Us</h2>
          <p>Questions? Email privacy@vybber.com or Data Protection Officer, VYBBER Technologies, Onitsha, Nigeria.</p>
        </div>
      </div>
    </div>
  )
}