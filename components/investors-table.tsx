"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Card } from "@/components/ui/card"

interface Investor {
  id: number
  investor: string
  invested_money: number
}

export function InvestorsTable({ refreshTrigger }: { refreshTrigger?: number }) {
  const [investors, setInvestors] = useState<Investor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const supabase = getSupabaseClient()
        const { data, error } = await supabase.from("investors").select("*").order("id", { ascending: true })

        if (error) throw error
        setInvestors(data || [])
      } catch (err) {
        console.error("Error fetching investors:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchInvestors()
  }, [refreshTrigger])

  const totalInvested = investors.reduce((sum, investor) => sum + investor.invested_money, 0)

  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Investors</h2>
        <Card className="p-6">
          <p className="text-muted-foreground">Loading investors...</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Investors</h2>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-6 py-3 text-left text-sm font-semibold">Investor Name</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Investment Amount</th>
              </tr>
            </thead>
            <tbody>
              {investors.map((investor) => (
                <tr key={investor.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm">{investor.investor}</td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    ${investor.invested_money.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-primary/10">
                <td className="px-6 py-4 text-sm font-semibold">Total Invested</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-primary">
                  ${totalInvested.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>
    </div>
  )
}
