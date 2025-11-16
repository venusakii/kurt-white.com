import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedReviews } from '@/components/featured-reviews'
import { Comparison } from '@/components/comparison'
import { BuyingGuide } from '@/components/buying-guide'
import { Categories } from '@/components/categories'
import { Testimonials } from '@/components/testimonials'
import { Newsletter } from '@/components/newsletter'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedReviews />
      <Comparison />
      <BuyingGuide />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
