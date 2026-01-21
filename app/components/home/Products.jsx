"use client"

import Link from "next/link"
import { motion } from "motion/react"
import Button from "./FeaturesButon"
import data from "../data/data.json"
import ProductCard from "./ProductCard"

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Products() {
  const products = data.products

  return (
    <section id="products" className="mt-30 mx-5 items-center sm:mx-10 md:mx-20 lg:mx-32 flex flex-col gap-7 md:gap-10">
      
      {/* Heading */}
      <motion.div
        className="flex gap-3 flex-col items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <Button />
        </motion.div>

        <motion.h3 
          className="text-[#171717] text-center font-aeonik text-3xl sm:text-4xl md:text-4xl font-normal"
          variants={fadeUp}
        >
          Simplified You Can Focus on Living
        </motion.h3>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {products.slice(0, 5).map((product) => (
          <motion.div key={product.id} variants={fadeUp}>
            <ProductCard
              id={product.id}
              image={product.image}
              name={product.name}
              quantity={product.quantity}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        className="mt-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Link href="/products">
          <motion.div
            className="flex items-center justify-center w-28 sm:w-30 md:w-32 h-10 sm:h-10.5 md:h-11 rounded-full bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-medium text-xs sm:text-xs md:text-sm transition-all duration-300">
              View More
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
