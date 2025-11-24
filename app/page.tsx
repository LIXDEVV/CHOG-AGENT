"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 overflow-hidden">
      {/* Grid background effect */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="absolute top-20 right-10 w-72 h-72 bg-fuchsia-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-500" />

        <div className="relative z-20 text-center">
          {/* CHOG Image */}
          <div className="mb-12 flex justify-center">
            <img
              src="/images/fotiyo-20-281-29.png"
              alt="CHOG AI Agent"
              className="w-48 h-48 object-contain drop-shadow-2xl animate-bounce"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 mb-6">
            Monad Agent
          </h1>

          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your mystical AI token analyzer. Detects Monad tokens with precision, evaluates their potential, and rates
            them with cosmic intuition.
          </p>

          {/* CTA Button - Single copy button */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <Button
              onClick={() => router.push("/agent")}
              className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400 text-white rounded-lg shadow-2xl shadow-purple-500/50 transition-all hover:scale-105"
            >
              Start Talking to CHOG
            </Button>

            <Button
              onClick={() => {
                navigator.clipboard.writeText("hi")
                alert("CA copied to clipboard!")
              }}
              variant="outline"
              className="px-8 py-6 text-lg font-bold border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10"
            >
              Copy CA
            </Button>
          </div>

          {/* Footer text */}
          <p className="mt-16 text-purple-400 text-sm">Powered by cosmic token analysis • CHOG rates, you decide</p>
        </div>
      </div>
    </div>
  )
}
