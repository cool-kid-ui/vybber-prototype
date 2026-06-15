"use client"
import { motion } from 'framer-motion'

export default function Docs() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Glow Header - Docs / How To Use */}
        <div className="relative overflow-hidden py-20 mb-12">
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30 -z-10"
            animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50], y: [-30, 30, -30] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-green-600 to-emerald-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

          <div className="relative z-10 text-center">
            <h1 className="text-7xl font-black tracking-tighter bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Docs / How To Use VYBBER
            </h1>
          </div>
        </div>

        {/* Docs Content with Unsplash Photos + Overlay */}
        <div className="text-gray-300 space-y-6 leading-8 text-lg">

          <h2 className="text-3xl font-bold text-white mt-12">Getting Started</h2>
          <p>Download VYBBER from Google Play Store or Apple App Store. Open the app and tap ‘Sign Up’. Enter your phone number. We’ll send you a 6-digit code. Enter the code to verify. Add your name and profile photo. That’s it - you’re in. No email required if you prefer phone login.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1647964185852-cdc3069aa0ab?q=80&w=1200&auto=format&fit=crop" alt="Mobile App" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">Step 1: Download & Sign Up</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">The Swipe Feed</h2>
          <p>Open VYBBER and you’ll see videos immediately. Swipe up to see the next video. Swipe down to go back. Double tap to like. Hold to pause. Swipe left to see comments. Swipe right to see creator profile. The more you watch, the better VYBBER understands your taste. Tap ‘Not Interested’ if you don’t like a video to train the AI faster.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1200&auto=format&fit=crop" alt="Swipe Feed" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-green-600/30 mix-blend-overlay"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">Step 2: Swipe & Discover</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">Chat & Messaging</h2>
          <p>Tap the chat icon at bottom to open messages. Tap the + button to start a new chat. Search for username or phone number. Send text, photos, videos, voice notes, documents up to 2GB. Long press a message to reply, react, or delete. Create groups up to 200,000 members. Start channels for unlimited subscribers.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop" alt="Chat" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">Step 3: Chat & Connect</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">Learn Mode</h2>
          <p>See a video you want to learn from? Tap the ‘Learn’ button below it. VYBBER converts the video into a mini course with quizzes and notes. Complete lessons to earn VYBBER Credits. Use credits to unlock premium courses from top creators. Track your progress in Profile &gt; Learning.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?q=80&w=1200&auto=format&fit=crop" alt="Learning" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-emerald-600/30 mix-blend-overlay"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">Step 4: Learn & Earn Credits</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">Marketplace Shopping</h2>
          <p>Watching a video and see a product you like? Tap the shopping bag icon on the video. View product details, price, and seller rating. Tap ‘Buy Now’ and pay with card, bank transfer, or crypto. Track your order in Profile &gt; Orders. Sellers can list products by going to Profile &gt; Become Seller.</p>
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1200&auto=format&fit=crop" alt="Marketplace" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">Step 5: Shop In-App</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12">AI Truth Check</h2>
          <p>Every video gets an AI Truth Check badge. Green = verified by multiple sources. Yellow = unverified, check yourself. Red = likely false, AI explains why. Tap the badge to see AI’s reasoning and source links. Help improve AI by reporting wrong checks.</p>

          <h2 className="text-3xl font-bold text-white mt-12">Privacy & Settings</h2>
          <p>Go to Profile &gt; Settings to control privacy. Make account private so only approved followers see your posts. Turn off ‘Show Online Status’. Block users who harass you. Enable two-factor authentication for security. Reset your AI algorithm if your feed gets boring.</p>

          <h2 className="text-3xl font-bold text-white mt-12">Need Help?</h2>
          <p>Still stuck? Email support@vybber.com or DM @VYBBERHelp on the app. We respond within 24 hours. Check community.vybber.com for user guides and tutorials.</p>
        </div>
      </div>
    </div>
  )
}