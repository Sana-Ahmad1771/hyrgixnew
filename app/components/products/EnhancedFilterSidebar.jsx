"use client";
import { motion, AnimatePresence } from "motion/react";
import { Lightbulb } from "lucide-react";
const categoryIcons = {
  "All Products": (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  ),
  "Hand Hygiene": (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
      />
    </svg>
  ),
  "Surface Care": (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
  "Personal Care": (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  Dispensers: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  Healthcare: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
};

function EnhancedFilterContent({
  categories,
  selectedCategory,
  onCategoryChange,
  onClose,
  productCounts = {},
  isMobile = false,
}) {
  return (
    <div className={`${isMobile ? "" : "sticky top-32"}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#F37303] to-[#FF9A4D] rounded-xl flex items-center justify-center shadow-lg shadow-[#F37303]/20">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-[#171717] font-aeonik text-lg font-medium">
              Filter
            </h3>
            <p className="text-[#888] font-poppins text-xs">
              Browse by category
            </p>
          </div>
        </div>
        {isMobile && (
          <motion.button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close filters"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E1E1E1] to-transparent mb-6" />

      {/* Categories */}
      <div className="flex flex-col gap-2">
        {categories.map((category, index) => {
          const isActive = selectedCategory === category;
          const icon = categoryIcons[category] || categoryIcons["All Products"];
          const count = productCounts[category] || 0;

          return (
            <motion.button
              key={category}
              onClick={() => {
                onCategoryChange(category);
                if (isMobile) onClose();
              }}
              className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-[#F37303] to-[#FF9A4D] text-white shadow-lg shadow-[#F37303]/25"
                  : "bg-[#F8F8F8] text-[#5A5A5A] hover:bg-[#FFF5EB] hover:text-[#F37303]"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: isActive ? 1 : 1.02, x: isActive ? 0 : 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Icon */}
              <span
                className={`shrink-0 ${isActive ? "text-white" : "text-[#F37303]"}`}
              >
                {icon}
              </span>

              {/* Label */}
              <span className="font-poppins text-sm font-medium grow text-left">
                {category}
              </span>

              {/* Count Badge */}
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#E8E8E8] text-[#888]"
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Reset Filter */}
      <AnimatePresence>
        {selectedCategory !== "All Products" && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => {
              onCategoryChange("All Products");
              if (isMobile) onClose();
            }}
            className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-[#E1E1E1] text-[#5A5A5A] hover:border-[#F37303] hover:text-[#F37303] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="font-poppins text-sm font-medium">
              Reset Filter
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Help Section */}
      <motion.div
        className="mt-8 p-4 bg-gradient-to-br from-[#FFF5EB] to-[#FCF2E5] rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-[#F37303] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[#171717] font-aeonik text-sm font-medium mb-1">
              Need Help?
            </h4>
            <p className="text-[#5A5A5A] font-poppins text-xs leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Contact our team for
              assistance.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function EnhancedFilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  isOpen,
  onClose,
  productCounts = {},
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
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-sm border border-[#F0F0F0] sticky top-32"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EnhancedFilterContent
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            onClose={onClose}
            productCounts={productCounts}
          />
        </motion.div>
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
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.aside
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <EnhancedFilterContent
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={onCategoryChange}
                  onClose={onClose}
                  productCounts={productCounts}
                  isMobile={true}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
