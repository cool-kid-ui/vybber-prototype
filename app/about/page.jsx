"use client"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Glow Header - About VYBBER */}
        <div className="relative overflow-hidden py-20 mb-12">
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30 -z-10"
            animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50], y: [-30, 30, -30] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

          <div className="relative z-10 text-center">
            <h1 className="text-7xl font-black tracking-tighter bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              About VYBBER
            </h1>
          </div>
        </div>

        {/* About Content with Unsplash Photos + Overlay */}
        <div className="text-gray-300 space-y-6 leading-8 text-lg">

          {/* Photo 1: Born in Onitsha */}
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://plus.unsplash.com/premium_photo-1684979565998-baea4bcc8efa?q=80&w=1200&auto=format&fit=crop" alt="Born in Onitsha" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">Born in Nigeria, 2024</p>
          </div>

          <p>VYBBER was born in Anambra State, Nigeria in 2024 when our founder got tired of switching between 5 apps just to have fun and learn. He would open TikTok for videos, WhatsApp for friends, YouTube for learning, Instagram for shopping, and Twitter for news. That’s 5 logins, 5 algorithms, 5 distractions. He thought: why can’t one app do all of this, but better?</p>

          {/* Photo 2: Gen Z Team */}
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1769257186252-2a4731c2395d?q=80&w=1200&auto=format&fit=crop" alt="Gen Z Team" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-orange-600/40 mix-blend-overlay"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">Built by Gen Z, for Gen Z</p>
          </div>

          <p>So he assembled a team of Gen Z developers who grew up on Viber, Telegram, and TikTok. We studied what made Viber special: the stickers, the group calls, the security. We studied Telegram: the speed, the glass UI, the channels. We studied TikTok: the algorithm, the swipe, the culture. Then we asked: what if we combine the best parts and remove the worst parts?</p>

          <p>Our mission is simple: make social media that respects your time, your privacy, and your intelligence. No addictive infinite scroll designed by psychologists. No ads disguised as content. No data sold to advertisers. Just pure connection, learning, and earning.</p>

          {/* Photo 3: Mission */}
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Mission" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">Respect &gt; Profit</p>
          </div>

          <p>We believe Gen Z deserves better than what Big Tech gives them. You deserve an algorithm that shows you what you love, not what makes advertisers money. You deserve chat that’s fast and private like Telegram. You deserve to learn skills and actually get paid for it. You deserve to shop without leaving the app. You deserve to know if what you’re watching is true or false.</p>

          <p>VYBBER is built by creators, for creators. Our team includes ex-TikTok engineers, Telegram bot developers, and Nigerian fintech founders. We operate from Onitsha but serve users globally. We’re bootstrapped, profitable, and obsessed with user experience.</p>

          <p>Our values: Speed over features. Privacy over profit. Truth over engagement. Community over virality. If a feature doesn’t serve you, we won’t build it. If an algorithm hurts your mental health, we’ll kill it. We’re here for the long game.</p>

          {/* Photo 4: Future */}
          <div className="relative rounded-2xl overflow-hidden my-8">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="Future" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-red-600/30 mix-blend-overlay"></div>
            <p className="absolute bottom-6 left-6 text-white text-2xl font-bold">10,000+ on waitlist</p>
          </div>

          <p>Today 10,000+ people are on our waitlist. We’re launching beta in Q2 2026. Join us. Tell us what you want. Help us build the social app you deserve. This is just the beginning. The future of social is VYBBER.</p>
          <p>Questions? Email us at team@vybber.com. We read every message. Yes, really.</p>
        </div>
      </div>
    </div>
  )
}