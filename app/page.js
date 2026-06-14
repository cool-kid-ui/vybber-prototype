'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase' 

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  const [form, setForm] = useState({name: '', email: '', phone: ''})
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await addDoc(collection(db, "waitlist"), {
      ...form,
      createdAt: serverTimestamp()
    })
    setSent(true)
  } catch (error) {
    console.error("Error saving:", error)
    alert("Something went wrong. Try again.")
  }
}

  const features = [
    {title: "Swipe That Understands You", desc: "VYBBER’s AI watches what you pause on, what you replay, what makes you smile. Then it feeds you more of that. No more random content. Just your vibe, infinitely.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800"},
    {title: "Glass Chat, Telegram Speed", desc: "We stole Telegram’s best idea: glassmorphism. Frosted blur, instant delivery, end-to-end vibes. Chat with friends while watching videos. No app switching. No lag.", img: "https://images.unsplash.com/photo-1555421689-3f0340c9bb0f?w=800"},
    {title: "Learn & Earn Skills", desc: "Every video can teach you something. Tap ‘Learn Mode’ and VYBBER breaks the video into lessons. Finish a lesson, earn credits. Use credits to buy courses from creators.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"},
    {title: "Marketplace Inside", desc: "See a product in a video? Tap it. Buy it. No leaving the app. Creators get paid. You get what you want. VYBBER takes 5% only. The rest goes to the hustlers.", img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800"},
    {title: "AI Truth Check", desc: "Fake news ends here. Every video gets scanned by AI in real-time. Green check = verified. Red flag = AI explains why it’s false. You decide what to believe.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"}
  ]

  return (
    <main ref={ref} className="bg-black text-white overflow-x-hidden">
      {/* Section 1: Hero - VYBBER shows on its own */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
  {/* Glow background - Firebase Studio style */}
  <motion.div
    className="absolute inset-0 blur-3xl opacity-30 -z-10"
    animate={{
      scale: [1, 1.3, 1],
      x: [-50, 50, -50],
      y: [-30, 30, -30]
    }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-[600px] h-[600px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  </motion.div>

  <motion.div style={{y}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}} className="relative z-10 text-center">
    <h1 className="text-9xl font-black tracking-tighter text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
      VYBBER
    </h1>
    <p className="text-center text-xl text-gray-400 mt-4">Scroll down to see the future</p>
  </motion.div>
</section>

      {/* Section 2: First card with picture + tilt */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          whileHover={{rotateX:10, rotateY:-10, scale:1.02}}
          style={{perspective:1000}}
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.8}}
          className="max-w-5xl backdrop-blur-2xl bg-white/5 border-white/10 rounded- p-12"
        >
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200" className="rounded-2xl w-full h-96 object-cover mb-8" alt="Social"/>
          <h2 className="text-5xl font-bold mb-4">This Is Not Just Another App</h2>
          <p className="text-xl text-gray-300 leading-8">
            Sentence 1: We studied TikTok for 2 years. Sentence 2: We studied Telegram for 3 years. Sentence 3: We asked 10,000 Gen Z what they actually want. Sentence 4: They said ‘stop wasting my time’. Sentence 5: So we built VYBBER. Sentence 6: An app that learns you faster than you learn it. Sentence 7: Where every swipe teaches the AI. Sentence 8: Where every chat feels like the future. Sentence 9: This is social media rebuilt from zero. Sentence 10: Welcome to VYBBER.
          </p>
        </motion.div>
      </section>

      {/* Section 3: Feature cards keep coming */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {features.map((f, i) => (
            <motion.div key={i}
              whileHover={{scale:1.03, rotateX:5}}
              style={{perspective:1000}}
              initial={{opacity:0, x: i%2===0? -100 : 100}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.8}}
              className="grid md:grid-cols-2 gap-12 items-center backdrop-blur-xl bg-white/5 border-white/10 rounded- p-12"
            >
              <img src={f.img} className="rounded-2xl w-full h-80 object-cover" alt={f.title}/>
              <div>
                <h3 className="text-4xl font-bold mb-4">{f.title}</h3>
                <p className="text-lg text-gray-300 leading-8">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Waitlist Form before Footer */}
      <section className="py-32 px-6">
        <motion.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          className="max-w-2xl mx-auto text-center backdrop-blur-2xl bg-white/5 border-white/10 rounded- p-12"
        >
          <h2 className="text-5xl font-bold mb-4">Join 10,000+ On The Waitlist</h2>
          <p className="text-gray-400 mb-8">Be first. Get early access. Shape VYBBER with us.</p>

          {!sent? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required placeholder="Your Name" className="w-full p-4 rounded-2xl bg-white/10 border-white/20" onChange={e=>setForm({...form,name:e.target.value})}/>
              <input required type="email" placeholder="Email Address" className="w-full p-4 rounded-2xl bg-white/10 border-white/20" onChange={e=>setForm({...form,email:e.target.value})}/>
              <input placeholder="Phone Number" className="w-full p-4 rounded-2xl bg-white/10 border-white/20" onChange={e=>setForm({...form,phone:e.target.value})}/>
              <button className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">Get Early Access</button>
            </form>
          ) : (
            <p className="text-green-400 text-2xl">You’re in 🔥 We’ll email you soon</p>
          )}
        </motion.div>
      </section>

      
    </main>
  )
}