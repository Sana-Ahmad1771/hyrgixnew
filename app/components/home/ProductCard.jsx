"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
export default function ProductCard({ id, slug, image, name, quantity }) {
  return (
    <Link href={`/products/${slug}`} className="block group h-full">
      {" "}
      {/* Added h-full to Link */}
      <motion.div
        className="bg-[#FBFBFB] p-5 flex flex-col gap-5 rounded-3xl shadow-sm border border-transparent hover:border-primary/10 hover:shadow-md transition-colors duration-300 cursor-pointer h-full"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        {/* Image Container */}
        <div className="bg-white rounded-2xl p-3 relative flex justify-center items-center h-40 sm:h-44 md:h-48 w-full overflow-hidden flex-shrink-0">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Background Image */}
            <motion.div
              className="relative z-0"
              variants={{
                hover: { x: -12, y: -8, rotate: -6 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={image}
                alt={name}
                width={144}
                height={144}
                className="h-28 sm:h-32 md:h-36 object-contain opacity-40 blur-[1px]"
                priority
              />
            </motion.div>

            {/* Foreground Image */}
            <motion.div
              className="absolute z-10"
              variants={{
                hover: { x: 12, y: 8, rotate: 6 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={image}
                alt={name}
                width={144}
                height={144}
                className="h-28 sm:h-32 md:h-36 object-contain drop-shadow-xl"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Product Info - Changed to flex-1 and justify-between */}
        <div className="flex flex-col gap-2 flex-1 justify-between">
          <div>
            <h6 className="text-[#222823] font-aeonik text-sm sm:text-base md:text-base font-bold leading-tight capitalize">
              {name}
            </h6>
            <span className="text-[#5A5A5A] font-poppins text-xs font-medium leading-normal opacity-80">
              {quantity}
            </span>
          </div>

          <div className="flex gap-2 items-center mt-auto pt-1">
            <span className="text-primary font-aeonik text-xs sm:text-xs md:text-sm font-bold leading-normal capitalize border-b border-transparent group-hover:border-primary transition-all">
              View Details
            </span>
            <motion.div
              variants={{
                hover: { x: 5 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
