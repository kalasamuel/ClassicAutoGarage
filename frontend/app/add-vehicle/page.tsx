import { AddVehicleForm } from "@/components/add-vehicle-form"

export default function AddVehiclePage() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-4 py-10">
      {/* Atmospheric garage backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/garage-backdrop.png)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        {/* Brand lockup */}
        <div className="mb-9 flex flex-col items-center text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-lg border border-border bg-card/70 backdrop-blur-md">
            <svg viewBox="0 0 24 24" className="size-6 text-primary" fill="none" aria-hidden="true">
              <path
                d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11m-14 0h14m-14 0a2 2 0 00-2 2v3a1 1 0 001 1h1m14-6a2 2 0 012 2v3a1 1 0 01-1 1h-1m-13 0v1.5a1 1 0 01-1 1H6a1 1 0 01-1-1V18m2 0h10m0 0v1.5a1 1 0 001 1h1a1 1 0 001-1V18M7.5 14.5h.01M16.5 14.5h.01"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="font-serif text-2xl font-bold uppercase tracking-[0.22em] text-foreground text-balance">
            Classic Auto Garage
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-muted-foreground/60" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Keeping You on the Road</p>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-muted-foreground/60" />
          </div>
        </div>

        <AddVehicleForm />
      </div>
    </main>
  )
}
