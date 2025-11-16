import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Thompson',
    role: 'Home Chef',
    content: 'Thanks to Kurt White\'s detailed reviews, I found the perfect blender for my smoothie business. The comparison charts made my decision so much easier.',
    rating: 5,
    image: '/professional-woman-portrait.png'
  },
  {
    name: 'David Anderson',
    role: 'Fitness Enthusiast',
    content: 'I\'ve been making smoothies daily for years, and this site helped me upgrade to a blender that actually lasts. Honest reviews with no BS.',
    rating: 5,
    image: '/male-fitness-professional-portrait.jpg'
  },
  {
    name: 'Jennifer Brown',
    role: 'Nutritionist',
    content: 'As someone who recommends kitchen equipment to clients, I trust Kurt White for accurate, unbiased information. The buying guides are exceptional.',
    rating: 5,
    image: '/asian-woman-nutritionist-portrait.jpg'
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Trusted by Thousands</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-4">What Our Readers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4 rounded-sm">
              <div className="flex gap-1 text-primary">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-pretty">{testimonial.content}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
