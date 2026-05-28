import type { Expense } from "@/lib/expenses";

// Seed data so the dashboard and table are populated on first load.
// All amounts and dates are fictional — no backend involved.
export const MOCK_EXPENSES: Expense[] = [
  {
    id: "exp-001",
    amount: 1850,
    category: "Housing",
    description: "Monthly rent",
    date: "2026-05-01",
  },
  {
    id: "exp-002",
    amount: 64.32,
    category: "Food & Dining",
    description: "Weekly groceries",
    date: "2026-05-03",
  },
  {
    id: "exp-003",
    amount: 42.5,
    category: "Transportation",
    description: "Gas fill-up",
    date: "2026-05-05",
  },
  {
    id: "exp-004",
    amount: 15.99,
    category: "Entertainment",
    description: "Streaming subscription",
    date: "2026-05-06",
  },
  {
    id: "exp-005",
    amount: 120,
    category: "Utilities",
    description: "Electricity bill",
    date: "2026-05-08",
  },
  {
    id: "exp-006",
    amount: 38.75,
    category: "Food & Dining",
    description: "Dinner with friends",
    date: "2026-05-11",
  },
  {
    id: "exp-007",
    amount: 89.99,
    category: "Shopping",
    description: "New running shoes",
    date: "2026-05-14",
  },
  {
    id: "exp-008",
    amount: 25,
    category: "Healthcare",
    description: "Pharmacy co-pay",
    date: "2026-05-18",
  },
  {
    id: "exp-009",
    amount: 310.45,
    category: "Travel",
    description: "Train tickets",
    date: "2026-05-22",
  },
  {
    id: "exp-010",
    amount: 9.5,
    category: "Other",
    description: "Parking meter",
    date: "2026-05-25",
  },
];
