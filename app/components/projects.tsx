"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "../data/projects"

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-black">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Featured <span className="text-gray-700 dark:text-gray-300">Projects</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Showcasing innovative solutions built with cutting-edge technologies. Click to explore details.
                    </motion.p>
                </div>
            </div>

            {/* Stacked Sticky Cards - Full Screen */}
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // As you scroll past this project, it scales down significantly
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <motion.div
            ref={ref}
            className="sticky top-0 h-screen flex items-center justify-center p-4 lg:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/projects/${project.id}`} className="block w-full h-full max-h-[85vh]">
                <motion.div
                    className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-900 shadow-2xl group border border-gray-800"
                    style={{ scale, opacity }}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Loading placeholder */}
                        <Image
                            src={project.coverImage || project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
                        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech: string) => (
                                    <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm text-white border border-white/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-end gap-4">
                                <div>
                                    <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-gray-300 line-clamp-2 max-w-2xl">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="hidden sm:flex h-16 w-16 rounded-full bg-white text-black items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}
