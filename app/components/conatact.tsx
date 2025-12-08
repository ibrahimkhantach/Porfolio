"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you soon.'
                })
                setFormData({ name: '', email: '', message: '' })

                // Auto-dismiss success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus({ type: null, message: '' })
                }, 5000)
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Failed to send message. Please try again.'
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please try again later.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        { icon: Mail, label: "Email", value: "dev.ibrahimkhantach@gmail.com", href: "mailto:dev.ibrahimkhantach@gmail.com" },
        { icon: Phone, label: "Phone", value: "+212 6 52 56 03 52", href: "tel:+212652560352" },
        { icon: MapPin, label: "Location", value: "Oujda, Morocco", href: "#" }
    ]

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/ibrahimkhantach", color: "#181717" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-khantach-98573a336/?originalSubdomain=ma", color: "#0A66C2" },
        { icon: Mail, label: "Email", href: "mailto:dev.ibrahimkhantach@gmail.com", color: "#EA4335" }
    ]

    return (
        <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
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
                        Let's{" "}
                        <span className="text-gray-700 dark:text-gray-300">Connect</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Have a project in mind or just want to chat? I'd love to hear from you.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info & Social */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6 text-white dark:text-gray-900" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-500">
                                                    {item.label}
                                                </p>
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Follow Me
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 flex items-center justify-center transition-all group"
                                            whileHover={{
                                                y: -5,
                                                scale: 1.1,
                                                backgroundColor: social.color,
                                                borderColor: social.color
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                                    placeholder="ibrahim khantach"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all"
                                    placeholder="dev.ibrahimkhantach@gmail.com"
                                    required
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            </motion.button>

                            {/* Status Message - Enhanced */}
                            {submitStatus.type && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className={`relative overflow-hidden rounded-2xl p-5 backdrop-blur-xl border-2 ${submitStatus.type === 'success'
                                            ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30'
                                            : 'bg-gradient-to-r from-red-500/10 to-rose-500/10 border-red-500/30'
                                        }`}
                                >
                                    <div className="relative flex items-start gap-4">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                        >
                                            {submitStatus.type === 'success' ? (
                                                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                                            ) : (
                                                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                                            )}
                                        </motion.div>

                                        <motion.p
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 }}
                                            className={`flex-1 text-sm font-medium ${submitStatus.type === 'success'
                                                    ? 'text-green-800 dark:text-green-200'
                                                    : 'text-red-800 dark:text-red-200'
                                                }`}
                                        >
                                            {submitStatus.message}
                                        </motion.p>

                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            onClick={() => setSubmitStatus({ type: null, message: '' })}
                                            className={`p-1 rounded-lg transition-colors ${submitStatus.type === 'success'
                                                    ? 'hover:bg-green-500/20 text-green-600 dark:text-green-400'
                                                    : 'hover:bg-red-500/20 text-red-600 dark:text-red-400'
                                                }`}
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
