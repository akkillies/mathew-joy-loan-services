"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    applications: 12,
    approvals: 8,
    revenue: 120000,
  },
  {
    name: "Feb",
    applications: 18,
    approvals: 12,
    revenue: 180000,
  },
  {
    name: "Mar",
    applications: 15,
    approvals: 10,
    revenue: 150000,
  },
  {
    name: "Apr",
    applications: 22,
    approvals: 15,
    revenue: 225000,
  },
  {
    name: "May",
    applications: 28,
    approvals: 20,
    revenue: 300000,
  },
  {
    name: "Jun",
    applications: 32,
    approvals: 25,
    revenue: 375000,
  },
]

export function AdminOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="applications" stroke="#f59e0b" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="approvals" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
