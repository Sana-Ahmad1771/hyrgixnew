"use client"
import { use, useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import EnhancedProductCard from "../../components/products/EnhancedProductCard"
import data from "../../components/data/data.json"

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

// Tab Component
function ProductTabs({ activeTab, setActiveTab, tabs }) {
    return (
        <div className="flex gap-2 p-1 bg-[#F8F8F8] rounded-xl overflow-x-auto">
            {tabs.map((tab) => (
                <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 py-3 rounded-lg font-poppins text-sm font-medium whitespace-nowrap transition-all ${
                        activeTab === tab.id
                            ? "text-white"
                            : "text-[#5A5A5A] hover:text-[#F37303]"
                    }`}
                    whileTap={{ scale: 0.98 }}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="activeTabBg"
                            className="absolute inset-0 bg-gradient-to-r from-[#F37303] to-[#FF9A4D] rounded-lg"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        {tab.icon}
                        {tab.label}
                    </span>
                </motion.button>
            ))}
        </div>
    )
}

export default function ProductDetailPage({ params }) {
    const { id } = use(params)
    const products = data.products
    const product = products.find(p => p.id === parseInt(id))
    const [activeTab, setActiveTab] = useState("features")
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    if (!product) {
        notFound()
    }

    // Get related products (same category, excluding current product)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)

    const tabs = [
        { 
            id: "features", 
            label: "Features",
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        },
        { 
            id: "specifications", 
            label: "Specifications",
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
        },
        { 
            id: "usage", 
            label: "How to Use",
            icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        },
    ]

    return (
        <div className="min-h-screen pt-28 bg-gradient-to-b from-[#FCF2E5]/50 to-white">
            <main className="pt-6 pb-20">
                {/* Breadcrumb */}
                <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 mb-8">
                    <motion.nav 
                        className="flex items-center gap-2 text-sm flex-wrap"
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
                        <Link href="/products" className="text-[#5A5A5A] hover:text-[#F37303] transition-colors">
                            Products
                        </Link>
                        <svg className="w-4 h-4 text-[#D1D1D1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-[#F37303] font-medium line-clamp-1">{product.name}</span>
                    </motion.nav>
                </div>

                {/* Product Detail Section */}
                <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32">
                    <div className="bg-white rounded-3xl shadow-xl shadow-black/5 overflow-hidden border border-[#F0F0F0]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
                            
                            {/* Product Image Gallery */}
                            <motion.div 
                                className="relative p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-[#F8F8F8] to-[#F0F0F0]"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {/* Floating Background Elements */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <motion.div
                                        className="absolute top-10 right-10 w-32 h-32 bg-[#F37303]/5 rounded-full blur-2xl"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0.8, 0.5],
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="absolute bottom-20 left-10 w-24 h-24 bg-[#FF9A4D]/10 rounded-full blur-xl"
                                        animate={{
                                            scale: [1.2, 1, 1.2],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                    />
                                </div>

                                {/* Category Badge */}
                                <motion.span 
                                    className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 px-4 py-2 bg-white shadow-lg text-[#F37303] text-xs font-medium rounded-full flex items-center gap-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span className="w-2 h-2 bg-[#F37303] rounded-full animate-pulse" />
                                    {product.category}
                                </motion.span>

                                {/* Main Image Display */}
                                <div className="relative flex items-center justify-center min-h-80 sm:min-h-100 lg:min-h-125">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={selectedImageIndex}
                                            className="relative"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            {/* Shadow/Ghost Image */}
                                            <Image 
                                                src={product.image} 
                                                alt={product.name} 
                                                width={320}
                                                height={320}
                                                className="object-contain absolute top-4 left-8 opacity-20 blur-sm" 
                                            />
                                            {/* Main Image */}
                                            <motion.div
                                                whileHover={{ scale: 1.05, rotate: 2 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Image 
                                                    src={product.image} 
                                                    alt={product.name} 
                                                    width={320}
                                                    height={320}
                                                    className="object-contain relative z-10 drop-shadow-2xl" 
                                                />
                                            </motion.div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Image Thumbnails */}
                                <div className="flex justify-center gap-3 mt-8">
                                    {[0, 1, 2].map((index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setSelectedImageIndex(index)}
                                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                                                selectedImageIndex === index
                                                    ? "border-[#F37303] shadow-lg shadow-[#F37303]/20"
                                                    : "border-white/50 opacity-60 hover:opacity-100"
                                            }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="w-full h-full bg-white p-2 flex items-center justify-center">
                                                <Image 
                                                    src={product.image} 
                                                    alt={`${product.name} view ${index + 1}`} 
                                                    width={60}
                                                    height={60}
                                                    className="object-contain" 
                                                />
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Product Info */}
                            <motion.div 
                                className="flex flex-col p-6 sm:p-8 lg:p-12"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Quantity Badge */}
                                <motion.div variants={fadeUp} className="mb-4">
                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F8F8] text-[#5A5A5A] text-sm rounded-full">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                        {product.quantity}
                                    </span>
                                </motion.div>

                                {/* Product Name */}
                                <motion.h1 
                                    className="text-[#171717] font-aeonik text-2xl sm:text-3xl lg:text-4xl font-normal mb-4 leading-tight"
                                    variants={fadeUp}
                                >
                                    {product.name}
                                </motion.h1>

                                {/* Description */}
                                <motion.p 
                                    className="text-[#5A5A5A] font-poppins text-sm sm:text-base leading-relaxed mb-8"
                                    variants={fadeUp}
                                >
                                    {product.description}
                                </motion.p>

                                {/* Trust Badges */}
                                <motion.div 
                                    className="flex flex-wrap gap-4 mb-8"
                                    variants={fadeUp}
                                >
                                    {[
                                        { icon: "🛡️", label: "Quality Assured" },
                                        { icon: "✨", label: "Premium Grade" },
                                        { icon: "🌿", label: "Safe Formula" },
                                    ].map((badge, idx) => (
                                        <motion.div
                                            key={badge.label}
                                            className="flex items-center gap-2 px-3 py-2 bg-[#FFF5EB] rounded-lg"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + idx * 0.1 }}
                                        >
                                            <span>{badge.icon}</span>
                                            <span className="text-[#F37303] font-poppins text-xs font-medium">
                                                {badge.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Tabs */}
                                <motion.div variants={fadeUp} className="mb-6">
                                    <ProductTabs 
                                        activeTab={activeTab} 
                                        setActiveTab={setActiveTab}
                                        tabs={tabs}
                                    />
                                </motion.div>

                                {/* Tab Content */}
                                <motion.div 
                                    className="grow"
                                    variants={fadeUp}
                                >
                                    <AnimatePresence mode="wait">
                                        {activeTab === "features" && (
                                            <motion.div
                                                key="features"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="space-y-3"
                                            >
                                                {product.features?.map((feature, index) => (
                                                    <motion.div 
                                                        key={index}
                                                        className="flex items-start gap-3 p-3 bg-[#F8F8F8] rounded-xl hover:bg-[#FFF5EB] transition-colors"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.08 }}
                                                    >
                                                        <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#F37303] to-[#FF9A4D] flex items-center justify-center mt-0.5">
                                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-[#5A5A5A] font-poppins text-sm leading-relaxed">
                                                            {feature}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}

                                        {activeTab === "specifications" && product.specifications && (
                                            <motion.div
                                                key="specifications"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="grid grid-cols-2 gap-3"
                                            >
                                                {Object.entries(product.specifications).map(([key, value], index) => (
                                                    <motion.div 
                                                        key={key}
                                                        className="p-4 bg-gradient-to-br from-[#F8F8F8] to-[#F0F0F0] rounded-xl border border-[#E8E8E8]"
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.08 }}
                                                    >
                                                        <span className="block text-[#888] font-poppins text-xs mb-1 uppercase tracking-wide">
                                                            {key}
                                                        </span>
                                                        <span className="text-[#171717] font-aeonik text-sm font-medium">
                                                            {value}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}

                                        {activeTab === "usage" && (
                                            <motion.div
                                                key="usage"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="p-6 bg-gradient-to-br from-[#FFF5EB] to-[#FCF2E5] rounded-xl"
                                            >
                                                <h4 className="text-[#171717] font-aeonik text-lg font-medium mb-4 flex items-center gap-2">
                                                    <span className="text-2xl">📋</span>
                                                    Usage Instructions
                                                </h4>
                                                <ol className="space-y-3">
                                                    {[
                                                        "Apply adequate amount to the desired area",
                                                        "Use as directed on the product label",
                                                        "Store in a cool, dry place",
                                                        "Keep out of reach of children"
                                                    ].map((step, idx) => (
                                                        <motion.li 
                                                            key={idx}
                                                            className="flex items-start gap-3"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                        >
                                                            <span className="shrink-0 w-6 h-6 bg-[#F37303] text-white rounded-full flex items-center justify-center text-xs font-medium">
                                                                {idx + 1}
                                                            </span>
                                                            <span className="text-[#5A5A5A] font-poppins text-sm">
                                                                {step}
                                                            </span>
                                                        </motion.li>
                                                    ))}
                                                </ol>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Contact CTA */}
                                <motion.div 
                                    className="mt-8 pt-8 border-t border-[#E1E1E1]"
                                    variants={fadeUp}
                                >
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href="/contactus" className="flex-1">
                                            <motion.button 
                                                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F37303] to-[#FF9A4D] text-white rounded-xl font-poppins text-sm font-medium shadow-lg shadow-[#F37303]/25"
                                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(243, 115, 3, 0.3)" }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                <span>Inquire Now</span>
                                            </motion.button>
                                        </Link>
                                        <motion.button 
                                            className="px-8 py-4 border-2 border-[#E1E1E1] text-[#5A5A5A] rounded-xl font-poppins text-sm font-medium hover:border-[#F37303] hover:text-[#F37303] transition-colors flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                            <span>Share</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Section Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <motion.span 
                                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF5EB] text-[#F37303] text-xs font-medium rounded-full mb-3"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#F37303] rounded-full animate-pulse" />
                                        You might also like
                                    </motion.span>
                                    <h2 className="text-[#171717] font-aeonik text-2xl sm:text-3xl font-normal">
                                        Related Products
                                    </h2>
                                </div>
                                <Link href="/products">
                                    <motion.button
                                        className="hidden sm:flex items-center gap-2 px-5 py-2.5 border border-[#E1E1E1] rounded-full text-[#5A5A5A] hover:border-[#F37303] hover:text-[#F37303] transition-colors font-poppins text-sm"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        View All
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </motion.button>
                                </Link>
                            </div>
                            
                            <motion.div 
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {relatedProducts.map((relatedProduct, index) => (
                                    <motion.div key={relatedProduct.id} variants={fadeUp}>
                                        <EnhancedProductCard product={relatedProduct} index={index} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                )}

                {/* Back to Products */}
                <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-32 mt-12">
                    <Link href="/products">
                        <motion.button 
                            className="flex items-center gap-2 px-5 py-3 bg-[#F8F8F8] rounded-xl text-[#5A5A5A] hover:bg-[#FFF5EB] hover:text-[#F37303] transition-all font-poppins text-sm"
                            whileHover={{ x: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Back to All Products</span>
                        </motion.button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
