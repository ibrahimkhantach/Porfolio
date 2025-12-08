"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function MouseBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()

        // Fade animation loop - gradually clear canvas
        const animate = () => {
            // Fade effect - use appropriate color for theme
            const fadeColor = resolvedTheme === 'dark'
                ? "rgba(0, 0, 0, 1)"
                : "rgba(255, 255, 255, 1)"

            ctx.fillStyle = fadeColor
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            requestAnimationFrame(animate)
        }

        animate()

        // Handle mouse move - draw dots that will fade
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX
            const y = e.clientY

            // Draw a glowing dot
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8)

            // Random color with glow effect
            const hue = Math.random() * 60 + 200 // Blue to purple range
            gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, 0.8)`)
            gradient.addColorStop(0.5, `hsla(${hue}, 70%, 50%, 0.4)`)
            gradient.addColorStop(1, `hsla(${hue}, 70%, 40%, 0)`)

            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(x, y, 8, 0, Math.PI * 2)
            ctx.fill()

            // Draw a solid center dot
            ctx.fillStyle = `hsla(${hue}, 80%, 70%, 0.9)`
            ctx.beginPath()
            ctx.arc(x, y, 3, 0, Math.PI * 2)
            ctx.fill()
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("resize", resizeCanvas)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [resolvedTheme])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ width: "100%", height: "100%" }}
        />
    )
}
