import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CHOG Agent",
  description: "Token analyzer powered by CHOG",
  icons: {
    icon: "https://i.postimg.cc/rFpnY7sc/fotiyo-(1).png",
    apple: "https://i.postimg.cc/rFpnY7sc/fotiyo-(1).png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.postimg.cc/rFpnY7sc/fotiyo-(1).png" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/rFpnY7sc/fotiyo-(1).png" />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
