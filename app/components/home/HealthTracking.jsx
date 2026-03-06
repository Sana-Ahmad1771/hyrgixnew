"use client";

import Image from "next/image";
import Button from "./FeaturesButon";
import Link from "next/link";
import { motion } from "framer-motion";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function HealthTracking() {
  return (
    <section className="py-24 lg:py-40">
      <div className="px-5 sm:px-10 md:px-20 lg:px-32">
        {/* Editorial Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-6 lg:w-2/3">
            <motion.div variants={fadeUp}>
              <Button />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-black font-aeonik text-2xl sm:text-3xl md:text-4xl font-normal"
            >
              Hygiene built for <br />
              high-use environments
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-black/60 font-poppins text-sm md:text-base max-w-sm leading-relaxed"
          >
            Hygrix products pair medical-grade efficacy with people-first
            design, ensuring durability where it matters most.
          </motion.p>
        </motion.div>

        {/* Editorial Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Feature Card (Large) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-8 group relative h-[500px] rounded-[32px] overflow-hidden bg-primary-light p-10 flex flex-col justify-between"
          >
            <div className="relative z-10 flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
                01 — Formulation
              </span>
              <h3 className="text-black font-aeonik text-3xl md:text-4xl font-normal max-w-md">
                Hospital-grade formulations
              </h3>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-6">
              <p className="text-black/70 font-poppins text-sm max-w-xs">
                Alcohol sprays, surface disinfectants, and wipes engineered to
                meet rigorous medical and industrial safety requirements.
              </p>
              <Link
                href="/products"
                className="px-8 py-3 bg-white rounded-full text-xs font-semibold shadow-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                View SKUs
              </Link>
            </div>

            {/* Image as a background element for the card */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <Image
                src="/HealthTracking1.png"
                fill
                className="object-cover grayscale"
                alt="Formulation"
              />
            </div>
          </motion.div>

          {/* Secondary Image (Tall) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-4 h-[500px] rounded-[32px] overflow-hidden relative shadow-lg"
          >
            <Image
              src="/HealthTracking2.png"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
              alt="Med"
            />
          </motion.div>

          {/* Bottom Row - 3 Small Cards */}

          {/* Compliance Card */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-4 bg-white border border-border rounded-[32px] p-8 h-[320px] flex flex-col justify-between hover:border-black transition-colors group"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
              02 — Logistics
            </span>
            <div>
              <h4 className="font-aeonik text-xl mb-3">Ready to ship</h4>
              <p className="text-black/50 text-xs leading-relaxed mb-6">
                Consistent local stock with rapid fulfillment across the GCC.
              </p>
              <Link
                href="/contactus"
                className="text-xs border-b border-black pb-1 hover:opacity-50 transition-opacity"
              >
                Check availability
              </Link>
            </div>
          </motion.div>

          {/* Support Card */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-4 bg-white border border-border rounded-[32px] p-8 h-[320px] flex flex-col justify-between hover:border-black transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
              03 — Standards
            </span>
            <div>
              <h4 className="font-aeonik text-xl mb-3">Compliance ready</h4>
              <p className="text-black/50 text-xs leading-relaxed mb-6">
                SDS, usage protocols, and training guides included for audit
                readiness.
              </p>
              <Link
                href="/aboutus"
                className="text-xs border-b border-black pb-1 hover:opacity-50 transition-opacity"
              >
                Download docs
              </Link>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-4 h-[320px] rounded-[32px] overflow-hidden relative shadow-md"
          >
            <Image
              src="/HealthTracking3.png"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Training"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
