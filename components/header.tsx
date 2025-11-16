'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4L7 7H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V7H13L10 4Z" fill="white"/>
                <circle cx="10" cy="15" r="1" fill="white"/>
              </svg>
            </div>
            <span className="font-serif text-xl font-semibold">Kurt White</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
            <a href="#comparison" className="text-sm font-medium hover:text-primary transition-colors">Compare</a>
            <a href="#guide" className="text-sm font-medium hover:text-primary transition-colors">Buying Guide</a>
            <a href="#categories" className="text-sm font-medium hover:text-primary transition-colors">Categories</a>
            <Button size="sm" className="rounded-sm">Contact</Button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
              <a href="#comparison" className="text-sm font-medium hover:text-primary transition-colors">Compare</a>
              <a href="#guide" className="text-sm font-medium hover:text-primary transition-colors">Buying Guide</a>
              <a href="#categories" className="text-sm font-medium hover:text-primary transition-colors">Categories</a>
              <Button size="sm" className="rounded-sm w-full">Contact</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
