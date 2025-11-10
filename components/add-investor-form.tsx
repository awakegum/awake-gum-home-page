"use client"

import type React from "react"

import { useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface AddInvestorFormProps {
  onInvestorAdded: () => void
}

export function AddInvestorForm({ onInvestorAdded }: AddInvestorFormProps) {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      console.log("[v0] Attempting to add investor:", { name, amount })
      const supabase = getSupabaseClient()
      const { data, error } = await supabase
        .from("investors")
        .insert([{ investor: name, invested_money: Number.parseInt(amount) }])

      console.log("[v0] Response:", { data, error })
      if (error) throw error

      setName("")
      setAmount("")
      onInvestorAdded()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to add investor"
      console.log("[v0] Error caught:", errorMessage)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <h3 className="text-lg font-bold text-primary mb-4">Add New Investor</h3>
      {error && (
        <div className="text-destructive text-sm mb-4 p-3 bg-destructive/10 rounded border border-destructive/20">
          <p className="font-semibold mb-1">Error:</p>
          <p className="break-words">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Investor Name</label>
          <Input
            type="text"
            placeholder="Enter investor name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-primary/20 focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">Investment Amount</label>
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="border-primary/20 focus:border-primary"
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
          {loading ? "Adding..." : "Add Investor"}
        </Button>
      </form>
    </Card>
  )
}
