export const CATEGORIES = [
  "Food & Dining",
  "Transportation",
  "Housing",
  "Utilities",
  "Entertainment",
  "Healthcare",
  "Shopping",
  "Travel",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Expense {
  id: string;
  amount: number;
  category: Category;
  description: string;
  date: string; // ISO date string (YYYY-MM-DD)
}

// Tailwind utility classes used to color-code category badges.
export const CATEGORY_STYLES: Record<Category, string> = {
  "Food & Dining": "bg-orange-100 text-orange-700",
  Transportation: "bg-blue-100 text-blue-700",
  Housing: "bg-purple-100 text-purple-700",
  Utilities: "bg-cyan-100 text-cyan-700",
  Entertainment: "bg-pink-100 text-pink-700",
  Healthcare: "bg-red-100 text-red-700",
  Shopping: "bg-emerald-100 text-emerald-700",
  Travel: "bg-amber-100 text-amber-700",
  Other: "bg-slate-100 text-slate-700",
};
