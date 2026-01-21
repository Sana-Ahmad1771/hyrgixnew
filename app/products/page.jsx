"use client"
import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, LayoutGroup } from "motion/react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import ProductHero from "../components/products/ProductHero"
import EnhancedFilterSidebar from "../components/products/EnhancedFilterSidebar"
import EnhancedProductCard from "../components/products/EnhancedProductCard"
import ProductCardSkeleton from "../components/products/ProductCardSkeleton"
import MobileFilterButton from "../components/products/MobileFilterButton"
import data from "../components/data/data.json"

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
}

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Products")
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [viewMode, setViewMode] = useState("grid")

    const products = data.products
    const categories = data.categories

    // Handle loading state when category changes
    useEffect(() => {
        let mounted = true
        const timer = setTimeout(() => {
            if (mounted) setIsLoading(false)
        }, 800)
        return () => {
            mounted = false
            clearTimeout(timer)
        }
    }, [])

    // Reset loading when category changes
    const handleCategoryChange = (category) => {
        setIsLoading(true)
        setSelectedCategory(category)
        setTimeout(() => setIsLoading(false), 600)
    }

    // Calculate product counts per category
    const productCounts = useMemo(() => {
        const counts = { "All Products": products.length }
        categories.forEach(cat => {
            if (cat !== "All Products") {
                counts[cat] = products.filter(p => p.category === cat).length
            }
        })
        return counts
    }, [products, categories])

    // Filter products based on selected category
    const filteredProducts = useMemo(() => {
        if (selectedCategory === "All Products") {
            return products
        }
        return products.filter(product => product.category === selectedCategory)
    }, [selectedCategory, products])

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FCF2E5]/50 to-white">
            <Navbar />
            
            <main className="pt-6 pb-20">
                {/* Breadcrumb */}
                <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32">
                    <motion.nav 
                        className="flex items-center gap-2 text-sm mb-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link href="/" className="text-[#5A5A5A] hover:text-[#F37303] transition-colors flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Home
                        </Link>
                        <svg className="w-4 h-4 text-[#D1D1D1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-[#F37303] font-medium">Products</span>
                    </motion.nav>
                </div>

                {/* Hero Section */}
                <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32">
                    <ProductHero 
                        totalProducts={products.length} 
                        categories={categories}
                    />
                </div>

                {/* Filter Bar (Mobile/Tablet) */}
                <div className="lg:hidden mx-5 sm:mx-10 md:mx-20 mb-6">
                    <motion.div 
                        className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-[#F0F0F0]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717] font-poppins text-sm font-medium">
                                {selectedCategory}
                            </span>
                            <span className="px-2 py-0.5 bg-[#FFF5EB] text-[#F37303] text-xs rounded-full">
                                {filteredProducts.length}
                            </span>
                        </div>
                        <button
                            onClick={toggleFilter}
                            className="flex items-center gap-2 px-4 py-2 bg-[#F8F8F8] rounded-xl hover:bg-[#FFF5EB] transition-colors"
                        >
                            <svg className="w-4 h-4 text-[#F37303]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            <span className="text-sm font-medium">Filters</span>
                        </button>
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32">
                    <div className="flex gap-8">
                        {/* Filter Sidebar */}
                        <EnhancedFilterSidebar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={handleCategoryChange}
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                            productCounts={productCounts}
                        />

                        {/* Product Grid */}
                        <div className="flex-1">
                            {/* Results Header */}
                            <motion.div 
                                className="hidden lg:flex items-center justify-between mb-6 p-4 bg-white rounded-2xl border border-[#F0F0F0]"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[#171717] font-poppins text-sm">
                                        Showing
                                    </span>
                                    <span className="px-3 py-1 bg-[#FFF5EB] text-[#F37303] text-sm font-medium rounded-full">
                                        {filteredProducts.length} products
                                    </span>
                                    {selectedCategory !== "All Products" && (
                                        <span className="text-[#5A5A5A] font-poppins text-sm">
                                            in <span className="text-[#F37303] font-medium">{selectedCategory}</span>
                                        </span>
                                    )}
                                </div>

                                {/* View Toggle */}
                                <div className="flex items-center gap-2 p-1 bg-[#F8F8F8] rounded-lg">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-[#F37303]" : "text-[#888]"}`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white shadow-sm text-[#F37303]" : "text-[#888]"}`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>

                            {/* Products Grid */}
                            <LayoutGroup>
                                <AnimatePresence mode="wait">
                                    {isLoading ? (
                                        <motion.div
                                            key="skeleton"
                                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {[...Array(6)].map((_, i) => (
                                                <ProductCardSkeleton key={i} />
                                            ))}
                                        </motion.div>
                                    ) : filteredProducts.length > 0 ? (
                                        <motion.div
                                            key={selectedCategory}
                                            className={`grid gap-5 ${
                                                viewMode === "grid" 
                                                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                                                    : "grid-cols-1"
                                            }`}
                                            variants={staggerContainer}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {filteredProducts.map((product, index) => (
                                                <motion.div 
                                                    key={product.id}
                                                    layout
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <EnhancedProductCard 
                                                        product={product} 
                                                        index={index}
                                                    />
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="empty"
                                            className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-[#F0F0F0]"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <motion.div
                                                className="w-24 h-24 bg-[#FFF5EB] rounded-full flex items-center justify-center mb-6"
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <svg className="w-12 h-12 text-[#F37303]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                            </motion.div>
                                            <h3 className="text-[#171717] font-aeonik text-xl mb-2">No products found</h3>
                                            <p className="text-[#5A5A5A] font-poppins text-sm text-center max-w-sm mb-6">
                                                We couldn&apos;t find any products in this category. Try selecting a different one.
                                            </p>
                                            <motion.button
                                                onClick={() => setSelectedCategory("All Products")}
                                                className="px-6 py-3 bg-[#F37303] text-white rounded-full font-poppins text-sm font-medium"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                View All Products
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </LayoutGroup>

                            {/* Load More Section */}
                            {!isLoading && filteredProducts.length > 0 && (
                                <motion.div 
                                    className="mt-12 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <p className="text-[#5A5A5A] font-poppins text-sm mb-4">
                                        Showing all {filteredProducts.length} products
                                    </p>
                                    <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#F37303] to-transparent rounded-full" />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <motion.section 
                    className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative bg-gradient-to-br from-[#171717] to-[#2D2D2D] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                backgroundSize: "32px 32px"
                            }} />
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F37303]/30 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF9A4D]/20 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left">
                                <motion.span 
                                    className="inline-block px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm font-poppins mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    🤝 Let&apos;s Connect
                                </motion.span>
                                <h2 className="text-white font-aeonik text-2xl sm:text-3xl lg:text-4xl font-normal mb-4">
                                    Can&apos;t Find What You Need?
                                </h2>
                                <p className="text-white/70 font-poppins text-sm sm:text-base max-w-md">
                                    Our team is here to help you find the perfect healthcare solutions for your needs.
                                </p>
                            </div>

                            <Link href="/contactus">
                                <motion.button
                                    className="flex items-center gap-3 px-8 py-4 bg-[#F37303] text-white rounded-full font-poppins text-sm sm:text-base font-medium shadow-lg shadow-[#F37303]/30"
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(243, 115, 3, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Contact Our Team</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.section>

                {/* Mobile Filter Button */}
                <MobileFilterButton 
                    onClick={toggleFilter} 
                    isOpen={isFilterOpen} 
                />
            </main>

            <Footer />
        </div>
    )
}
