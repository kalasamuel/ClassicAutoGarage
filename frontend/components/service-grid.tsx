"use client"

import type { LucideIcon } from "lucide-react"
import {
  ShoppingCart,
  CalendarClock,
  Car,
  Tag,
  Wrench,
  BookMarked,
  Package,
  MapPin,
  MessageSquare,
  Settings,
} from "lucide-react"

type Service = {
  label: string
  icon: LucideIcon
}

const services: Service[] = [
  { label: "Parts Shop", icon: ShoppingCart },
  { label: "Book a Service", icon: CalendarClock },
  { label: "Cars For Sale", icon: Car },
  { label: "Promotions", icon: Tag },
  { label: "Diagnostics Help", icon: Wrench },
  { label: "My Vehicle Passport", icon: BookMarked },
  { label: "Orders", icon: Package },
  { label: "Garage Location", icon: MapPin },
  { label: "Customer Support", icon: MessageSquare },
  { label: "Account Settings", icon: Settings },
]

export function ServiceGrid() {
  return (
    <section aria-labelledby="services-heading">
      <h2
        id="services-heading"
        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
      >
        Main Menu Services
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {services.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-border bg-card/60 p-4 text-left backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-input/60 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
              <Icon className="size-5" />
            </span>
            <span className="text-sm font-medium text-foreground text-pretty">{label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
