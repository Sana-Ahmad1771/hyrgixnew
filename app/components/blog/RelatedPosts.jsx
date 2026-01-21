"use client"
import { motion } from "motion/react"
import BlogCard from "./BlogCard"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

export default function RelatedPosts({ posts, currentSlug }) {
    // Filter out current post and limit to 3
    const relatedPosts = posts
        .filter(post => post.slug !== currentSlug)
        .slice(0, 3)

    if (relatedPosts.length === 0) return null

    return (
        <section className="mt-16 lg:mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-[#171717] font-aeonik text-2xl sm:text-3xl font-normal">
                            You Might Also Like
                        </h2>
                        <p className="text-[#5A5A5A] font-poppins text-sm mt-2">
                            Continue exploring our latest articles
                        </p>
                    </div>
                    <motion.a
                        href="/blogs"
                        className="hidden sm:flex items-center gap-2 text-[#F37303] font-poppins text-sm font-medium hover:underline"
                        whileHover={{ x: 5 }}
                    >
                        View All
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </div>

                {/* Related Posts Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {relatedPosts.map((post, index) => (
                        <motion.div key={post.id} variants={fadeUp}>
                            <BlogCard blog={post} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile View All Link */}
                <motion.a
                    href="/blogs"
                    className="sm:hidden flex items-center justify-center gap-2 mt-6 py-3 bg-[#F8F8F8] rounded-full text-[#F37303] font-poppins text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    View All Articles
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </motion.a>
            </motion.div>
        </section>
    )
}
