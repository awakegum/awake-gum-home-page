import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { Products } from "@/components/products"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <HowItWorks />
      <Footer />
    </main>
  )
}
