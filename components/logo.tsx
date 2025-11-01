"use client"

import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        <Image
          src="/awake-gum-icon.png"
          alt="Awake Gum Logo"
          width={64}
          height={64}
          className="rounded-full relative z-10 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-black text-foreground group-hover:text-primary transition-colors duration-300 leading-none">
          Awake
        </span>
        <span className="text-sm font-bold tracking-widest text-primary uppercase">Gum</span>
      </div>
    </Link>
  )
}
