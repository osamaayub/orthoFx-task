"use client"

import type React from "react"
import { useState, useEffect } from "react" // Import useEffect
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, User } from "lucide-react"

interface HeaderProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void
}

export function Navbar({ handleSmoothScroll }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // State for animation

  useEffect(() => {
    setIsMounted(true) // Trigger animation on mount
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6  fixed w-full top-0 z-50 ">
     
        <div className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-gray-900">Ortho</span>
          <span className="text-orange-500 italic">FX</span>
        </div>
        {/* Desktop Navigation - Hidden on md, lg, visible on xl */}
        <nav className="hidden xl:flex items-center space-x-6 lg:space-x-8">
          <a
            href="#difference"
            onClick={(e) => handleSmoothScroll(e, "difference")}
            className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium whitespace-nowrap"
          >
            OrthoFX Difference
          </a>
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-700 group-hover:hover:bg-[#d9edf7]  transition-colors text-sm font-medium whitespace-nowrap">
              Products
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:hover:bg-[#d9edf7] " />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="text-gray-700 group-hover:hover:bg-[#d9edf7] transition-colors text-sm font-medium whitespace-nowrap">
              Services
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:hover:bg-[#d9edf7] " />
          </div>
          <a
            href="#results"
            onClick={(e) => handleSmoothScroll(e, "results")}
            className="text-gray-700 hover:group-hover:hover:bg-[#d9edf7]  transition-colors text-sm font-medium whitespace-nowrap"
          >
            Smile Results
          </a>
          <a
            href="#quiz"
            onClick={(e) => handleSmoothScroll(e, "quiz")}
            className="text-gray-700 hover:group-hover:hover:bg-[#d9edf7]  transition-colors text-sm font-medium whitespace-nowrap"
          >
            Smile Quiz
          </a>
        </nav>
        {/* Desktop Buttons and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Become a provider button - Hidden on md, lg, visible on xl */}
          <Button className="bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap hidden xl:inline-flex">
            Become a provider
          </Button>
          {/* User icon - Hidden on md, lg, visible on xl */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-900 text-white hover:bg-gray-800 w-9 h-9 md:w-10 md:h-10 flex-shrink-0 hidden xl:flex"
          >
            <User className="w-4 h-4" />
          </Button>
          {/* Mobile Menu Toggle - Visible on md, lg, hidden on xl */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-9 h-9 flex-shrink-0 xl:hidden" // Only visible on mobile, tablet, laptop
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center xl:hidden">
          <nav className="flex flex-col items-center space-y-6 text-lg">
            <a
              href="#difference"
              className="text-gray-700 hover:text-orange-500 transition-colors"
              onClick={(e) => handleSmoothScroll(e, "difference")}
            >
              OrthoFX Difference
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={toggleMobileMenu}>
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors" onClick={toggleMobileMenu}>
              Services
            </a>
            <a
              href="#results"
              className="text-gray-700 hover:text-orange-500 transition-colors"
              onClick={(e) => handleSmoothScroll(e, "results")}
            >
              Smile Results
            </a>
            <a
              href="#quiz"
              className="text-gray-700 hover:text-orange-500 transition-colors"
              onClick={(e) => handleSmoothScroll(e, "quiz")}
            >
              Smile Quiz
            </a>
            <Button
              className="bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white rounded-full px-6 py-2.5 text-base font-medium transition-all duration-200 mt-4"
              onClick={toggleMobileMenu}
            >
              Become a provider
            </Button>
          </nav>
        </div>
      )}
      </header>
      </>
  )
}
