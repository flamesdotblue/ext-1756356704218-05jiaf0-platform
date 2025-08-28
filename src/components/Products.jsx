import React from 'react'
import { Bot, Cpu, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const products = [
  {
    name: 'AX-100 Courier',
    description: 'Autonomous mobile robot for last‑meter warehouse logistics with dynamic obstacle avoidance.',
    price: 'From $7,999',
    icon: Bot,
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    name: 'AX-200 Sentinel',
    description: 'Security patrol unit with thermal vision, on‑device anomaly detection, and instant alerts.',
    price: 'From $12,499',
    icon: Shield,
    accent: 'from-violet-400 to-fuchsia-600',
  },
  {
    name: 'AX-300 Precision Arm',
    description: '6‑axis collaborative arm for assembly lines. Millimeter accuracy with soft‑touch grippers.',
    price: 'From $15,299',
    icon: Cpu,
    accent: 'from-emerald-400 to-teal-600',
  },
  {
    name: 'AX-500 Sprint',
    description: 'High‑speed delivery platform for campuses and hotels with secure compartment system.',
    price: 'From $10,999',
    icon: Zap,
    accent: 'from-amber-400 to-orange-600',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative z-10 border-t border-white/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Robots engineered for real work</h2>
            <p className="mt-2 max-w-2xl text-white/70">Modular, safe, and production‑ready systems built to integrate with your stack.</p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 md:inline-block">
            Talk to Sales
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className={`mb-4 h-10 w-10 rounded-md bg-gradient-to-br ${p.accent} grid place-items-center text-black shadow-lg shadow-black/10`}>
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-white/90">{p.price}</span>
                <button className="rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 transition hover:bg-white/20">
                  Add to Cart
                </button>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background:"radial-gradient(600px 200px at 50% -20%, rgba(255,255,255,0.08), transparent)"}} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
