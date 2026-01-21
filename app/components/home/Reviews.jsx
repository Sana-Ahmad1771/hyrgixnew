"use client"

import Image from "next/image"
import { motion } from "motion/react"
import ReviewsCard from "./ReviewsCard"
import ReviewsSlider from "./ReviewSlider"
import data from "../data/data.json"

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
      staggerChildren: 0.2
    }
  }
}

export default function Reviews() {
  const review = data.reviews

  // Prepare data for slider
  const sliderData = review.map((item) => ({
    id: item.id,
    component: <ReviewsCard {...item} />,
  }))

  return (
    <section className="bg-[#FFF8F2] mt-30 h-auto w-full flex justify-center">
      <div className="mt-20 mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-center w-full px-5 sm:px-10 md:px-20 lg:px-32 gap-8">

        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col lg:flex-col items-start lg:items-start gap-6 lg:gap-8 lg:w-1/3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="flex items-start lg:flex-col gap-4 lg:gap-6">
            <Image src="/colon.png" alt="Quote icon" width={86} height={66} className="sm:w-20 sm:h-16 w-20 h-12" />
            <h3 className="text-[#1C1C1C] font-aeonik sm:text-3xl text-2xl font-normal leading-none sm:leading-tight">
              What our customers <br /> are saying
            </h3>
          </motion.div>

          {/* CUSTOM ARROWS */}
          <motion.div variants={fadeUp} className="flex gap-5 items-center justify-between w-full lg:w-auto mt-4 lg:mt-6">
            <button className="reviews-prev">
              <Image src="/rightarrow.png" alt="Previous review" width={19} height={19} />
            </button>
            <Image src="/pagination.png" alt="Review pagination dots" width={60} height={10} />
            <button className="reviews-next">
              <Image src="/next1.png" alt="Next review" width={19} height={19} />
            </button>
          </motion.div>
        </motion.div>

        {/* SWIPER */}
        <motion.div
          className="w-full lg:w-[65%]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <ReviewsSlider
            data={sliderData}
            prevClass="reviews-prev"
            nextClass="reviews-next"
          />
        </motion.div>

      </div>
    </section>
  )
}
