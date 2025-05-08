"use client"

import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RecentDocumentsProps {
  showAll?: boolean
}

export function RecentDocuments({ showAll = false }: RecentDocumentsProps) {
  // Mock data for documents
  const documents = [
    {
      id: "1",
      name: "ID Proof",
      type: "Aadhaar Card",
      date: "2023-05-15",
      status: "verified",
    },
    {
      id: "2",
      name: "Income Proof",
      type: "Salary Slip",
      date: "2023-05-14",
      status: "verified",
    },
    {
      id: "3",
      name: "Address Proof",
      type: "Utility Bill",
      date: "2023-05-13",
      status: "pending",
    },
    {
      id: "4",
      name: "Bank Statement",
      type: "PDF",
      date: "2023-05-12",
      status: "verified",
    },
    {
      id: "5",
      name: "Property Documents",
      type: "PDF",
      date: "2023-05-11",
      status: "pending",
    },
  ]

  const displayDocuments = showAll ? documents : documents.slice(0, 3)

  return (
    <div className="space-y-4">
      {displayDocuments.map((doc) => (
        <div key={doc.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-md bg-gray-100 p-2">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">{doc.name}</p>
              <p className="text-xs text-muted-foreground">{doc.type}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`h-2 w-2 rounded-full ${doc.status === "verified" ? "bg-green-500" : "bg-yellow-500"}`} />
            <p className="text-xs text-muted-foreground">{doc.status === "verified" ? "Verified" : "Pending"}</p>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      {!showAll && documents.length > 3 && (
        <Button variant="link" className="w-full">
          View all documents
        </Button>
      )}
    </div>
  )
}
