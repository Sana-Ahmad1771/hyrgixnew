"use client"
import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence, LayoutGroup } from "motion/react"
import BlogHero from "../components/blog/BlogHero"
import BlogCard from "../components/blog/BlogCard"
import CategoryFilter from "../components/blog/CategoryFilter"
import BlogCardSkeleton from "../components/blog/BlogCardSkeleton"
import data from "../components/data/data.json"

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
}

export default function BlogsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [isLoading, setIsLoading] = useState(true)

    const blogs = data.blogs
    const categories = data.blogCategories

    // Simulate loading state for premium feel
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    // Handle category change with loading animation
    const handleCategoryChange = (category) => {
        if (category !== selectedCategory) {
            setIsLoading(true)
            setSelectedCategory(category)
            setTimeout(() => setIsLoading(false), 400)
        }
    }

    // Filter blogs based on selected category
    const filteredBlogs = useMemo(() => {
        if (selectedCategory === "All") {
            return blogs
        }
        return blogs.filter(blog => blog.category === selectedCategory)
    }, [selectedCategory, blogs])

    // Get featured blogs for highlight section
    const featuredBlogs = blogs.filter(blog => blog.featured).slice(0, 2)

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <BlogHero />

            <main className="pb-20">
                {/* Featured Section */}
                {selectedCategory === "All" && featuredBlogs.length > 0 && (
                    <section className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 py-12 lg:py-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-10 h-1 bg-gradient-to-r from-[#F37303] to-[#FF9A4D] rounded-full" />
                                <h2 className="text-[#171717] font-aeonik text-xl sm:text-2xl font-medium">
                                    Featured Articles
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {featuredBlogs.map((blog, index) => (
                                    <motion.div
                                        key={blog.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <BlogCard blog={blog} index={index} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>
                )}

                {/* Category Filters */}
                <section className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 py-8">
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                </section>

                {/* Blog Grid */}
                <section className="mx-5 sm:mx-10 md:mx-20 lg:mx-32">
                    {/* Results Count */}
                    <motion.div
                        className="flex items-center justify-between mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-[#5A5A5A] font-poppins text-sm">
                            {isLoading ? (
                                <span className="inline-flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-[#F37303] border-t-transparent rounded-full animate-spin" />
                                    Loading...
                                </span>
                            ) : (
                                <>
                                    Showing <span className="text-[#F37303] font-medium">{filteredBlogs.length}</span> 
                                    {filteredBlogs.length === 1 ? ' article' : ' articles'}
                                    {selectedCategory !== "All" && (
                                        <> in <span className="text-[#171717] font-medium">{selectedCategory}</span></>
                                    )}
                                </>
                            )}
                        </p>

                        {/* Sort/View Options (Visual Only) */}
                        <div className="hidden sm:flex items-center gap-2">
                            <span className="text-[#888] text-sm">Sort by:</span>
                            <select className="bg-transparent text-[#171717] font-poppins text-sm font-medium focus:outline-none cursor-pointer">
                                <option>Latest</option>
                                <option>Oldest</option>
                                <option>Popular</option>
                            </select>
                        </div>
                    </motion.div>

                    {/* Blog Grid with Animation */}
                    <LayoutGroup>
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                // Skeleton Loading State
                                <motion.div
                                    key="skeleton"
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <BlogCardSkeleton key={i} />
                                    ))}
                                </motion.div>
                            ) : filteredBlogs.length > 0 ? (
                                // Blog Cards Grid
                                <motion.div
                                    key={selectedCategory}
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                >
                                    {filteredBlogs.map((blog, index) => (
                                        <BlogCard key={blog.id} blog={blog} index={index} />
                                    ))}
                                </motion.div>
                            ) : (
                                // No Results State
                                <motion.div
                                    key="empty"
                                    className="flex flex-col items-center justify-center py-20"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="w-24 h-24 bg-[#FFF5EB] rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-12 h-12 text-[#F37303]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[#171717] font-aeonik text-xl mb-2">No articles found</h3>
                                    <p className="text-[#5A5A5A] font-poppins text-sm text-center max-w-md mb-6">
                                        We couldn&apos;t find any articles in the &quot;{selectedCategory}&quot; category. 
                                        Try exploring other topics!
                                    </p>
                                    <motion.button
                                        onClick={() => handleCategoryChange("All")}
                                        className="px-6 py-2.5 bg-[#F37303] text-white rounded-full font-poppins text-sm font-medium"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View All Articles
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </LayoutGroup>

                    {/* Load More Button (Visual) */}
                    {!isLoading && filteredBlogs.length >= 6 && (
                        <motion.div
                            className="flex justify-center mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.button
                                className="px-8 py-3 bg-white border-2 border-[#E1E1E1] rounded-full text-[#171717] font-poppins text-sm font-medium hover:border-[#F37303] hover:text-[#F37303] transition-colors"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Load More Articles
                            </motion.button>
                        </motion.div>
                    )}
                </section>

                {/* Newsletter CTA */}
                <section className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 mt-20">
                    <motion.div
                        className="relative bg-gradient-to-br from-[#FCF2E5] to-[#FFF8F0] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F37303]/20 to-transparent rounded-full blur-3xl" />
                        
                        <div className="relative z-10 max-w-2xl mx-auto text-center">
                            <motion.span
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-[#F37303] font-poppins text-sm font-medium mb-6"
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Newsletter
                            </motion.span>

                            <motion.h3
                                className="text-[#171717] font-aeonik text-2xl sm:text-3xl lg:text-4xl font-normal mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                Stay Updated with Health Tips
                            </motion.h3>

                            <motion.p
                                className="text-[#5A5A5A] font-poppins text-sm sm:text-base mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                Subscribe to our newsletter and get the latest health insights, product updates, and exclusive offers delivered to your inbox.
                            </motion.p>

                            <motion.form
                                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-5 py-3 rounded-full bg-white border border-[#E1E1E1] focus:border-[#F37303] focus:outline-none font-poppins text-sm"
                                />
                                <motion.button
                                    type="submit"
                                    className="px-6 py-3 bg-[#F37303] text-white rounded-full font-poppins text-sm font-medium hover:bg-[#E06600] transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Subscribe
                                </motion.button>
                            </motion.form>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>
    )
}
