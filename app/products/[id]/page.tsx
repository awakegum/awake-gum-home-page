import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Zap, Package } from "lucide-react"
import { products } from "@/content/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all flavors
          </Link>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4 w-fit">
                {product.flavor}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                {product.longDescription || product.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-muted-foreground">Caffeine</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{product.caffeine}</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-muted-foreground">Pack Size</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{product.pieces} pieces</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Why Choose {product.name}?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      Fast-acting caffeine delivers energy in minutes, not hours
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      Portable and convenient - perfect for on-the-go energy
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      No sugar crash or jitters, just smooth sustained energy
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      Long-lasting flavor that keeps your breath fresh
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Coming Soon:</strong> Shop functionality will be available
                  shortly. Stay tuned to purchase your favorite flavors!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
