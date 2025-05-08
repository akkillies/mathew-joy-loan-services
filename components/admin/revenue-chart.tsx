"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    revenue: 120000,
  },
  {
    name: "Feb",
    revenue: 180000,
  },
  {
    name: "Mar",
    revenue: 150000,
  },
  {
    name: "Apr",
    revenue: 225000,
  },
  {
    name: "May",
    revenue: 300000,
  },
  {
    name: "Jun",
    revenue: 375000,
  },
  {
    name: "Jul",
    revenue: 420000,
  },
  {
    name: "Aug",
    revenue: 390000,
  },
  {
    name: "Sep",
    revenue: 450000,
  },
  {
    name: "Oct",
    revenue: 480000,
  },
  {
    name: "Nov",
    revenue: 520000,
  },
  {
    name: "Dec",
    revenue: 580000,
  },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value / 1000}k`}
        />
        <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString("en-IN")}`, "Revenue"]} />
        <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b98133" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
