import React from 'react'
import { Rocket } from 'lucide-react'

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-gradient-to-b from-black to-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-black">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold">Axiom Robotics</h3>
            </div>
            <p className="mt-4 max-w-xl text-white/70">
              We design and manufacture intelligent robots that empower teams to do more with less. Safety‑certified, developer‑friendly, and ready to deploy.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h4 className="text-lg font-semibold text-white">Get product updates</h4>
            <p className="mt-1 text-sm text-white/70">Subscribe for new releases, case studies, and early access offers.</p>
            <form className="mt-4 flex w-full gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-white/20"
              />
              <button className="rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
                Subscribe
              </button>
            </form>
            <div className="mt-6 text-xs text-white/50">By subscribing, you agree to our Privacy Policy.</div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Axiom Robotics. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
