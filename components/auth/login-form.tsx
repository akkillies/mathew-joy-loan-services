"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from "sonner"

interface Profile {
  id: string
  email: string
  role: 'admin' | 'customer'
}

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // First sign in the user
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (loginError) {
        throw loginError
      }

      // Wait for session to be available
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Get the current user
      const { data: { user }, error: userError } = await supabase.auth.getUser()

      if (userError) {
        throw userError
      }

      if (!user) {
        throw new Error('No user data available after login')
      }

      // Try to get the profile
      const { data: existingProfile, error: profileError } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)
        .single()

      if (profileError) {
        throw profileError
      }

      if (existingProfile) {
        // Redirect based on role
        if (existingProfile.role === 'admin') {
          router.push('/admin/dashboard')
        } else if (existingProfile.role === 'customer') {
          router.push('/dashboard')
        } else {
          throw new Error('Invalid user role')
        }
        return
      }

      // If profile doesn't exist, create it with admin role
      const { error: createError, data: createdProfile } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          email: email,
          role: email.toLowerCase() === 'admin@example.com' ? 'admin' : 'customer'
        })
        .select()
        .single()

      if (createError) {
        console.error('Error creating profile:', createError)
        // If profile creation fails, try to get it again (it might exist)
        const { data: existingProfile } = await supabase
          .from('profiles')
          .select()
          .eq('id', user.id)
          .single()

        if (existingProfile) {
          // Redirect based on role
          if (existingProfile.role === 'admin') {
            router.push('/admin/dashboard')
          } else if (existingProfile.role === 'customer') {
            router.push('/dashboard')
          } else {
            throw new Error('Invalid user role')
          }
          return
        }
        throw createError
      }

      // Redirect based on role
      if (createdProfile?.role === 'admin') {
        router.push('/admin/dashboard')
      } else if (createdProfile?.role === 'customer') {
        router.push('/dashboard')
      } else {
        throw new Error('Invalid user role')
      }

      // Redirect based on role
      if (profile?.role === 'admin') {
        router.push('/admin/dashboard')
      } else if (profile?.role === 'customer') {
        router.push('/dashboard')
      } else {
        throw new Error('Invalid user role')
      }

      toast({
        title: "Success",
        description: "You have been logged in successfully",
      })
    } catch (error: any) {
      console.error('Login error:', error)
      toast({
        title: "Error",
        description: error.message || "An error occurred during login",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}
