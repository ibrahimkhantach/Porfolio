"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-white dark:bg-black" />

            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <ScrollReveal delay={100}>
                            <div className="space-y-4">

                                <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight">
                                    <span className="block text-gray-900 dark:text-white">
                                        Ibrahim Khantach
                                    </span>
                                    <span className="block bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 dark:from-gray-300 dark:via-gray-400 dark:to-gray-200 bg-clip-text text-transparent mt-2">
                                        Full Stack Developer
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                                    Crafting elegant digital experiences with modern technologies.
                                    Passionate about creating scalable solutions that make a difference.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* CTA Buttons */}
                        <ScrollReveal delay={300}>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#projects"
                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20"
                                >
                                    View My Work
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 dark:bg-black/80 text-black dark:text-white font-medium border border-black/20 dark:border-white/20 backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-black hover:scale-105"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Social Links */}
                        <ScrollReveal delay={500}>
                            <div className="flex items-center gap-4 pt-4">
                                <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">Connect:</span>
                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/ibrahimkhantach"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-all hover:scale-110 border border-black/10 dark:border-white/10"
                                        aria-label="GitHub"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://ma.linkedin.com/in/ibrahim-khantach-98573a336"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-all hover:scale-110 border border-black/10 dark:border-white/10"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="mailto:dev.ibrahimkhantach@gmail.com"
                                        className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-all hover:scale-110 border border-black/10 dark:border-white/10"
                                        aria-label="Email"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Image */}
                    <ScrollReveal delay={200}>
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative group">
                                {/* Decorative elements */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

                                {/* Image container with glass effect */}
                                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/50 dark:border-white/10 shadow-2xl bg-white/50 dark:bg-black/50 backdrop-blur-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 dark:to-transparent" />
                                    <Image
                                        src="/ibrahim.png"
                                        alt="Ibrahim Khantach"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                                    />
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 px-5 py-3 rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-xl">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">Available for work</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-black/20 dark:border-white/20 flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 rounded-full bg-black/40 dark:bg-white/40" />
                </div>
            </div>
        </section>
    )
}
