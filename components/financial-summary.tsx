"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Card } from "@/components/ui/card"

export function FinancialSummary({ refreshTrigger }: { refreshTrigger?: number }) {
  const [totalInvested, setTotalInvested] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = getSupabaseClient()

        const { data: investors } = await supabase.from("investors").select("invested_money")
        const { data: expenses } = await supabase.from("expenses").select("price")

        const invested = investors?.reduce((sum, inv) => sum + (inv.invested_money || 0), 0) || 0
        const spent = expenses?.reduce((sum, exp) => sum + (exp.price || 0), 0) || 0

        setTotalInvested(invested)
        setTotalExpenses(spent)
      } catch (err) {
        console.error("Error fetching financial data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [refreshTrigger])

  const balance = totalInvested - totalExpenses
  const burnRate = totalInvested > 0 ? ((totalExpenses / totalInvested) * 100).toFixed(1) : "0"

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <p className="text-muted-foreground">Loading...</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">Total Invested</p>
          <p className="text-3xl font-bold text-primary">${totalInvested.toLocaleString()}</p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">Total Expenses</p>
          <p className="text-3xl font-bold text-destructive">${totalExpenses.toLocaleString()}</p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">Current Balance</p>
          <p className={`text-3xl font-bold ${balance >= 0 ? "text-accent" : "text-destructive"}`}>
            ${balance.toLocaleString()}
          </p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">Burn Rate</p>
          <p className="text-3xl font-bold text-chart-4">{burnRate}%</p>
        </div>
      </Card>
    </div>
  )
}
