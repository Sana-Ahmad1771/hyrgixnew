"use client"
import { motion, AnimatePresence } from "motion/react"

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.3
        }
    })
}

function FilterContent({ 
    categories, 
    selectedCategory, 
    onCategoryChange, 
    onClose, 
    isMobile = false 
}) {
    return (
        <div className={`${isMobile ? '' : 'sticky top-32'}`}>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#171717] font-aeonik text-xl font-medium">
                    Categories
                </h3>
                {isMobile && (
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close filters"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>

            <div className="flex flex-col gap-2">
                {categories.map((category, index) => (
                    <motion.button
                        key={category}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={() => {
                            onCategoryChange(category)
                            if (isMobile) onClose()
                        }}
                        className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                            selectedCategory === category
                                ? 'bg-[#F37303] text-white shadow-md'
                                : 'bg-[#F8F8F8] text-[#5A5A5A] hover:bg-[#FFF5EB] hover:text-[#F37303]'
                        }`}
                    >
                        <span className="font-poppins text-sm font-medium">
                            {category}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Reset Filter */}
            {selectedCategory !== "All Products" && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => {
                        onCategoryChange("All Products")
                        if (isMobile) onClose()
                    }}
                    className="mt-6 w-full px-4 py-3 rounded-xl border border-[#E1E1E1] text-[#5A5A5A] hover:border-[#F37303] hover:text-[#F37303] transition-all duration-300"
                >
                    <span className="font-poppins text-sm font-medium">
                        Clear Filter
                    </span>
                </motion.button>
            )}
        </div>
    )
}

export default function FilterSidebar({ 
    categories, 
    selectedCategory, 
    onCategoryChange, 
    isOpen, 
    onClose 
}) {
    const sidebarVariants = {
        hidden: { 
            x: "-100%",
            opacity: 0,
        },
        visible: { 
            x: 0,
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
            }
        },
        exit: { 
            x: "-100%",
            opacity: 0,
            transition: { 
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F0F0F0]">
                    <FilterContent 
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={onCategoryChange}
                        onClose={onClose}
                    />
                </div>
            </aside>

            {/* Mobile Overlay & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={onClose}
                            className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        />

                        {/* Drawer */}
                        <motion.aside
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="lg:hidden fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl overflow-y-auto"
                        >
                            <div className="p-6">
                                <FilterContent 
                                    categories={categories}
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={onCategoryChange}
                                    onClose={onClose}
                                    isMobile={true} 
                                />
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
