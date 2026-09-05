"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="relative w-full max-w-md">
      {/* 1px top highlight glow */}
      <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="rounded-xl border border-border bg-card/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">Welcome Back</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Sign in to access your service dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
            >
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
            <label
              htmlFor="password"
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
            >
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
                autoComplete="current-password"
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

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => setRemember((r) => !r)}
              className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-pressed={remember}
            >
              <span
                className={`flex size-4 items-center justify-center rounded-[5px] border transition-all ${
                  remember ? "border-primary bg-primary" : "border-border bg-input/60"
                }`}
              >
                {remember && (
                  <svg viewBox="0 0 12 12" className="size-3 text-primary-foreground" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 6.5L5 9L9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              Remember my device
            </button>

            <a
              href="#"
              className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="group mt-2 h-12 w-full rounded-lg bg-primary text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
          >
            Sign In
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        <div className="mt-7 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Secure Access</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
