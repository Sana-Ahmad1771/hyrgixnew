"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export default function BlogCard({ blog, index = 0 }) {
    const { slug, title, excerpt, image, category, author, date, readTime, featured } = blog

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    return (
        <Link href={`/blogs/${slug}`}>
            <motion.article
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col cursor-pointer border border-[#F0F0F0] hover:border-[#F37303]/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                layout
            >
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gradient-to-br from-[#FCF2E5] to-[#FFF0E0]">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Image with zoom effect */}
                    <motion.div
                        className="w-full h-full flex items-center justify-center"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Placeholder visual when no image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-[#F37303]/20 flex items-center justify-center">
                                <svg className="w-10 h-10 text-[#F37303]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.span
                        className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#F37303] text-xs font-medium rounded-full shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                        {category}
                    </motion.span>

                    {/* Featured Badge */}
                    {featured && (
                        <motion.span
                            className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#F37303] text-white text-xs font-medium rounded-full shadow-md"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            Featured
                        </motion.span>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-[#888] mb-3">
                        <span>{formatDate(date)}</span>
                        <span className="w-1 h-1 bg-[#888] rounded-full" />
                        <span>{readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[#171717] font-aeonik text-lg sm:text-xl font-medium leading-tight mb-3 group-hover:text-[#F37303] transition-colors duration-300 line-clamp-2">
                        {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#5A5A5A] font-poppins text-sm leading-relaxed line-clamp-3 flex-grow mb-4">
                        {excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#F0F0F0]">
                        {/* Author */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#F8F8F8]">
                                <Image
                                    src={blog.authorImage || "/user.png"}
                                    alt={author}
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-[#5A5A5A] font-poppins text-xs font-medium">
                                {author}
                            </span>
                        </div>

                        {/* Read More */}
                        <motion.span
                            className="flex items-center gap-1.5 text-[#F37303] font-poppins text-sm font-medium"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Read More
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.span>
                    </div>
                </div>
            </motion.article>
        </Link>
    )
}
