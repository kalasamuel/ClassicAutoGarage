"use client"

import { ChevronLeft, Check, X, MessageCircleQuestion, Wrench } from "lucide-react"
import Link from "next/link"

const lineItems = [
  {
    label: "Parts",
    description: "Front Ceramic Brake Pads & Rotors",
    amount: "$120.00",
  },
  {
    label: "Labour",
    description: "Caliper Servicing & Fluid Flush",
    amount: "$50.00",
  },
]

export function DiagnosticQuotation() {
  return (
    <section
      aria-labelledby="quotation-heading"
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
          id="quotation-heading"
          className="font-serif text-base font-bold uppercase tracking-[0.14em] text-foreground text-balance"
        >
          Diagnostic Quotation &amp; Approval
        </h1>
      </header>

      <div className="px-5 py-5">
        {/* Vehicle + diagnosis meta */}
        <div className="flex flex-col gap-1.5">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-foreground">
            <span className="text-muted-foreground">Vehicle:</span>
            <span className="font-medium">Toyota Harrier</span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">VIN:</span>
            <span className="font-mono text-xs text-foreground">JTEHH20V·40·123456</span>
          </p>
          <div className="mt-2 flex items-start gap-2 rounded-lg border border-warning/25 bg-warning/10 px-3 py-2.5">
            <Wrench className="mt-0.5 size-4 shrink-0 text-warning" />
            <p className="text-sm text-foreground">
              <span className="font-semibold text-warning">Workshop Diagnosis:</span>{" "}
              Front Brake Assembly Service &amp; Wear Inspection
            </p>
          </div>
        </div>

        {/* Itemized breakdown */}
        <div className="mt-6">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Itemized Breakdown
          </h2>
          <div className="overflow-hidden rounded-lg border border-border">
            {lineItems.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-between gap-4 px-4 py-3.5 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm text-foreground">{item.description}</p>
                </div>
                <span className="shrink-0 font-mono text-sm text-foreground">{item.amount}</span>
              </div>
            ))}
            {/* Total */}
            <div className="flex items-center justify-between gap-4 border-t border-border bg-secondary/40 px-4 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Total Estimate
              </span>
              <span className="font-mono text-lg font-bold text-primary">$170.00</span>
            </div>
          </div>
        </div>

        {/* Action required */}
        <div className="mt-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Action Required
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Please select an option below to instruct the mechanics:
          </p>

          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-success px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-background transition-colors hover:bg-success/90"
            >
              <Check className="size-4" />
              Approve &amp; Begin Repair
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-destructive transition-colors hover:bg-destructive/20"
            >
              <X className="size-4" />
              Decline Quotation
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-warning/40 bg-warning/10 px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-warning transition-colors hover:bg-warning/20"
            >
              <MessageCircleQuestion className="size-4" />
              Ask Technician a Question
            </button>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            * Approving authorizes the workshop to order parts and begin work.
          </p>
        </div>
      </div>
    </section>
  )
}
