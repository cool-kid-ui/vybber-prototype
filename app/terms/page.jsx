"use client"
import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Glow Header - VYBBER Terms and Service */}
        <div className="relative overflow-hidden py-20 mb-12">
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30 -z-10"
            animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50], y: [-30, 30, -30] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

          <div className="relative z-10 text-center">
            <h1 className="text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              VYBBER Terms and Service
            </h1>
            <p className="text-gray-400 mt-4">Last Updated: April 12, 2026</p>
          </div>
        </div>

        {/* Terms Content with Unsplash Photos + Overlay */}
        <div className="text-gray-300 space-y-6 leading-8 text-lg">

          <h2 className="text-3xl font-bold text-white mt-12">1. Agreement to Terms</h2>
          <p>By accessing or using VYBBER, you agree to be bound by these Terms. If you disagree, do not use the app.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" alt="Contract Agreement" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">Read before you continue</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">2. Eligibility</h2>
          <p>You must be at least 13 years old to use VYBBER. If you’re under 18, you need parental consent.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="Age Verification" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-purple-600/40 mix-blend-overlay"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">13+ only</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">3. Account Registration</h2>
          <p>You must provide accurate information when creating an account. Keep your password secure.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" alt="Security" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">Keep your account safe</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">4. User Content</h2>
          <p>You own the content you post on VYBBER. No hate speech. No violence. No illegal content.</p>

          <h2 className="text-3xl font-bold text-white mt-12">5. Prohibited Conduct</h2>
          <p>Don’t spam. Don’t impersonate others. Don’t hack or disrupt VYBBER.</p>

          <h2 className="text-3xl font-bold text-white mt-12">6. Marketplace</h2>
          <p>If you buy or sell on VYBBER Marketplace, VYBBER takes 5% commission. Payments via Stripe or Paystack.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop" alt="Marketplace" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-pink-600/30 mix-blend-overlay"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">Buy & Sell on VYBBER</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">7. AI Truth Check</h2>
          <p>Our AI Truth Check provides opinions, not facts. Don’t rely on it for medical, legal, or financial decisions.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" alt="AI" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white font-bold">AI = Opinions, not facts</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">8. Termination</h2>
          <p>We can suspend your account if you violate these Terms. Delete anytime in Settings.</p>

          <h2 className="text-3xl font-bold text-white mt-12">9. Limitation of Liability</h2>
          <p>VYBBER is provided ‘as is’. Our total liability is limited to $100 or what you paid us in 12 months.</p>

          <h2 className="text-3xl font-bold text-white mt-12">10. Governing Law</h2>
          <p>These Terms are governed by Nigerian law. Disputes in courts of Anambra State, Nigeria.</p>

          <h2 className="text-3xl font-bold text-white mt-12">11. Contact Us</h2>
          <p>Questions? Email legal@vybber.com or write to VYBBER Technologies, Onitsha, Anambra State.</p>
        </div>
      </div>
    </div>
  )
}