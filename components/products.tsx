import Link from "next/link"
import { products } from "@/content/products"
import { productsSectionContent } from "@/content/products-section"

export function Products() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              {productsSectionContent.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {productsSectionContent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group block flex flex-col"
              >
                <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{product.flavor}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{product.description}</p>
                <div className="flex items-center justify-between text-sm mt-auto border-t border-border/50 pt-2">
                  <span className="text-muted-foreground">{product.pieces} pieces</span>
                  <span className="font-semibold text-primary">{product.caffeine}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
