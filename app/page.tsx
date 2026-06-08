import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { Gallery } from '@/components/gallery'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { CallToAction } from '@/components/call-to-action'
import { Footer } from '@/components/footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
