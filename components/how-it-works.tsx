import { howItWorksContent } from "@/content/how-it-works"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {howItWorksContent.heading}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{howItWorksContent.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {howItWorksContent.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 text-center h-full">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < howItWorksContent.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-8 h-px bg-gradient-to-r from-border to-border/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
