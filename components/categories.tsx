import { Card } from '@/components/ui/card'

const categories = [
  {
    name: 'Personal Blenders',
    count: '24 reviews',
    image: '/personal-single-serve-blender.jpg',
    description: 'Perfect for smoothies on the go'
  },
  {
    name: 'Full-Size Blenders',
    count: '38 reviews',
    image: '/full-size-kitchen-blender.jpg',
    description: 'Family-sized power and capacity'
  },
  {
    name: 'Immersion Blenders',
    count: '18 reviews',
    image: '/immersion-hand-blender.jpg',
    description: 'Handheld convenience for soups'
  },
  {
    name: 'High-Performance',
    count: '15 reviews',
    image: '/high-performance-professional-blender.jpg',
    description: 'Professional-grade power'
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Browse by Type</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-4">Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find the right type of blender for your specific needs and kitchen setup.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all rounded-sm">
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
                <p className="text-xs text-muted-foreground pt-2">{category.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
