"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Button from "./FeaturesButon";
import data from "../data/data.json";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Products() {
  const products = data.products;

  return (
    <section
      id="products"
      className="mt-30 mx-5 items-center sm:mx-10 md:mx-20 lg:mx-32 flex flex-col gap-7 md:gap-10"
    >
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
          className="text-black text-center font-aeonik text-3xl sm:text-4xl md:text-4xl font-normal"
          variants={fadeUp}
        >
          The Hygrix infection-control range
        </motion.h3>
      </motion.div>

      {/* Product Grid */}
      {/* Product Grid */}
<motion.div
  className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-stretch" // Added items-stretch
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  {products.slice(0, 5).map((product) => (
    <motion.div key={product.id} variants={fadeUp} className="h-full"> {/* Added h-full */}
      <ProductCard
        id={product.id}
        slug={product.slug}
        image={product.image}
        name={product.name}
        quantity={product.quantity}
      />
    </motion.div>
  ))}
</motion.div>
      {/* --- FIXED EXPANDING BUTTON --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        whileHover="hover" // Only trigger hover states on mouse enter
        className="relative inline-block"
      >
        <Link
          href="/#products"
          className="relative flex items-center bg-white h-[50px] pl-[6px] pr-8 rounded-full overflow-hidden shadow-md border border-black/5"
        >
          {/* The Orange Circle */}
          <motion.div
            className="absolute left-[6px] h-[40px] bg-primary rounded-full z-0"
            initial={{ width: 40 }} // Set the specific starting width here
            variants={{
              hover: { width: "calc(100% - 12px)" },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          />

          {/* Icon container with sliding arrows */}
          <div className="relative z-10 w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              variants={{
                hover: { x: 40 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>

            <motion.div
              className="absolute"
              initial={{ x: -40 }}
              variants={{
                hover: { x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* Text container */}
          <div className="relative z-10 ml-3 h-[20px] overflow-hidden">
            <motion.div
              className="flex flex-col"
              initial={{ y: 0 }}
              variants={{
                hover: { y: -20 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <span className="h-[20px] flex items-center text-black text-sm font-bold">
                view more
              </span>
              <span className="h-[20px] flex items-center text-white text-sm font-bold">
                view more
              </span>
            </motion.div>
          </div>
        </Link>
      </motion.div>
      {/* View More Button */}
      {/* <motion.div
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
      </motion.div> */}
    </section>
  );
}
