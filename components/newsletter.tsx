'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing:', email)
    setEmail('')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-primary text-primary-foreground rounded-sm p-12 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
            <Mail size={32} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl">Stay Updated</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-pretty">
            Get weekly blender reviews, buying guides, and exclusive tips delivered straight to your inbox. Join 10,000+ subscribers.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-primary rounded-sm"
              />
              <Button type="submit" variant="secondary" className="rounded-sm whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
