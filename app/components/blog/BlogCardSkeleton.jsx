"use client"
import { motion } from "motion/react"

export default function BlogCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full flex flex-col border border-[#F0F0F0]">
            {/* Image Skeleton */}
            <div className="relative h-48 sm:h-52 bg-[#F0F0F0] overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Category Badge Skeleton */}
                <div className="absolute top-4 left-4 w-20 h-6 bg-[#E5E5E5] rounded-full" />
            </div>

            {/* Content Skeleton */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* Meta Skeleton */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-24 h-3 bg-[#F0F0F0] rounded-full relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                        />
                    </div>
                    <div className="w-1 h-1 bg-[#E5E5E5] rounded-full" />
                    <div className="w-16 h-3 bg-[#F0F0F0] rounded-full relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        />
                    </div>
                </div>

                {/* Title Skeleton */}
                <div className="space-y-2 mb-3">
                    <div className="h-5 bg-[#F0F0F0] rounded-full w-full relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                    </div>
                    <div className="h-5 bg-[#F0F0F0] rounded-full w-3/4 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        />
                    </div>
                </div>

                {/* Excerpt Skeleton */}
                <div className="space-y-2 flex-grow mb-4">
                    <div className="h-3 bg-[#F0F0F0] rounded-full w-full relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                    </div>
                    <div className="h-3 bg-[#F0F0F0] rounded-full w-full relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        />
                    </div>
                    <div className="h-3 bg-[#F0F0F0] rounded-full w-2/3 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                        />
                    </div>
                </div>

                {/* Footer Skeleton */}
                <div className="flex items-center justify-between pt-4 border-t border-[#F0F0F0]">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#F0F0F0] relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            />
                        </div>
                        <div className="w-20 h-3 bg-[#F0F0F0] rounded-full relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                            />
                        </div>
                    </div>
                    <div className="w-24 h-4 bg-[#F0F0F0] rounded-full relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
