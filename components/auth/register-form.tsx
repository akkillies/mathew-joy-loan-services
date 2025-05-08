"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create the user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
          },
        },
      })

      if (authError) {
        if (authError.status === 429) {
          throw new Error('Too many attempts. Please wait a moment and try again.');
        }
        throw authError;
      }

      // Create a profile record in the profiles table
      if (authData.user) {
        try {
          // First check if the profiles table exists
          const { error: tableError } = await supabase.rpc('check_table_exists', {
            table_name: 'profiles'
          })

          if (tableError) {
            console.error('Profile table check error:', tableError);
            // If table check fails but auth was successful, still redirect to login
            toast({
              title: "Registration successful",
              description: "Account created successfully but profile setup failed. Please contact support.",
              variant: "destructive"
            });
            router.push("/auth/login");
            return;
          }

          // Try to create profile
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              id: authData.user.id,
              first_name: firstName,
              last_name: lastName,
              email: email,
              phone: phone,
              role: 'customer', // Default role
              created_at: new Date().toISOString()
            })
            .select()

          if (profileError) {
            console.error('Profile creation error:', profileError);
            // If profile creation fails but auth was successful, still redirect to login
            toast({
              title: "Registration successful",
              description: "Account created successfully but profile setup failed. Please contact support.",
              variant: "destructive"
            });
            router.push("/auth/login");
            return;
          }

          // If profile creation succeeds
          toast({
            title: "Registration successful",
            description: "Please check your email to verify your account. You'll receive a verification email shortly.",
            duration: 10000
          });
          router.push("/auth/login");
        } catch (error) {
          console.error('Profile setup error:', error);
          // If profile setup fails but auth was successful, still redirect to login
          toast({
            title: "Registration successful",
            description: "Account created successfully but profile setup failed. Please contact support.",
            variant: "destructive"
          });
          router.push("/auth/login");
        }
      }

      router.push("/auth/login")
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message || "There was an error creating your account",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create account"}
      </Button>
    </form>
  )
}
