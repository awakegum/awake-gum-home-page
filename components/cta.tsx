import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Ready to wake up your routine?
          </h2>
          <p className="text-lg sm:text-xl mb-10 opacity-90 text-pretty leading-relaxed max-w-2xl mx-auto">
            {"Join 500,000+ people who have ditched coffee for a better way to energize."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold group">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Try Risk-Free
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-75">{"Free shipping on orders over $25 • 30-day money-back guarantee"}</p>
        </div>
      </div>
    </section>
  )
}
