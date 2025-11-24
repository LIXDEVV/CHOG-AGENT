"use client"

import { useState, useEffect } from "react"

interface ChogAgentProps {
  isAnalyzing: boolean
  currentResponse?: string
  messageOpacity?: number
  score?: number
}

export default function ChogAgent({ isAnalyzing, currentResponse, messageOpacity = 1, score = 5 }: ChogAgentProps) {
  const [displayedResponse, setDisplayedResponse] = useState("")
  const [emojis, setEmojis] = useState<Array<{ id: number; text: string; left: number; delay: number }>>([])
  const emojiCounterRef = { current: 0 }

  useEffect(() => {
    if (!isAnalyzing && currentResponse && score !== undefined) {
      const isSuccess = score >= 5
      const emojiList = isSuccess ? ["✨", "💎", "🌟", "👑", "🔮", "⭐"] : ["❌", "⚠️", "🔴", "💔", "😤", "🚫"]

      const newEmojis = Array.from({ length: 15 }).map(() => ({
        id: emojiCounterRef.current++,
        text: emojiList[Math.floor(Math.random() * emojiList.length)],
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
      }))

      setEmojis(newEmojis)

      const timer = setTimeout(() => setEmojis([]), 3000)
      return () => clearTimeout(timer)
    }
  }, [currentResponse, score, isAnalyzing])

  useEffect(() => {
    if (currentResponse) {
      let index = 0
      const interval = setInterval(() => {
        if (index < currentResponse.length) {
          setDisplayedResponse(currentResponse.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    } else {
      setDisplayedResponse("")
    }
  }, [currentResponse])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-2 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {emojis.map((emoji) => (
          <div
            key={emoji.id}
            className="fixed text-2xl"
            style={{
              left: `${emoji.left}%`,
              top: "-20px",
              animation: `fall 2.5s ease-in forwards`,
              animationDelay: `${emoji.delay}s`,
            }}
          >
            {emoji.text}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotateZ(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {(currentResponse || isAnalyzing) && (
        <div
          className={`w-full max-w-xs transition-opacity duration-500 mb-2 flex-shrink-0 ${messageOpacity === 0 ? "opacity-0" : "opacity-100"}`}
        >
          <div className="bg-gradient-to-br from-purple-500/95 to-fuchsia-500/95 rounded-2xl p-4 shadow-lg shadow-purple-500/30 relative border border-fuchsia-400/50">
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-fuchsia-500/95" />
            <p className="text-xs font-semibold text-white text-center leading-relaxed min-h-4">
              {displayedResponse || (isAnalyzing ? "CHOG is analyzing..." : "")}
            </p>
          </div>
        </div>
      )}

      <div className="w-48 h-48 flex items-center justify-center flex-shrink-0">
        <img
          src="/images/fotiyo-20-281-29.png"
          alt="CHOG AI Agent"
          className="w-full h-full object-contain drop-shadow-xl transition-transform duration-300"
          style={{
            filter: isAnalyzing
              ? "drop-shadow(0 0 15px rgba(168, 85, 247, 0.8))"
              : "drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))",
          }}
        />
      </div>

      <div className="h-6 mt-2 flex-shrink-0">
        {isAnalyzing && (
          <div className="flex items-center gap-1 animate-pulse">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-xs text-purple-400 font-bold uppercase">CHOG is thinking</span>
          </div>
        )}
        {!isAnalyzing && currentResponse && (
          <span className="text-xs text-fuchsia-400 font-bold uppercase">Rating complete</span>
        )}
      </div>
    </div>
  )
}
