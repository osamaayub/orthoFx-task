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
          src="/hero-background.jpeg"
          alt="Happy couple smiling confidently"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
        {/* Left Content (Main Heading) */}
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

        {/* Right Content (Aligner Image and Text/Button Block) */}
        <div className="lg:col-span-6 flex flex-col items-end justify-end h-full">
          <div className="flex flex-col md:flex-row items-end md:items-center gap-x-8 gap-y-8 mb-10">
            {/* Aligner image (Percentless.png) - Removed wrapping div and its styles */}
            <Image
              src="/Percentless.png"
              alt="50% Less wear time with AirFlex aligners"
              width={200} // Adjusted width
              height={200} // Adjusted height
              className={`object-contain transition-all duration-700 ease-out delay-300 ${isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
            />

            {/* Text and Button Block */}
            <div
              className={`space-y-4 max-w-sm text-center md:text-right transition-all duration-700 ease-out delay-200 ${isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
            >
              <p className="text-white text-sm leading-relaxed font-medium">
              With AirFlex™ aligners, enjoy up to 50% less wear time <br />
              compared to other brands. OrthoFX &apos cutting-edge <br />
              aligners are designed to fit your unique lifestyle and <br />
              treatment goals.*
            </p>
              <Button className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-full px-8 py-4 flex items-center space-x-3 font-medium transition-all duration-200 mx-auto md:ml-auto md:mr-0">
                <span>Find a doctor</span>
                <ArrowRight className="w-4 h-4 text-gray-900" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
