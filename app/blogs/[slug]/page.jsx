"use client"
import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import ReadingProgress from "../../components/blog/ReadingProgress"
import SocialShare, { MobileSocialShare } from "../../components/blog/SocialShare"
import RelatedPosts from "../../components/blog/RelatedPosts"
import data from "../../components/data/data.json"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

export default function BlogDetailPage({ params }) {
    const { slug } = use(params)
    const blogs = data.blogs
    const blog = blogs.find(b => b.slug === slug)

    if (!blog) {
        notFound()
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    // Convert markdown-style content to HTML-like structure
    const renderContent = (content) => {
        const paragraphs = content.split('\n\n')
        
        return paragraphs.map((paragraph, index) => {
            // Headers
            if (paragraph.startsWith('## ')) {
                return (
                    <motion.h2
                        key={index}
                        className="text-[#171717] font-aeonik text-xl sm:text-2xl font-medium mt-10 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {paragraph.replace('## ', '')}
                    </motion.h2>
                )
            }
            
            if (paragraph.startsWith('### ')) {
                return (
                    <motion.h3
                        key={index}
                        className="text-[#171717] font-aeonik text-lg sm:text-xl font-medium mt-8 mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {paragraph.replace('### ', '')}
                    </motion.h3>
                )
            }

            // Lists
            if (paragraph.startsWith('- ') || paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n')
                const isOrdered = paragraph.match(/^\d+\./)
                const ListTag = isOrdered ? 'ol' : 'ul'
                
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <ListTag className={`my-4 space-y-2 ${isOrdered ? 'list-decimal' : 'list-disc'} pl-6`}>
                            {items.map((item, i) => {
                                const cleanItem = item.replace(/^[-\d.]+\s*/, '')
                                // Handle bold text
                                const parts = cleanItem.split(/\*\*(.*?)\*\*/g)
                                return (
                                    <li key={i} className="text-[#5A5A5A] font-poppins text-base leading-relaxed">
                                        {parts.map((part, j) => 
                                            j % 2 === 1 ? (
                                                <strong key={j} className="text-[#171717] font-medium">{part}</strong>
                                            ) : (
                                                part
                                            )
                                        )}
                                    </li>
                                )
                            })}
                        </ListTag>
                    </motion.div>
                )
            }

            // Regular paragraphs with bold text support
            const parts = paragraph.split(/\*\*(.*?)\*\*/g)
            return (
                <motion.p
                    key={index}
                    className="text-[#5A5A5A] font-poppins text-base sm:text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {parts.map((part, j) => 
                        j % 2 === 1 ? (
                            <strong key={j} className="text-[#171717] font-medium">{part}</strong>
                        ) : (
                            part
                        )
                    )}
                </motion.p>
            )
        })
    }

    return (
        <div className="min-h-screen">
            {/* Reading Progress Bar */}
            <ReadingProgress />

            {/* Social Share Sidebar */}
            <SocialShare title={blog.title} slug={blog.slug} />
            
            {/* Mobile Social Share */}
            <MobileSocialShare title={blog.title} slug={blog.slug} />

            {/* Hero Section */}
            <section className="relative">
                {/* Featured Image */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-125 overflow-hidden bg-gradient-to-br from-[#FCF2E5] to-[#F37303]/30">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                    
                    {/* Placeholder pattern when no image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-[#F37303]/20 flex items-center justify-center">
                            <svg className="w-16 h-16 text-[#F37303]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Hero Content */}
                    <div className="absolute inset-0 z-20 flex items-end">
                        <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 pb-8 sm:pb-12 lg:pb-16 max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {/* Category Badge */}
                                <span className="inline-flex px-4 py-1.5 bg-[#F37303] text-white text-xs sm:text-sm font-medium rounded-full mb-4">
                                    {blog.category}
                                </span>

                                {/* Title */}
                                <h1 className="text-white font-aeonik text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                                    {blog.title}
                                </h1>

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20">
                                            <Image
                                                src={blog.authorImage || "/user.png"}
                                                alt={blog.author}
                                                width={32}
                                                height={32}
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-medium">{blog.author}</span>
                                    </div>
                                    <span className="w-1 h-1 bg-white/60 rounded-full" />
                                    <span>{formatDate(blog.date)}</span>
                                    <span className="w-1 h-1 bg-white/60 rounded-full" />
                                    <span>{blog.readTime}</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <main className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 py-12 lg:py-16">
                <div className="max-w-3xl mx-auto lg:ml-24">
                    {/* Breadcrumb */}
                    <motion.nav
                        className="flex items-center gap-2 text-sm mb-8 flex-wrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="/" className="text-[#5A5A5A] hover:text-[#F37303] transition-colors">
                            Home
                        </Link>
                        <svg className="w-4 h-4 text-[#5A5A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <Link href="/blogs" className="text-[#5A5A5A] hover:text-[#F37303] transition-colors">
                            Blog
                        </Link>
                        <svg className="w-4 h-4 text-[#5A5A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-[#171717] font-medium line-clamp-1">{blog.category}</span>
                    </motion.nav>

                    {/* Excerpt/Lead */}
                    <motion.p
                        className="text-[#171717] font-poppins text-lg sm:text-xl leading-relaxed mb-8 font-medium"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        {blog.excerpt}
                    </motion.p>

                    {/* Divider */}
                    <motion.hr
                        className="border-[#E1E1E1] mb-8"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    />

                    {/* Main Content */}
                    <article className="prose prose-lg max-w-none">
                        {renderContent(blog.content)}
                    </article>

                    {/* Tags Section */}
                    <motion.div
                        className="mt-12 pt-8 border-t border-[#E1E1E1]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[#5A5A5A] font-poppins text-sm">Tags:</span>
                            {['Health', 'Hygiene', blog.category].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 bg-[#F8F8F8] text-[#5A5A5A] text-sm rounded-full hover:bg-[#FFF5EB] hover:text-[#F37303] transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Author Box */}
                    <motion.div
                        className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#FCF2E5] to-[#FFF8F0] rounded-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md">
                                <Image
                                    src={blog.authorImage || "/user.png"}
                                    alt={blog.author}
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <span className="text-[#F37303] font-poppins text-xs font-medium uppercase tracking-wide">
                                    Written by
                                </span>
                                <h4 className="text-[#171717] font-aeonik text-xl font-medium mt-1 mb-2">
                                    {blog.author}
                                </h4>
                                <p className="text-[#5A5A5A] font-poppins text-sm leading-relaxed">
                                    Contributing author at Hygrix, passionate about health and wellness topics.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        className="mt-12 flex flex-col sm:flex-row justify-between gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/blogs">
                            <motion.button
                                className="flex items-center gap-2 text-[#5A5A5A] hover:text-[#F37303] transition-colors font-poppins text-sm"
                                whileHover={{ x: -5 }}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to All Articles
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Related Posts */}
                    <RelatedPosts posts={blogs} currentSlug={blog.slug} />
                </div>
            </main>
        </div>
    )
}
