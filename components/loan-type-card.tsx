import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface LoanTypeCardProps {
  icon: ReactNode
  title: string
  description: string
  children?: ReactNode
}

export default function LoanTypeCard({ icon, title, description, children }: LoanTypeCardProps) {
  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-base">{description}</CardDescription>
        {children || (
          <Link
            href="#contact"
            className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800"
          >
            Learn More <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
