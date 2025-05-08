"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"
import { Session } from "@supabase/supabase-js"
import { toast } from "@/components/ui/use-toast"

interface SupabaseProviderProps {
  children: React.ReactNode
}

export function SupabaseProvider({ children }: SupabaseProviderProps) {
  const [session, setSession] = useState<Session | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        throw error
      }

      // Clear any local storage that might be used
      localStorage.removeItem('sb-eqfjqfifvlftudflzlhs-auth-token')
      
      // Redirect to home page
      window.location.href = "/"
    } catch (error) {
      console.error('Sign out error:', error)
      // Show toast notification
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <div>
      {children}
    </div>
  )
}
