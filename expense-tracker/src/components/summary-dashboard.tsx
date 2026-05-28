"use client";

import { useMemo } from "react";
import { TrendingUp, Receipt, PieChart, CalendarDays } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import type { Expense } from "@/lib/expenses";

interface SummaryDashboardProps {
  expenses: Expense[];
}

export function SummaryDashboard({ expenses }: SummaryDashboardProps) {
  const stats = useMemo(() => {
    // Single pass: accumulate the total and per-category spend together.
    let total = 0;
    const byCategory = new Map<string, number>();
    for (const e of expenses) {
      total += e.amount;
      byCategory.set(e.category, (byCategory.get(e.category) ?? 0) + e.amount);
    }

    const count = expenses.length;
    const average = count > 0 ? total / count : 0;

    // Find the category with the highest cumulative spend.
    let topCategory = "—";
    let topAmount = 0;
    for (const [category, amount] of byCategory) {
      if (amount > topAmount) {
        topAmount = amount;
        topCategory = category;
      }
    }

    return { total, count, average, topCategory, topAmount };
  }, [expenses]);

  const cards = [
    {
      label: "Total Spent",
      value: formatCurrency(stats.total),
      sub: `Across ${stats.count} ${stats.count === 1 ? "expense" : "expenses"}`,
      icon: TrendingUp,
    },
    {
      label: "Transactions",
      value: String(stats.count),
      sub: "Logged this period",
      icon: Receipt,
    },
    {
      label: "Average Expense",
      value: formatCurrency(stats.average),
      sub: "Per transaction",
      icon: CalendarDays,
    },
    {
      label: "Top Category",
      value: stats.topCategory,
      sub:
        stats.topAmount > 0
          ? `${formatCurrency(stats.topAmount)} spent`
          : "No spending yet",
      icon: PieChart,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.label}
            </CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="truncate text-2xl font-bold">{card.value}</div>
            <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
