import { DiagnosticQuotation } from "@/components/diagnostic-quotation"

export default function QuotationPage() {
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

      <div className="relative z-10 w-full max-w-lg">
        <DiagnosticQuotation />
      </div>
    </main>
  )
}
