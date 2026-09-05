"use client"

import { ChevronRight, AlertTriangle } from "lucide-react"
import Link from "next/link"

export function ActiveVehicleCard() {
  return (
    <section aria-labelledby="active-vehicle-heading">
      <h2
        id="active-vehicle-heading"
        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
      >
        Active Vehicle in Shop
      </h2>

      <Link
        href="/quotation"
        className="group relative block w-full overflow-hidden rounded-xl border border-border bg-card/70 p-5 text-left shadow-2xl shadow-black/40 backdrop-blur-xl transition-colors hover:border-warning/50"
      >
        {/* 1px top highlight glow */}
        <span className="absolute inset-x-5 -top-px h-px bg-gradient-to-r from-transparent via-warning/60 to-transparent" />

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-bold tracking-tight text-foreground">Toyota Harrier</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">VIN: JTEHH20V·40·123456</p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-warning">
            <AlertTriangle className="size-3" />
            Awaiting Your Approval
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">Tap to view diagnostic quote &amp; approve work</p>
          <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-warning" />
        </div>
      </Link>
    </section>
  )
}
