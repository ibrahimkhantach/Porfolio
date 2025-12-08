"use client"

import { motion } from "framer-motion"
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaPython, FaBootstrap
} from "react-icons/fa"
import {
    SiNextdotjs, SiTailwindcss, SiExpress, SiLaravel, SiMongodb, SiPostgresql, SiMysql
} from "react-icons/si"
import { Lightbulb, Sparkles, Users, Clock } from "lucide-react"

export function Skills() {
    const skillsData = {
        technical: [
            {
                category: "Frontend",
                items: [
                    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
                    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
                    { name: "JavaScript (ES6+)", icon: FaJs, color: "#F7DF1E" },
                    { name: "React.js", icon: FaReact, color: "#61DAFB" },
                    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
                    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" }
                ]
            },
            {
                category: "Backend",
                items: [
                    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
                    { name: "Express.js", icon: SiExpress, color: "#000000" },
                    { name: "PHP", icon: FaPhp, color: "#777BB4" },
                    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
                    { name: "Python", icon: FaPython, color: "#3776AB" }
                ]
            },
            {
                category: "Databases",
                items: [
                    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
                    { name: "MySQL", icon: SiMysql, color: "#4479A1" }
                ]
            }
        ],
        soft: [
            { title: "Problem Solving", description: "Ability to break down complex issues into manageable solutions.", icon: Lightbulb },
            { title: "Adaptability", description: "Quick to learn new technologies and adjust to changing project requirements.", icon: Sparkles },
            { title: "Team Collaboration", description: "Effective at working within Agile teams and communicating with stakeholders.", icon: Users },
            { title: "Time Management", description: "Prioritizing tasks efficiently to meet project deadlines.", icon: Clock }
        ]
    }

    return (
        <section id="skills" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
                <div className="absolute inset-0">
                    {[...Array(100)].map((_, i) => (
                        <div key={i} className="absolute w-1 h-1 bg-gray-800 dark:bg-white rounded-full animate-twinkle"
                            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, opacity: Math.random() * 0.5 + 0.1 }} />
                    ))}
                </div>
                <div className="absolute top-20 left-10 w-96 h-96 bg-gray-300/20 dark:bg-gray-700/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-400/20 dark:bg-gray-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '25s' }} />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        Skills & <span className="text-gray-700 dark:text-gray-300">Expertise</span>
                    </motion.h2>
                    <motion.p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                        Navigating the universe of technology with precision and creativity
                    </motion.p>
                </div>

                {/* Technical Skills */}
                <div className="mb-20">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Technical Skills</h3>
                        <p className="text-gray-500 dark:text-gray-500">Mastering the tools that power modern applications</p>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                        {skillsData.technical.map((category, catIndex) => (
                            <motion.div key={catIndex} className="group relative" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                <div className="relative h-full p-6 rounded-2xl bg-gray-100/80 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-gray-800 shadow-xl hover:bg-gray-200/80 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-gray-700 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 dark:from-white/5 via-transparent to-gray-200/50 dark:to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative space-y-4">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                            <span className="w-2 h-8 bg-gray-900 dark:bg-white rounded-full" />
                                            {category.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {category.items.map((skill, skillIndex) => {
                                                const Icon = skill.icon
                                                return (
                                                    <motion.div key={skillIndex} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200/60 dark:bg-white/5 border border-gray-300 dark:border-gray-800 hover:bg-gray-300/60 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-gray-700 transition-all cursor-pointer"
                                                        whileHover={{ scale: 1.05 }}>
                                                        <Icon className="w-5 h-5" style={{ color: skill.color }} />
                                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                    </motion.div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Soft Skills */}
                <div>
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Soft Skills</h3>
                        <p className="text-gray-500 dark:text-gray-500">Essential qualities that drive successful collaboration</p>
                    </motion.div>

                    <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                        {skillsData.soft.map((skill, index) => {
                            const Icon = skill.icon
                            return (
                                <motion.div key={index} className="group relative" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                                    <div className="relative h-full p-6 rounded-2xl bg-gray-100/90 dark:bg-white/10 backdrop-blur-lg border border-gray-300 dark:border-gray-800 shadow-2xl hover:bg-gray-200/90 dark:hover:bg-white/15 hover:border-gray-400 dark:hover:border-gray-700 hover:shadow-gray-400/20 dark:hover:shadow-white/10 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 dark:from-white/5 via-transparent to-gray-200/50 dark:to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative space-y-4">
                                            <div className="inline-flex p-3 rounded-xl bg-gray-200 dark:bg-white/10 group-hover:scale-110 transition-transform">
                                                <Icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
