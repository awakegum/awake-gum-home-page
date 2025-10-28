import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <circle cx="20" cy="20" r="18" fill="currentColor" />
        <path d="M20 8L23.5 15.5L31 16.5L25.5 22L27 29.5L20 25.5L13 29.5L14.5 22L9 16.5L16.5 15.5L20 8Z" fill="white" />
        <circle cx="20" cy="20" r="6" fill="white" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
      <span className="text-2xl font-bold text-foreground">Awake Gum</span>
    </Link>
  )
}
