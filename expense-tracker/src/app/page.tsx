"use client";

import { useState } from "react";

import { ExpenseForm } from "@/components/expense-form";
import { ExpenseList } from "@/components/expense-list";
import { SummaryDashboard } from "@/components/summary-dashboard";
import { MOCK_EXPENSES } from "@/data/mock-expenses";
import type { Expense } from "@/lib/expenses";

// Generate a unique id for newly added expenses without an external dependency.
function makeId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `exp-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>(MOCK_EXPENSES);

  function handleAdd(expense: Omit<Expense, "id">) {
    setExpenses((prev) => [{ ...expense, id: makeId() }, ...prev]);
  }

  function handleDelete(id: string) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Expense Tracker</h1>
        <p className="mt-1 text-muted-foreground">
          Log your spending and keep an eye on where your money goes.
        </p>
      </header>

      <div className="space-y-6">
        <SummaryDashboard expenses={expenses} />
        <ExpenseForm onAdd={handleAdd} />
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </div>
    </main>
  );
}
