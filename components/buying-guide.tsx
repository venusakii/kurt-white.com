import { Card } from '@/components/ui/card'
import { Zap, DollarSign, Volume2, Droplets, Shield, Clock } from 'lucide-react'

const guideItems = [
  {
    icon: Zap,
    title: 'Motor Power',
    description: 'Look for at least 1000W for basic blending, 1400W+ for tougher ingredients like ice and frozen fruit.'
  },
  {
    icon: DollarSign,
    title: 'Budget Planning',
    description: 'Set realistic expectations. Quality blenders range from $100-$500 depending on your needs.'
  },
  {
    icon: Volume2,
    title: 'Noise Considerations',
    description: 'If noise is a concern, look for models with sound enclosures or lower RPM settings.'
  },
  {
    icon: Droplets,
    title: 'Container Material',
    description: 'Glass is heavy but doesn\'t scratch. Plastic is lightweight. BPA-free is essential.'
  },
  {
    icon: Shield,
    title: 'Warranty Coverage',
    description: 'A good warranty (5-10 years) indicates manufacturer confidence in build quality.'
  },
  {
    icon: Clock,
    title: 'Usage Frequency',
    description: 'Daily users should invest in commercial-grade. Occasional users can opt for mid-range.'
  },
]

export function BuyingGuide() {
  return (
    <section id="guide" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Expert Advice</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-4">Buying Guide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            What to consider before making your purchase. Our comprehensive guide covers all the essentials.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="p-6 space-y-4 hover:shadow-md transition-shadow rounded-sm">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="text-sm font-medium hover:underline">
            Read Full Buying Guide →
          </button>
        </div>
      </div>
    </section>
  )
}
