"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Card } from "@/components/ui/card"
import { DescriptionTooltip } from "@/components/description-tooltip"

interface Expense {
  id: number
  name: string
  description: string
  price: number
}

export function ExpensesTable({ refreshTrigger }: { refreshTrigger?: number }) {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const supabase = getSupabaseClient()
        const { data, error } = await supabase.from("expenses").select("*").order("id", { ascending: true })

        if (error) throw error
        setExpenses(data || [])
      } catch (err) {
        console.error("Error fetching expenses:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchExpenses()
  }, [refreshTrigger])

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.price, 0)

  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Expenses</h2>
        <Card className="p-6">
          <p className="text-muted-foreground">Loading expenses...</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Expenses</h2>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm">{expense.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <DescriptionTooltip preview={expense.description} full={expense.description} />
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">${expense.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-destructive/10">
                <td colSpan={2} className="px-6 py-4 text-sm font-semibold">
                  Total Expenses
                </td>
                <td className="px-6 py-4 text-right text-sm font-bold text-destructive">
                  ${totalExpenses.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>
    </div>
  )
}
