"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
            const target = e.target as HTMLElement
            // Check if hovering over clickable elements
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button'
            )
        }

        window.addEventListener('mousemove', updateCursor)
        return () => window.removeEventListener('mousemove', updateCursor)
    }, [])

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-white dark:bg-white rounded-full mix-blend-difference pointer-events-none z-[9999]"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isPointer ? 1.5 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white dark:border-white rounded-full mix-blend-difference pointer-events-none z-[9998]"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isPointer ? 1.5 : 1
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
            />
        </>
    )
}
