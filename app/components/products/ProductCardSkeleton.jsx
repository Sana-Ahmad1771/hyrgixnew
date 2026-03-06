"use client";
import { motion } from "motion/react";

export default function ProductCardSkeleton() {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden border border-[#F0F0F0] h-full">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-20" />

      {/* Image Skeleton */}
      <div className="relative h-48 sm:h-52 bg-gray-100">
        <div className="absolute top-4 left-4 w-20 h-6 bg-gray-200 rounded-full" />
      </div>

      {/* Content Skeleton */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded-lg w-3/4" />
          <div className="h-5 bg-gray-200 rounded-lg w-1/2" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 rounded w-full" />
          <div className="h-3 bg-gray-100 rounded w-5/6" />
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-100 rounded-full" />
          <div className="h-6 w-20 bg-gray-100 rounded-full" />
        </div>

        {/* CTA */}
        <div className="h-10 bg-gray-100 rounded-xl w-full" />
      </div>
    </div>
  );
}
