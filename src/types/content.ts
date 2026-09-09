import type { LucideIcon } from 'lucide-react'

export type ExplorerItem = {
  id: string
  title: string
  eyebrow?: string
  summary?: string
  fields?: { label: string; text: string }[]
  bullets?: string[]
  icon?: LucideIcon
}

export type Metric = {
  value: string
  label: string
  detail: string
  category: string
}

export type DashboardView = {
  id: string
  title: string
  summary: string
  metrics: { label: string; value: string; context: string }[]
  chart: { label: string; value: number }[]
}
