"use client"

import { ChevronLeft, BadgeCheck, FileDown, Wrench } from "lucide-react"
import Link from "next/link"

type ServiceEntry = {
  date: string
  title: string
  km: string
}

const timeline: { year: string; entries: ServiceEntry[] }[] = [
  {
    year: "2026",
    entries: [
      { date: "08/2026", title: "Engine Service & Oil Change", km: "124,000" },
      { date: "06/2026", title: "Brake Pad & Rotor Replacement", km: "121,500" },
      { date: "04/2026", title: "Diagnostic Computer Scan", km: "118,000" },
      { date: "02/2026", title: "Heavy Duty Battery Replacement", km: "115,200" },
      { date: "01/2026", title: "Suspension Bushing Repair", km: "112,000" },
    ],
  },
  {
    year: "2025",
    entries: [
      { date: "11/2025", title: "Transmission Fluid Service", km: "105,000" },
      { date: "07/2025", title: "4-Wheel Alignment & Balancing", km: "98,000" },
    ],
  },
]

export function VehiclePassport() {
  return (
    <section
      aria-labelledby="passport-heading"
      className="relative w-full overflow-hidden rounded-xl border border-border bg-card/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
    >
      {/* 1px top highlight glow */}
      <span className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border px-5 py-4">
        <Link
          href="/dashboard"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          aria-label="Back to dashboard"
        >
          <ChevronLeft className="size-4" />
        </Link>
        <h1
          id="passport-heading"
          className="font-serif text-base font-bold uppercase tracking-[0.14em] text-foreground text-balance"
        >
          Verified Vehicle Passport
        </h1>
      </header>

      <div className="px-5 py-5">
        {/* Vehicle identity */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.12em] text-foreground">
            Toyota Harrier
          </h2>
          <p className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">VIN:</span>
            <span className="font-mono text-xs text-foreground">JTEHH20XXXXXX</span>
          </p>
          <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-success/25 bg-success/10 px-3 py-1.5">
            <BadgeCheck className="size-3.5 text-success" />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-success">
              Classic Auto Verified Service History
            </span>
          </div>
        </div>

        {/* Service timeline */}
        <div className="mt-6">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Service Timeline
          </h3>

          <div className="flex flex-col gap-6">
            {timeline.map((group) => (
              <div key={group.year}>
                <p className="mb-3 font-mono text-sm font-bold tracking-widest text-primary">
                  {group.year}
                </p>

                <ol className="relative ml-1 border-l border-border pl-5">
                  {group.entries.map((entry) => (
                    <li key={entry.date} className="relative pb-4 last:pb-0">
                      {/* node */}
                      <span className="absolute -left-[23px] top-1.5 flex size-3 items-center justify-center rounded-full border border-primary/50 bg-card">
                        <span className="size-1.5 rounded-full bg-primary" />
                      </span>

                      <div className="flex items-start justify-between gap-3 rounded-lg border border-border bg-secondary/30 px-3 py-2.5">
                        <div className="min-w-0">
                          <span className="font-mono text-[11px] text-muted-foreground">
                            [{entry.date}]
                          </span>
                          <p className="mt-0.5 flex items-center gap-1.5 text-sm text-foreground">
                            <Wrench className="size-3.5 shrink-0 text-muted-foreground" />
                            {entry.title}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-md bg-background/60 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                          {entry.km} km
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* Export CTA */}
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <FileDown className="size-4" />
          Export Official Health Report for Resale (PDF)
        </button>
      </div>
    </section>
  )
}
