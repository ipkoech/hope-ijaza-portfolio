"use client"

import { useEffect, useRef } from "react"

interface AIImagePlaceholderProps {
  prompt: string
  width: number
  height: number
  className?: string
}

export function AIImagePlaceholder({ prompt, width, height, className = "" }: AIImagePlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "#a1e8af30")
    gradient.addColorStop(1, "#2ecc7130")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add some abstract shapes to simulate AI-generated content
    const shapes = Math.floor(Math.random() * 10) + 5
    for (let i = 0; i < shapes; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 100 + 50

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(46, 204, 113, ${Math.random() * 0.2})`
      ctx.fill()
    }

    // Add some lines
    for (let i = 0; i < 10; i++) {
      const x1 = Math.random() * width
      const y1 = Math.random() * height
      const x2 = Math.random() * width
      const y2 = Math.random() * height

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = `rgba(39, 174, 96, ${Math.random() * 0.3})`
      ctx.lineWidth = Math.random() * 3 + 1
      ctx.stroke()
    }

    // Add prompt text
    ctx.fillStyle = "rgba(51, 51, 51, 0.7)"
    ctx.font = "16px Arial"
    ctx.textAlign = "center"
    ctx.fillText(prompt, width / 2, height / 2)
    ctx.font = "12px Arial"
    ctx.fillText("AI-Generated Image Placeholder", width / 2, height / 2 + 24)
  }, [prompt, width, height])

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
}

