"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for the hero text and floating elements
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section
        ref={containerRef}
        className="bg-secondary-light h-[80vh] lg:h-screen xl:-mt-30 xl:mb-5 relative overflow-hidden flex items-center justify-center"
      >
        {/* Decorative Floating Elements */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            className="absolute top-20 left-[10%] opacity-40 blur-3xl w-64 h-64 bg-primary/20 rounded-full"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 right-[15%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/herobg.png"
              alt="Decoration"
              width={180}
              height={180}
              className="w-32 md:w-48 object-contain opacity-80 rotate-12"
            />
          </motion.div>
        </motion.div>

        {/* Center Headline */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 block">
              Redefining Care Delivery
            </span>
            <h1 className="text-black font-aeonik text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              Healthcare, Simplified <br /> You Can Focus on Living.
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <div className=" px-5 sm:px-10 md:px-20 lg:px-32 relative z-20 -mt-32 md:-mt-48">
        <motion.div
          className="bg-white/80 backdrop-blur-2xl rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          {/* Left: Interactive Form */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-black font-aeonik text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6">
                Get in touch
              </h2>
              <p className="font-poppins text-gray-500 max-w-md leading-relaxed">
                Tell us about your facility. Our experts will recommend the
                perfect hygiene protocols and SKUs for your team.
              </p>
            </div>

            <form className="space-y-8">
              {[
                { label: "Full Name", placeholder: "John Doe", type: "text" },
                {
                  label: "Email Address",
                  placeholder: "john@facility.com",
                  type: "email",
                },
                {
                  label: "Company",
                  placeholder: "Healthcare Center Inc.",
                  type: "text",
                },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  className="group relative"
                  variants={fadeUp}
                >
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-primary transition-all duration-500 placeholder:text-gray-300 text-lg"
                  />
                </motion.div>
              ))}

              <motion.div className="group relative" variants={fadeUp}>
                <label className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2 block">
                  How can we help?
                </label>
                <textarea
                  placeholder="Describe your hygiene requirements..."
                  rows="2"
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-primary transition-all duration-500 resize-none placeholder:text-gray-300 text-lg"
                />
              </motion.div>

              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-3"
              >
                Send Message
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </motion.button> */}

              {/* --- EXPANDING BUTTON --- */}
              <motion.div
                initial="initial"
                whileHover="hover"
                animate="initial"
                className="relative inline-block"
              >
                <div className="relative cursor-pointer flex items-center bg-white h-[48px] md:h-[56px] pl-[4px] md:pl-[6px] pr-6 md:pr-8 rounded-full overflow-hidden shadow-lg border border-black/5">
                  {/* The Orange Circle: Scales based on parent height */}
                  <motion.div
                    className="absolute left-[4px] md:left-[6px] h-[40px] md:h-[44px] bg-primary rounded-full z-0"
                    variants={{
                      initial: { width: 40, md: 44 }, // Adjust initial width for mobile
                      hover: { width: "calc(100% - 8px)" }, // Fills almost entire button on hover
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  />

                  {/* Icon container: Responsive size */}
                  <div className="relative z-10 w-[40px] md:w-[44px] h-[40px] md:h-[44px] flex items-center justify-center overflow-hidden">
                    <motion.div
                      variants={{ initial: { x: 0 }, hover: { x: 40 } }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute"
                      variants={{ initial: { x: -40 }, hover: { x: 0 } }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Text container: Adjusted height for mobile font scaling */}
                  <div className="relative z-10 ml-2 md:ml-3 h-[18px] md:h-[20px] overflow-hidden">
                    <motion.div
                      className="flex flex-col"
                      variants={{
                        initial: { y: 0 },
                        hover: { y: -20 }, // Ensure this matches the md:h-[20px]
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {/* First Span: Visible by default */}
                      <span className="h-[18px] md:h-[20px] flex items-center text-black text-xs md:text-sm font-bold whitespace-nowrap">
                        Send Message
                      </span>

                      {/* Second Span: Visible on hover */}
                      <span className="h-[18px] md:h-[20px] flex items-center text-white text-xs md:text-sm font-bold whitespace-nowrap">
                        Send Message
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </form>
          </div>

          {/* Right: Modern Image Grid (Asymmetrical Bento) */}
          <div className="hidden lg:grid grid-cols-2 gap-4 w-full lg:w-1/2">
            <motion.div variants={fadeUp} className="space-y-4 pt-12">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/HealthTracking2.png"
                  width={300}
                  height={400}
                  className="hover:scale-110 transition-transform duration-700 h-64 object-cover"
                  alt="Med"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl ml-8">
                <Image
                  src="/HealthTracking3.png"
                  width={200}
                  height={200}
                  className="hover:scale-110 transition-transform duration-700 h-40 w-full object-cover"
                  alt="Med"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/HealthTracking4.png"
                  width={250}
                  height={250}
                  className="hover:scale-110 transition-transform duration-700 h-56 w-full object-cover"
                  alt="Med"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/HealthTracking2.png"
                  width={300}
                  height={300}
                  className="hover:scale-110 transition-transform duration-700 h-72 object-cover"
                  alt="Med"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
