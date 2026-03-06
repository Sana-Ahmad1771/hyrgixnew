"use client";
import { motion } from "motion/react";
import { Package, Tag, Sparkles } from "lucide-react";

export default function ProductHero({ totalProducts, categories }) {
  const stats = [
    { label: "Products", value: totalProducts, icon: Package },
    { label: "Categories", value: categories?.length - 1 || 0, icon: Tag },
    { label: "Quality Assured", value: "100%", icon: Sparkles },
  ];

  return (
    <section className="relative overflow-hidden  py-12 sm:py-16 lg:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#F37303]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF9A4D]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-[15%] opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Package className="w-10 h-10 text-[#F37303]" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-[20%] opacity-20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Sparkles className="w-8 h-8 text-[#F37303]" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-[30%] opacity-20"
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Tag className="w-8 h-8 text-[#F37303]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF5EB] rounded-full">
            <span className="w-2 h-2 bg-[#F37303] rounded-full animate-pulse" />
            <span className="text-[#F37303] font-poppins text-sm font-medium">
              Premium Healthcare Products
            </span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-center text-[#171717] font-aeonik text-4xl sm:text-5xl md:text-6xl font-normal mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Product{" "}
          <span className="relative inline-block">
            Collection
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.path
                d="M2 8C50 2 150 2 198 8"
                stroke="#F37303"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.svg>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-center text-[#5A5A5A] font-poppins text-base sm:text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our comprehensive range of healthcare and hygiene products
          designed to keep you and your loved ones safe and healthy.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-[#F0F0F0]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <stat.icon className="w-6 h-6 text-[#F37303]" />
              <div>
                <span className="block text-[#171717] font-aeonik text-xl font-medium">
                  {stat.value}
                </span>
                <span className="text-[#5A5A5A] font-poppins text-xs">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
