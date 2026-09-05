"use client"

import { Menu, Bell } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Open menu"
        >
          <Menu className="size-4.5" />
        </button>

        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="size-5 text-primary" fill="none" aria-hidden="true">
            <path
              d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11m-14 0h14m-14 0a2 2 0 00-2 2v3a1 1 0 001 1h1m14-6a2 2 0 012 2v3a1 1 0 01-1 1h-1m-13 0v1.5a1 1 0 01-1 1H6a1 1 0 01-1-1V18m2 0h10m0 0v1.5a1 1 0 001 1h1a1 1 0 001-1V18M7.5 14.5h.01M16.5 14.5h.01"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-serif text-sm font-bold uppercase tracking-[0.18em] text-foreground">
            Classic Auto Garage
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="relative flex size-9 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Notifications, 1 unread"
          >
            <Bell className="size-4.5" />
            <span className="absolute -right-1 -top-1 flex size-4.5 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-semibold text-primary-foreground ring-2 ring-background">
              1
            </span>
          </button>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card/60 font-serif text-xs font-bold tracking-wider text-foreground transition-colors hover:border-primary/60"
            aria-label="Profile"
          >
            JD
          </button>
        </div>
      </div>
    </header>
  )
}
