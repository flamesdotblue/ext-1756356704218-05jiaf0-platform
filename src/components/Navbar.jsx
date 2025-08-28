import React from 'react'
import { Rocket, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-black">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-white">Axiom Robotics</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#products" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition">
              <ShoppingCart className="h-4 w-4" /> Shop Robots
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
