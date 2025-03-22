import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Poppins, Open_Sans } from "next/font/google"

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

// Load Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hope Ijaza | Social Media Manager",
  description:
    "Professional portfolio of Hope Ijaza, a Social Media Manager with expertise in digital marketing strategies, content creation, and campaign optimization.",
  keywords:
    "Hope Ijaza, Social Media Manager, Digital Marketing, Content Creation, Social Media Strategy, Nairobi, Kenya",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${openSans.variable}`}>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'