"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isContentVisible, setIsContentVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-24">
      <div className="absolute inset-0">
        <Image
          src="/Background.jpeg"
          alt="Happy couple smiling confidently"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
        {/* Left Content */}
        <div
          className={`lg:col-span-6 space-y-8 pt-10 lg:pt-0 flex flex-col items-center lg:items-start transition-all duration-700 ease-out ${isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
        >
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-7xl lg:text-8xl font-extralight text-gray-900 leading-[0.9] tracking-tight drop-shadow-lg">
              Be you.
            </h1>
            <p className="text-5xl lg:text-6xl font-light italic text-gray-800 leading-tight drop-shadow-md">
              Smile confidently.
            </p>
          </div>
        </div>

        {/* Right Content Column */}
        {/* Always relative for absolute children positioning on desktop */}
        {/* On mobile/tablet: flex column, items centered, padding bottom */}
        {/* On desktop: flex-end items, no bottom padding */}
        <div className="lg:col-span-5 lg:col-start-8 relative flex flex-col items-center justify-center pb-10 lg:pb-0 lg:items-end lg:justify-end">
          {/* Main text and button block */}
          {/* On mobile/tablet: centered text, button centered with mx-auto, static position */}
          {/* On desktop: absolute positioned, right-aligned text */}
          <div
            className={`space-y-4 z-10 max-w-sm text-center lg:absolute lg:bottom-0 lg:right-0 lg:text-right lg:max-w-none transition-all duration-700 ease-out delay-200 ${isContentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[20px]"}`}
          >
            <p className="text-white text-sm leading-relaxed font-medium">
              With AirFlex™ aligners, enjoy up to 50% less wear time <br />
              compared to other brands. OrthoFX &apos cutting-edge <br />
              aligners are designed to fit your unique lifestyle and <br />
              treatment goals.*
            </p>
            <Button className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-full px-8 py-4 flex items-center space-x-3 font-medium transition-all duration-200 mx-auto lg:ml-auto lg:mr-0">
              <span>Find a doctor</span>
              <ArrowRight className="w-4 h-4 text-gray-900" />
            </Button>
          </div>

          {/* Aligner image block (Percentless.png) - hidden on small screens, absolutely positioned on large screens */}
          <div className="hidden lg:block absolute bottom-[-50px] left-[-100px] z-0 bg-white/15 backdrop-blur-md border-white/20 rounded-xl p-4">
            <Image
              src="/Percentless.png"
              alt="50% Less wear time with AirFlex aligners"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
