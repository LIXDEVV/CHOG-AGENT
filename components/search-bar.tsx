"use client"

import { useState } from "react"
import { Search, Loader2 } from "lucide-react"

interface SearchBarProps {
  onSearch: (ca: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("Hj4e1sTVej9nLK9vdmb6qLY9TusWDqEWjGKL4Sfmpump")
  const [isLoading, setIsLoading] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  const handleSearch = async () => {
    if (!input.trim()) return
    setIsLoading(true)
    try {
      onSearch(input)
      setRecentSearches((prev) => [input, ...prev.slice(0, 4)])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickSearch = (ca: string) => {
    setInput(ca)
    setIsLoading(true)
    try {
      onSearch(ca)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Paste Pump.fun token CA (Mint Address)..."
            className="w-full px-4 py-3 bg-purple-900/40 border border-purple-700/50 rounded-lg text-purple-50 placeholder-purple-400 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition"
          />
          <Search className="absolute right-3 top-3 w-5 h-5 text-purple-400" />
        </div>
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-fuchsia-400 disabled:opacity-50 transition duration-200 flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </button>
      </div>

      {recentSearches.length > 0 && (
        <div>
          <p className="text-xs text-purple-400 mb-2">Recent:</p>
          <div className="flex gap-2 flex-wrap">
            {recentSearches.map((ca) => (
              <button
                key={ca}
                onClick={() => handleQuickSearch(ca)}
                className="text-xs px-3 py-1 bg-purple-900/40 hover:bg-purple-800/50 text-purple-300 rounded border border-purple-700/50 transition"
              >
                {ca.slice(0, 8)}...
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
