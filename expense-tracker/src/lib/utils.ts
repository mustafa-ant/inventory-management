import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Construct the Intl formatters once — building them is far costlier than
// calling .format(), and these run on every render and per list row.
const CURRENCY_FORMAT = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function formatCurrency(amount: number): string {
  return CURRENCY_FORMAT.format(amount);
}

export function formatDate(date: string): string {
  // Append midnight so the YYYY-MM-DD string parses as local time, not UTC
  // (which would shift the day in negative-UTC locales).
  return DATE_FORMAT.format(new Date(date + "T00:00:00"));
}
