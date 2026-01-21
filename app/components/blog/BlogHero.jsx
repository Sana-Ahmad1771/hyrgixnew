"use client"
import { motion } from "motion/react"
import Image from "next/image"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

export default function BlogHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FCF2E5] via-[#FFF8F0] to-[#FCF2E5] py-16 sm:py-20 lg:py-24">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F37303]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#F37303]/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 right-20 w-4 h-4 bg-[#F37303] rounded-full opacity-60"
                animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-32 left-32 w-3 h-3 bg-[#F37303] rounded-full opacity-40"
                animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
                className="absolute top-40 left-1/4 w-2 h-2 bg-[#F37303] rounded-full opacity-30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 relative z-10">
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6"
                    >
                        <span className="w-2 h-2 bg-[#F37303] rounded-full animate-pulse" />
                        <span className="text-[#5A5A5A] font-poppins text-sm font-medium">
                            Latest News & Insights
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-[#171717] font-aeonik text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6"
                    >
                        Our Blog
                        <span className="block mt-2 bg-gradient-to-r from-[#F37303] to-[#FF9A4D] bg-clip-text text-transparent">
                            Health & Wellness Stories
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUp}
                        className="text-[#5A5A5A] font-poppins text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
                    >
                        Discover expert insights, health tips, and the latest updates from Hygrix. 
                        Stay informed about hygiene best practices and wellness trends.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
                    >
                        {[
                            { number: "50+", label: "Articles" },
                            { number: "10K+", label: "Readers" },
                            { number: "15+", label: "Topics" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <span className="block text-[#F37303] font-aeonik text-2xl sm:text-3xl font-medium">
                                    {stat.number}
                                </span>
                                <span className="text-[#888] font-poppins text-sm">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 33.3C840 36.7 960 43.3 1080 45C1200 46.7 1320 43.3 1380 41.7L1440 40V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" fillOpacity="0.5"/>
                </svg>
            </div>
        </section>
    )
}
