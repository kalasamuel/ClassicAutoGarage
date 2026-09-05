"use client"

import type React from "react"
import Link from "next/link"
import { Fingerprint, Car, Cog, Gauge, ArrowLeft, Plus, Save } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHOTO_SLOTS = [
  { id: "front", label: "Upload Front" },
  { id: "engine", label: "Upload Engine" },
  { id: "dash", label: "Upload Dash" },
] as const

export function AddVehicleForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className="relative w-full max-w-2xl">
      {/* 1px top highlight glow */}
      <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="rounded-xl border border-border bg-card/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back
          </Link>
          <h2 className="font-serif text-xl font-bold tracking-tight text-foreground">Add Vehicle Profile</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Vehicle identification */}
          <fieldset className="flex flex-col gap-4">
            <legend className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Vehicle Identification
            </legend>
            <div className="flex flex-col gap-2">
              <label htmlFor="vin" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                VIN Number
              </label>
              <div className="group relative">
                <Fingerprint
                  className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                  aria-hidden="true"
                />
                <input
                  id="vin"
                  type="text"
                  placeholder="1HGCR2E..."
                  className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-4 font-mono text-sm uppercase tracking-wider text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
                />
              </div>
            </div>
          </fieldset>

          {/* Specifications */}
          <fieldset className="flex flex-col gap-4">
            <legend className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Specifications
            </legend>

            <div className="flex flex-col gap-2">
              <label htmlFor="makeModel" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Make / Model
              </label>
              <div className="group relative">
                <Car
                  className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                  aria-hidden="true"
                />
                <input
                  id="makeModel"
                  type="text"
                  placeholder="Toyota Harrier"
                  className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="engine" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Engine Type / Size
                </label>
                <div className="group relative">
                  <Cog
                    className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                    aria-hidden="true"
                  />
                  <input
                    id="engine"
                    type="text"
                    placeholder="3.0L V6 1MZ-FE"
                    className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mileage" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Current Mileage (km/mi)
                </label>
                <div className="group relative">
                  <Gauge
                    className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                    aria-hidden="true"
                  />
                  <input
                    id="mileage"
                    type="text"
                    inputMode="numeric"
                    placeholder="86,420"
                    className="w-full rounded-lg border border-border bg-input/60 py-3 pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/70 focus:ring-2 focus:ring-primary/25"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Vehicle media */}
          <fieldset className="flex flex-col gap-4">
            <legend className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Vehicle Media
            </legend>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Photos</span>
            <div className="grid gap-4 sm:grid-cols-3">
              {PHOTO_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-input/40 text-muted-foreground transition-all hover:border-primary/60 hover:bg-input/70 hover:text-foreground"
                >
                  <span className="flex size-8 items-center justify-center rounded-full border border-border bg-card/80 transition-colors group-hover:border-primary/60 group-hover:text-primary">
                    <Plus className="size-4" />
                  </span>
                  <span className="text-xs font-medium tracking-wide">{slot.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <Button
            type="submit"
            className="group mt-1 h-12 w-full rounded-lg bg-primary text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
          >
            Save Vehicle to My Garage
            <Save className="ml-1 size-4 transition-transform group-hover:scale-110" />
          </Button>
        </form>
      </div>
    </div>
  )
}
