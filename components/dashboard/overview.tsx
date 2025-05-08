"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    pending: 2,
    approved: 1,
    active: 0,
  },
  {
    name: "Feb",
    pending: 1,
    approved: 2,
    active: 1,
  },
  {
    name: "Mar",
    pending: 0,
    approved: 1,
    active: 2,
  },
  {
    name: "Apr",
    pending: 1,
    approved: 0,
    active: 3,
  },
  {
    name: "May",
    pending: 2,
    approved: 1,
    active: 2,
  },
  {
    name: "Jun",
    pending: 1,
    approved: 2,
    active: 3,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="pending" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        <Bar dataKey="approved" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="active" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
