"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Card } from "@/components/ui/card"

export function CapitalRemaining({ refreshTrigger }: { refreshTrigger?: number }) {
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
        console.error("Error fetching capital data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [refreshTrigger])

  const remaining = totalInvested - totalExpenses
  const remainingPercentage = totalInvested > 0 ? ((remaining / totalInvested) * 100).toFixed(1) : "0"

  if (loading) {
    return (
      <Card className="p-8 md:p-12">
        <p className="text-center text-muted-foreground">Loading...</p>
      </Card>
    )
  }

  return (
    <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary">
      <div className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Total Capital Remaining</h2>
        <div className="space-y-2">
          <p className="text-5xl md:text-6xl font-bold text-primary">${remaining.toLocaleString()}</p>
          <p className="text-lg text-muted-foreground">{remainingPercentage}% of total invested capital</p>
        </div>
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Investor Money (${totalInvested.toLocaleString()}) - Expenses (${totalExpenses.toLocaleString()})
          </p>
        </div>
      </div>
    </Card>
  )
}
