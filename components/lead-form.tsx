"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface LeadFormProps {
  onSuccess?: () => void
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      // Collect form data
      const formData = new FormData(event.currentTarget)
      const data = {
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        loanType: formData.get("loan-type"),
        loanAmount: formData.get("loan-amount"),
        message: formData.get("message"),
        createdAt: new Date().toISOString(),
      }

      // Submit to Supabase (this would be a server action in a real implementation)
      // const { error } = await submitLeadToSupabase(data)

      // if (error) throw new Error(error.message)

      // Simulate form submission for now
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Form submitted successfully!",
        description: "Our team will contact you shortly.",
      })

      // Reset form using ref
      if (formRef.current) {
        formRef.current.reset()
      }

      // Call onSuccess callback if provided
      if (onSuccess) onSuccess()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="first-name">First Name *</Label>
          <Input
            type="text"
            id="first-name"
            name="first-name"
            required
            placeholder="John"
          />
        </div>
        <div>
          <Label htmlFor="last-name">Last Name *</Label>
          <Input
            type="text"
            id="last-name"
            name="last-name"
            required
            placeholder="Doe"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="9876543210"
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="loan-type">Loan Type *</Label>
          <Select name="loan-type">
            <SelectTrigger>
              <SelectValue placeholder="Select loan type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal Loan</SelectItem>
              <SelectItem value="business">Business Loan</SelectItem>
              <SelectItem value="home">Home Loan</SelectItem>
              <SelectItem value="car">Car Loan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="loan-amount">Loan Amount *</Label>
          <Input
            type="number"
            id="loan-amount"
            name="loan-amount"
            required
            placeholder="100000"
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Any additional information..."
          />
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
      <p className="text-center text-xs text-gray-500">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}
