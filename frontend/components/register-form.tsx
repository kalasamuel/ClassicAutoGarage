"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Lock, Mail, User, Phone, ArrowLeft, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="relative w-full max-w-md">
      {/* 1px top highlight glow */}
      <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="rounded-xl border border-border bg-card/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back
        </Link>

        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">Create Your Account</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Join the garage and register your vehicle.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Full Name
            </label>
            <div className="group relative">
              <User
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                aria-hidden="true"
              />
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Phone Number
            </label>
            <div className="group relative">
              <Phone
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                aria-hidden="true"
              />
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(555) 000-0000"
                className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Email Address
            </label>
            <div className="group relative">
              <Mail
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                aria-hidden="true"
              />
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Password
            </label>
            <div className="group relative">
              <Lock
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                aria-hidden="true"
              />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-11 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Confirm Password
            </label>
            <div className="group relative">
              <Lock
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                aria-hidden="true"
              />
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-11 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="group mt-2 h-12 w-full rounded-lg bg-primary text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
          >
            Create Account &amp; Add Vehicle
            <Car className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          By signing up, you agree to our{" "}
          <a href="#" className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  )
}
