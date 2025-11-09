"use client"

import { useState } from "react"
import { HelpCircle } from "lucide-react"

interface DescriptionTooltipProps {
  preview: string
  full: string
}

export function DescriptionTooltip({ preview, full }: DescriptionTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  const truncatedPreview = preview.length > 30 ? preview.substring(0, 30) + "..." : preview

  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground">{truncatedPreview}</span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="text-primary hover:text-primary/80 transition-colors"
          title={full}
        >
          <HelpCircle size={16} />
        </button>
        {isOpen && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-background border border-border rounded-lg p-3 text-sm shadow-lg z-10">
            {full}
          </div>
        )}
      </div>
    </div>
  )
}
