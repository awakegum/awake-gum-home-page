"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InvestorsTable } from "@/components/investors-table"
import { ExpensesTable } from "@/components/expenses-table"
import { FinancialSummary } from "@/components/financial-summary"
import { CapitalRemaining } from "@/components/capital-remaining"
import { AddInvestorForm } from "@/components/add-investor-form"
import { AddExpenseForm } from "@/components/add-expense-form"

export default function InvestorsPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleInvestorAdded = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  const handleExpenseAdded = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Financial Overview</h1>
            <p className="text-muted-foreground text-lg">Track investments and expenses at a glance</p>
          </div>

          <FinancialSummary refreshTrigger={refreshTrigger} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <InvestorsTable refreshTrigger={refreshTrigger} />
            <ExpensesTable refreshTrigger={refreshTrigger} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AddInvestorForm onInvestorAdded={handleInvestorAdded} />
            <AddExpenseForm onExpenseAdded={handleExpenseAdded} />
          </div>

          <CapitalRemaining refreshTrigger={refreshTrigger} />
        </section>
      </div>
      <Footer />
    </main>
  )
}
