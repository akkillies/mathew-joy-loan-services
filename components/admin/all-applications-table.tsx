"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, FileText, Eye, CheckCircle, XCircle } from "lucide-react"

interface Application {
  id: string
  loan_type: string
  loan_amount: number
  status: string
  created_at: string
  profiles: {
    first_name: string
    last_name: string
    email: string
    phone: string
  }
}

interface AllApplicationsTableProps {
  applications: Application[]
  showViewAll?: boolean
}

export function AllApplicationsTable({ applications, showViewAll = false }: AllApplicationsTableProps) {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const sortedApplications = [...applications].sort((a, b) => {
    if (!sortColumn) return 0

    if (sortColumn === "customer") {
      const aValue = `${a.profiles.first_name} ${a.profiles.last_name}`
      const bValue = `${b.profiles.first_name} ${b.profiles.last_name}`

      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }
    }

    const aValue = a[sortColumn as keyof Application]
    const bValue = b[sortColumn as keyof Application]

    if (sortDirection === "asc") {
      return aValue < bValue ? -1 : 1
    } else {
      return aValue > bValue ? -1 : 1
    }
  })

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Rejected
          </Badge>
        )
      case "active":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Active
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Completed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => handleSort("customer")}>
                Customer
                {sortColumn === "customer" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("loan_type")}>
                Loan Type
                {sortColumn === "loan_type" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("loan_amount")}>
                Amount
                {sortColumn === "loan_amount" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                Status
                {sortColumn === "status" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("created_at")}>
                Date Applied
                {sortColumn === "created_at" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedApplications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No applications found.
                </TableCell>
              </TableRow>
            ) : (
              sortedApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application.profiles.first_name} {application.profiles.last_name}
                  </TableCell>
                  <TableCell>{application.loan_type}</TableCell>
                  <TableCell>₹ {application.loan_amount.toLocaleString("en-IN")}</TableCell>
                  <TableCell>{getStatusBadge(application.status)}</TableCell>
                  <TableCell>{new Date(application.created_at).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          <span>View Documents</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {application.status === "pending" && (
                          <>
                            <DropdownMenuItem>
                              <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                              <span>Approve</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <XCircle className="mr-2 h-4 w-4 text-red-600" />
                              <span>Reject</span>
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {showViewAll && (
        <div className="mt-4 text-center">
          <Button variant="outline" asChild>
            <a href="/admin/dashboard?tab=applications">View all applications</a>
          </Button>
        </div>
      )}
    </div>
  )
}
