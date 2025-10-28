export function SocialProof() {
  const stats = [
    { value: "500K+", label: "Happy Customers" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "10M+", label: "Pieces Sold" },
    { value: "80mg", label: "Caffeine Per Piece" },
  ]

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
