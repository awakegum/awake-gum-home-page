"use client"

import type React from "react"

import { useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface AddExpenseFormProps {
  onExpenseAdded: () => void
}

export function AddExpenseForm({ onExpenseAdded }: AddExpenseFormProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      console.log("[v0] Attempting to add expense:", { name, description, price })
      const supabase = getSupabaseClient()
      const { data, error } = await supabase
        .from("expenses")
        .insert([{ name, description, price: Number.parseFloat(price) }])

      console.log("[v0] Response:", { data, error })
      if (error) throw error

      setName("")
      setDescription("")
      setPrice("")
      onExpenseAdded()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to add expense"
      console.log("[v0] Error caught:", errorMessage)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
      <h3 className="text-lg font-bold text-destructive mb-4">Add New Expense</h3>
      {error && (
        <div className="text-destructive text-sm mb-4 p-3 bg-destructive/10 rounded border border-destructive/20">
          <p className="font-semibold mb-1">Error:</p>
          <p className="break-words">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Expense Name</label>
          <Input
            type="text"
            placeholder="Enter expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-destructive/20 focus:border-destructive"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">Description</label>
          <Input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-destructive/20 focus:border-destructive"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">Amount</label>
          <Input
            type="number"
            placeholder="Enter amount"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border-destructive/20 focus:border-destructive"
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full bg-destructive hover:bg-destructive/90">
          {loading ? "Adding..." : "Add Expense"}
        </Button>
      </form>
    </Card>
  )
}
