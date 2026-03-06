"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function EnhancedProductCard({ product, index = 0 }) {
  const {
    id,
    slug,
    image,
    name,
    quantity,
    shortDescription,
    category,
    features,
  } = product;

  return (
    <Link href={`/products/${slug}`} className="block h-full">
      <motion.article
        className="group relative bg-white rounded-2xl overflow-hidden h-full border border-[#F0F0F0] hover:border-[#F37303]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#F37303]/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -8 }}
      >
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 overflow-hidden bg-gradient-to-br from-[#F8F8F8] to-[#F0F0F0]">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #F37303 1px, transparent 1px),
                                            radial-gradient(circle at 80% 20%, #F37303 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "30px 30px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Product Images */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              className="relative w-full h-full max-w-[220px] max-h-[280px]"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            >
              {/* Shadow Image */}
              <div className="absolute inset-0 opacity-20 blur-md transform translate-x-1 translate-y-1">
                <Image
                  src={image}
                  alt={`${name} shadow`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Main Image */}
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                priority
                quality={95}
              />
            </motion.div>
          </div>

          {/* Category Badge */}
          <motion.span
            className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#F37303] text-xs font-medium rounded-full shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            {category}
          </motion.span>

          {/* Quick View Button */}
          <motion.div
            className="absolute bottom-4 right-4 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <svg
                className="w-5 h-5 text-[#F37303]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 flex flex-col grow">
          {/* Product Name */}
          <h3 className="text-[#171717] font-aeonik text-base sm:text-lg font-medium leading-tight line-clamp-2 mb-2 group-hover:text-[#F37303] transition-colors duration-300">
            {name}
          </h3>

          {/* Description */}
          <p className="text-[#5A5A5A] font-poppins text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4 grow">
            {shortDescription}
          </p>

          {/* Features Tags */}
          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {features.slice(0, 2).map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-[#F8F8F8] text-[#5A5A5A] text-[10px] font-poppins rounded-md"
                >
                  {feature.length > 20
                    ? feature.substring(0, 20) + "..."
                    : feature}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#F0F0F0]">
            <span className="text-[#888] font-poppins text-xs">{quantity}</span>

            {/* CTA */}
            <motion.span
              className="flex items-center gap-1.5 text-[#F37303] font-poppins text-xs sm:text-sm font-medium"
              whileHover={{ x: 3 }}
            >
              View Details
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.span>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F37303]/5 to-transparent" />
        </div>
      </motion.article>
    </Link>
  );
}
