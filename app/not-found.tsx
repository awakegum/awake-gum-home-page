import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">Error 404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Product Not Found</h2>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
