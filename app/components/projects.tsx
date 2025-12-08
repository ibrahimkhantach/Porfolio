"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useRef } from "react"

export function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A modern, full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built for scalability and performance.",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
            tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
            liveUrl: "#"
        },
        {
            id: 2,
            title: "AI-Powered Dashboard",
            description: "An intelligent analytics dashboard leveraging machine learning to provide predictive insights and automated reporting. Features real-time data visualization and natural language queries.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            tech: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
            liveUrl: "#"
        },
        {
            id: 3,
            title: "Task Management System",
            description: "A collaborative project management tool with drag-and-drop kanban boards, team chat, file sharing, and advanced workflow automation. Designed for distributed teams.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
            tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "AWS"],
            liveUrl: "#"
        },
        {
            id: 4,
            title: "Portfolio CMS",
            description: "A headless CMS specifically designed for creative professionals to showcase their work. Features dynamic content modeling, media optimization, and built-in SEO tools.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            tech: ["Next.js", "Sanity", "GraphQL", "Vercel", "Cloudinary"],
            liveUrl: "#"
        }
    ]

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
                        Showcasing innovative solutions built with cutting-edge technologies
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
    const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 1, 0.95])

    // Dynamic height that shrinks as you scroll
    const heightProgress = useTransform(scrollYProgress, [0, 0.7], [90, 70])

    return (
        <motion.div
            ref={ref}
            className="sticky min-h-screen flex items-center justify-center"
            style={{ top: `${index * 2}rem` }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <motion.div
                className="relative group w-full rounded-3xl overflow-hidden cursor-pointer"
                style={{
                    scale,
                    opacity,
                    height: heightProgress.get() ? `${heightProgress.get()}vh` : '90vh'
                }}
            >
                {/* Full-Screen Image */}
                <div className="absolute inset-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                </div>

                {/* Project Number - Always Visible */}
                <div className="absolute top-8 left-8 text-white/60 text-sm font-mono">
                    0{index + 1}
                </div>

                {/* Project Details - Show on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center space-y-6 px-8 max-w-3xl">
                        {/* Title */}
                        <motion.h3
                            className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {project.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                            className="text-xl text-white/90 leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {project.description}
                        </motion.p>

                        {/* Tech Stack */}
                        <motion.div
                            className="flex flex-wrap gap-3 justify-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {project.tech.map((tech: string, techIndex: number) => (
                                <span
                                    key={techIndex}
                                    className="px-4 py-2 text-sm font-medium rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a
                                href={project.liveUrl}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors group/btn text-lg"
                            >
                                View Live Project
                                <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Project Title Hint - Bottom (visible when not hovering) */}
                <div className="absolute bottom-8 left-8 right-8 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                        {project.title}
                    </h3>
                </div>
            </motion.div>
        </motion.div>
    )
}
