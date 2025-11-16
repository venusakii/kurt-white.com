'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'

const comparisonData = [
  { feature: 'Motor Power', budget: '1000W', mid: '1400W', premium: '2200W' },
  { feature: 'Warranty', budget: '1 year', mid: '5 years', premium: '10 years' },
  { feature: 'Variable Speed', budget: false, mid: true, premium: true },
  { feature: 'Pre-programmed Settings', budget: false, mid: true, premium: true },
  { feature: 'Dishwasher Safe', budget: true, mid: true, premium: true },
  { feature: 'Noise Level', budget: 'Loud', mid: 'Moderate', premium: 'Quiet' },
  { feature: 'Build Quality', budget: 'Plastic', mid: 'Mixed', premium: 'Metal' },
  { feature: 'Hot Soup Function', budget: false, mid: false, premium: true },
]

export function Comparison() {
  const [activeCategory, setActiveCategory] = useState<'budget' | 'mid' | 'premium'>('mid')

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="text-primary mx-auto" size={20} />
      ) : (
        <X className="text-muted-foreground mx-auto" size={20} />
      )
    }
    return <span className="text-sm">{value}</span>
  }

  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Side by Side</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-4">Compare Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how different price ranges stack up. Make an informed decision based on your budget and needs.
          </p>
        </div>

        <Card className="overflow-hidden rounded-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Budget</th>
                  <th className="text-center p-4 font-semibold bg-primary text-primary-foreground">Mid-Range</th>
                  <th className="text-center p-4 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">{renderValue(row.budget)}</td>
                    <td className="p-4 text-center bg-muted/50">{renderValue(row.mid)}</td>
                    <td className="p-4 text-center">{renderValue(row.premium)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-muted/30 text-center border-t border-border">
            <Button className="rounded-sm">View Detailed Comparison</Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
