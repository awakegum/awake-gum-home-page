import { Zap, Clock, Smile, Leaf } from "lucide-react"
import { benefitsContent } from "@/content/benefits"

const iconMap = {
  "Instant Energy": Zap,
  "Sustained Release": Clock,
  "Great Taste": Smile,
  "Sugar-Free": Leaf,
}

export function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {benefitsContent.heading}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{benefitsContent.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsContent.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.title as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
