"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LeadForm from "@/components/lead-form"

interface LeadModalProps {
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  buttonClassName?: string
  children: React.ReactNode
}

export default function LeadModal({
  buttonVariant = "default",
  buttonClassName = "",
  children,
}: LeadModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={buttonClassName}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Apply for a Loan</DialogTitle>
          <DialogDescription className="text-center">
            Fill out the form below and our team will contact you shortly to discuss your loan options.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <LeadForm onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
