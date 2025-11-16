import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Expert Reviews Since 2020</p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight text-balance">
                Find Your Perfect Blender
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Unbiased reviews, detailed comparisons, and expert buying guides to help you choose the best blender for your needs. From smoothies to soups, we've tested them all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-sm group">
                View Top Picks
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-sm">
                Compare Blenders
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden bg-muted">
              <img
                src="/modern-high-end-blender-on-minimalist-kitchen-coun.jpg"
                alt="Premium blender"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm max-w-xs">
              <p className="text-3xl font-serif font-bold">150+</p>
              <p className="text-sm mt-1">Blenders Tested & Reviewed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
