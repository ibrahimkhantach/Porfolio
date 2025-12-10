"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2200)
        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={isLoading ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo Animation */}
                <svg width="100" height="100" viewBox="0 0 100 100" className="mb-8">
                    <motion.path
                        d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.text
                        x="50"
                        y="55"
                        textAnchor="middle"
                        fill="white"
                        fontSize="24"
                        fontWeight="bold"
                        dy=".3em"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        IK
                    </motion.text>
                </svg>

                {/* Progress Bar */}
                <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </motion.div>
    )
}
