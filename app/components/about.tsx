"use client"

import * as React from "react"
import { Code2, Lightbulb, Target, Zap } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function About() {
    const stats = [
        { label: "Years Experience", value: "2+" },
        { label: "Projects Completed", value: "10+" },
        { label: "Technologies", value: "15+" },
        { label: "Happy Clients", value: "10+" },
    ]

    const values = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "Writing maintainable, scalable code that stands the test of time.",
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Always exploring new technologies and creative solutions.",
        },
        {
            icon: Target,
            title: "Goal-Oriented",
            description: "Focused on delivering results that exceed expectations.",
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimizing every aspect for speed and efficiency.",
        },
    ]

    return (
        <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black" />

            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-black/10 dark:border-white/10">
                            About Me
                        </span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                            Turning Ideas Into
                            <span className="block bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 dark:from-gray-300 dark:via-gray-400 dark:to-gray-200 bg-clip-text text-transparent">
                                Digital Reality
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                    {/* Left: Bio */}
                    <ScrollReveal delay={100}>
                        <div className="space-y-6">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    I'm a passionate <strong className="text-gray-900 dark:text-white">Full Stack Developer</strong> with a love for creating
                                    exceptional digital experiences. With expertise in modern web technologies, I specialize in building
                                    responsive, user-friendly applications that solve real-world problems.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    My journey in software development has equipped me with a diverse skill set spanning front-end frameworks,
                                    back-end systems, and cloud technologies. I believe in writing clean, maintainable code and following
                                    best practices to deliver high-quality solutions.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                                    or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Stats */}
                    <ScrollReveal delay={200}>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group relative p-6 rounded-2xl bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 backdrop-blur-xl hover:bg-white/70 dark:hover:bg-black/70 transition-all hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 dark:to-transparent rounded-2xl" />
                                    <div className="relative">
                                        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Values Grid */}
                <ScrollReveal delay={300}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <div
                                    key={index}
                                    className="group relative p-6 rounded-2xl bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 backdrop-blur-xl hover:bg-white/70 dark:hover:bg-black/70 transition-all hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 dark:to-transparent rounded-2xl" />
                                    <div className="relative space-y-4">
                                        <div className="inline-flex p-3 rounded-xl bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {value.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </ScrollReveal>

                {/* Download Resume Button */}
                <ScrollReveal delay={400}>
                    <div className="mt-16 text-center">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20"
                        >
                            Download Resume
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
