import { DashboardHeader } from "@/components/dashboard-header"
import { ActiveVehicleCard } from "@/components/active-vehicle-card"
import { ServiceGrid } from "@/components/service-grid"

export default function DashboardPage() {
  return (
    <div className="relative min-h-svh bg-background">
      {/* Atmospheric garage backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/garage-backdrop.png)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background to-background"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <DashboardHeader />

        <main className="mx-auto max-w-3xl px-4 pb-16 pt-6">
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-muted-foreground/60" />
            Keeping You on the Road
          </p>

          <div className="flex flex-col gap-8">
            <ActiveVehicleCard />
            <ServiceGrid />
          </div>
        </main>
      </div>
    </div>
  )
}
