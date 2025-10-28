import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a href="#reviews" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
          </nav>
          <Button size="lg" className="font-semibold">
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  )
}
