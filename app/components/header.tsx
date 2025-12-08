"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
    const { setTheme, resolvedTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const [activeSection, setActiveSection] = React.useState("")
    const pathname = usePathname()

    React.useEffect(() => {
        setMounted(true)

        // Active section observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: "-45% 0px -45% 0px"
            }
        )

        const sections = document.querySelectorAll('section[id]')
        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // If it's a hash link (starts with #), handle smooth scroll
        if (href.startsWith('#')) {
            e.preventDefault()
            const targetId = href.substring(1)
            const targetElement = document.getElementById(targetId)

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })

                // Update URL without causing a page jump
                window.history.pushState(null, '', href)
                // Manually set active section for immediate feedback
                setActiveSection(targetId)
            }

            // Close mobile menu if open
            setIsMenuOpen(false)
        } else if (href === "/") {
            // For home link, scroll to top if we are already on home page but scrolled down
            if (pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setActiveSection("home")
            }
        }
    }

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 shadow-lg shadow-black/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            onClick={(e) => handleNavClick(e, "/")}
                            className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent hover:from-gray-800 hover:via-gray-600 hover:to-gray-800 transition-all dark:from-white dark:via-gray-300 dark:to-white dark:hover:from-gray-100 dark:hover:via-gray-400 dark:hover:to-gray-100"
                        >
                            Portfolio
                        </Link>
                    </div>

                    {/* Desktop Navigation - Glass Pills */}
                    <nav className="hidden md:flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-lg rounded-full px-2 py-1.5 border border-white/30 dark:border-white/10 shadow-lg shadow-black/5">
                        {navItems.map((item) => {
                            // Determine if active
                            const isHome = item.href === "/"
                            const sectionId = isHome ? "home" : item.href.substring(1)
                            const isActive = activeSection === sectionId || (isHome && activeSection === "")

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${isActive
                                        ? "bg-white/80 dark:bg-white/10 text-black dark:text-white shadow-md backdrop-blur-xl"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4 cursor-pointer">
                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            className="relative rounded-full p-2.5 text-gray-700 hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 backdrop-blur-sm"
                            aria-label="Toggle theme"
                        >
                            {mounted ? (
                                <>
                                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute top-2.5 left-2.5 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                </>
                            ) : (
                                <div className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white focus:outline-none transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/20 bg-white/95 dark:bg-black/95 backdrop-blur-2xl animate-in slide-in-from-top-5 fade-in duration-200 shadow-xl">
                    <div className="space-y-1 px-4 py-4">
                        {navItems.map((item) => {
                            const isHome = item.href === "/"
                            const sectionId = isHome ? "home" : item.href.substring(1)
                            const isActive = activeSection === sectionId || (isHome && activeSection === "")

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`block rounded-lg px-4 py-2.5 text-base font-medium transition-all ${isActive
                                        ? "text-black dark:text-white bg-black/5 dark:bg-white/10"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                        <div className="pt-4 flex items-center justify-between px-4 border-t border-gray-200 dark:border-gray-800 mt-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                            <button
                                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                                className="rounded-full p-2 text-gray-700 hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10 transition-all"
                            >
                                {mounted && (resolvedTheme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />)}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
