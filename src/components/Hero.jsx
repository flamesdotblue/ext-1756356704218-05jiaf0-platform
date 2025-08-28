import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/C5lv0-cXORBFwnsP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>

      <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-24 pt-28 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              Next‑Gen Robotics for Everyone
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Automate the future with precision‑built robots
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              From warehouse runners to concierge assistants, Axiom robots are engineered to work safely alongside humans and scale your operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="pointer-events-auto rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Explore Robots
              </a>
              <a
                href="#features"
                className="pointer-events-auto rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-white/70">
              <Stat k="24/7" v="Uptime" />
              <Stat k=">99.9%" v="Accuracy" />
              <Stat k="IP67" v="Durability" />
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

function Stat({ k, v }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-xl font-semibold text-white">{k}</div>
      <div className="text-xs uppercase tracking-wide text-white/60">{v}</div>
    </div>
  )
}
