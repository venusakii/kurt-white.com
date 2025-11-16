import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Vitamix 5200',
    category: 'High-Performance',
    rating: 9.5,
    price: '$449',
    image: '/vitamix-blender-professional.jpg',
    pros: ['Exceptional power', 'Long warranty', 'Versatile'],
    bestFor: 'Daily smoothies & soups'
  },
  {
    id: 2,
    name: 'Ninja Professional Plus',
    category: 'Best Value',
    rating: 8.7,
    price: '$99',
    image: '/ninja-blender-professional.jpg',
    pros: ['Great value', 'Powerful motor', 'Easy to clean'],
    bestFor: 'Budget-conscious buyers'
  },
  {
    id: 3,
    name: 'Blendtec Designer 725',
    category: 'Smart Features',
    rating: 9.2,
    price: '$549',
    image: '/blendtec-designer-blender.jpg',
    pros: ['Touch interface', 'Pre-programmed cycles', 'Quiet operation'],
    bestFor: 'Tech enthusiasts'
  },
]

export function FeaturedReviews() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Our Top Picks</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-4">Featured Reviews</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hand-picked from hundreds of hours of testing. These are our highest-rated blenders across different categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-sm">
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2 rounded-sm">{review.category}</Badge>
                    <h3 className="font-serif text-2xl font-semibold">{review.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-primary">
                      <Star size={16} fill="currentColor" />
                      <span className="font-bold">{review.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {review.pros.map((pro, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded-sm">
                        {pro}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Best for:</span> {review.bestFor}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  
                  <button className="text-sm font-medium hover:underline">Read Review →</button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
