"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/ibrahimkhantach", color: "#181717" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-khantach-98573a336", color: "#0A66C2" },
        { icon: Mail, label: "Email", href: "mailto:dev.ibrahimkhantach@gmail.com", color: "#EA4335" }
    ]

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]

    return (
        <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-white">
                            Ibrahim Khantach
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Full Stack Developer crafting elegant digital experiences with modern technologies.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-gray-900 dark:bg-white transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 flex items-center justify-center transition-all group"
                                        whileHover={{
                                            y: -3,
                                            backgroundColor: social.color,
                                            borderColor: social.color
                                        }}
                                        transition={{ duration: 0.2 }}
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        © {new Date().getFullYear()} Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Ibrahim Khantach
                    </p>

                    {/* Scroll to top button */}
                    <motion.button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Back to top
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    )
}
