import { Zap } from "lucide-react"
import { heroContent } from "@/content/hero"

export function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">{heroContent.badge.text}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance leading-tight">
            {heroContent.heading.main} <span className="text-primary">{heroContent.heading.highlight}</span>{" "}
            {heroContent.heading.suffix}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            {heroContent.description}
          </p>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
            <img
              src={heroContent.image.src || "/placeholder.svg"}
              alt={heroContent.image.alt}
              className="relative mx-auto rounded-2xl shadow-2xl max-w-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
