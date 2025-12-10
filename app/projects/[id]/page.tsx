"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Layers, Code, Zap, ArrowRight, Home, ChevronRight } from "lucide-react"
import { projects } from "../../data/projects"
import { useRef, use, useState, useEffect } from "react"

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const projectId = Number(id)
    const project = projects.find(p => p.id === projectId)
    const [activeSection, setActiveSection] = useState("overview")

    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    })

    const heroRef = useRef<HTMLElement>(null)
    const { scrollYProgress: heroScrollProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0])
    const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 1.1])

    // Enhanced scroll spy effect using Intersection Observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -35% 0px",
            threshold: [0, 0.25, 0.5, 0.75, 1]
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        // Observe all sections
        const sections = ["overview", "tech", "gallery"]
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId)
            if (element) {
                observer.observe(element)
            }
        })

        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId)
                if (element) {
                    observer.unobserve(element)
                }
            })
        }
    }, [])

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project not found</h2>
                    <Link href="/#projects" className="text-blue-500 hover:underline">
                        Return to Projects
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Progress Bar - Grey Color */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gray-900 dark:bg-gray-100 z-50 origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Breadcrumb Navigation - Fixed Position */}
            <nav className="fixed top-16 left-0 right-0 px-6 py-4 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                        <Link href="/" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <Link href="/#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Projects
                        </Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900 dark:text-white font-medium truncate max-w-xs">{project.title}</span>
                    </div>
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header ref={heroRef} className="relative h-[90vh] flex items-end pb-20 px-6 sm:px-12 lg:px-24 overflow-hidden mt-20">
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ opacity: heroOpacity, scale: heroScale }}
                >
                    <Image
                        src={project.coverImage || project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                </motion.div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.div
                            className="flex flex-wrap gap-2 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            {project.tech.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                        <motion.h1
                            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {project.title}
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-200 max-w-3xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {project.description}
                        </motion.p>
                    </motion.div>
                </div>
            </header>

            {/* Content Section with Sidebar */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Enhanced Sticky Sidebar with Active States */}
                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Table of Contents</h4>
                                <ul className="space-y-2 text-sm font-medium">
                                    {[
                                        { id: "overview", label: "Overview & Features" },
                                        { id: "tech", label: "Technologies" },
                                        { id: "gallery", label: "Project Gallery" }
                                    ].map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`relative flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 group ${activeSection === item.id
                                                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-semibold shadow-sm"
                                                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50"
                                                    }`}
                                            >
                                                {activeSection === item.id && (
                                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-r-full" />
                                                )}
                                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id
                                                    ? "bg-blue-600 dark:bg-blue-400 scale-125 shadow-lg shadow-blue-500/50"
                                                    : "bg-gray-400 group-hover:bg-gray-600 group-hover:scale-110"
                                                    }`} />
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {project.liveUrl && project.liveUrl !== "#" && (
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors"
                                >
                                    View Live <ExternalLink className="w-4 h-4" />
                                </Link>
                            )}
                        </div>
                    </aside>

                    {/* Main Content with Enhanced Animations */}
                    <div className="flex-1 space-y-24">
                        {/* Project Info */}
                        <motion.div
                            id="overview"
                            className="space-y-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg">
                                        <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    Key Features
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.features?.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg group"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 group-hover:scale-150 transition-transform" />
                                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                id="tech"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-950 rounded-lg">
                                        <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((tech, i) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl text-sm font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-sm hover:shadow-md"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Enhanced Gallery */}
                        <motion.div
                            id="gallery"
                            className="space-y-8"
                            ref={targetRef}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
                                <div className="p-2 bg-green-100 dark:bg-green-950 rounded-lg">
                                    <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                Visual Showcase
                            </h3>

                            <div className="space-y-6">
                                {project.images.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                                        className="relative rounded-3xl overflow-hidden shadow-2xl group bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all"
                                    >
                                        <div className="relative">
                                            <img
                                                src={img}
                                                alt={`${project.title} screenshot ${idx + 1}`}
                                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-white text-sm font-medium">Screenshot {idx + 1}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Next Project Section with Enhanced Design */}
            {projects[projectId % projects.length] && (
                <motion.section
                    className="py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black border-t-2 border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <motion.p
                            className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-widest font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Next Case Study
                        </motion.p>
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold mb-12 text-gray-900 dark:text-white leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            {projects[projectId % projects.length].title}
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href={`/projects/${projects[projectId % projects.length].id}`}
                                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
                            >
                                Explore Project <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>
            )}
        </main>
    )
}
