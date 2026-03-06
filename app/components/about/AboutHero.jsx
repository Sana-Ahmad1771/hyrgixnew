"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Brands from "../common/Brands";

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export default function AboutHero() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const innerBgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      innerBgRef.current,
      { yPercent: -10, scale: 1.2 },
      {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-primary/10 min-h-[80vh] relative flex flex-col pt-5 overflow-hidden"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Container aligned with Navbar logic:
          Navbar is flex justify-center, so we use mx-auto.
          Navbar uses w-[95%] on mobile and w-[90%] on md.
      */}
      <div className="mt-20 lg:mt-24 mb-10 mx-auto w-[95%] md:w-[90%] max-w-[1650px]">
        <div className="flex-1 flex items-center">
          <div
            ref={cardRef}
            className="w-full rounded-[40px] overflow-hidden h-full shadow-sm relative min-h-[500px] lg:min-h-[700px]"
          >
            {/* --- PARALLAX BACKGROUND --- */}
            <div
              ref={innerBgRef}
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
              style={{
                backgroundImage: "url('/aboutbg.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />

            {/* --- CONTENT --- */}
            <motion.div
              className="relative z-20 h-full flex items-center min-h-[500px] lg:min-h-[700px]"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-8 sm:p-12 lg:p-24 w-full">
                <motion.h3
                  className="text-white font-aeonik text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-4xl"
                  variants={fadeUp}
                >
                  Hygiene solutions <br className="hidden md:block" /> tailored
                  to every facility
                </motion.h3>

                <motion.p
                  className="mt-6 text-white/80 font-poppins text-base md:text-lg font-normal leading-relaxed max-w-xl"
                  variants={fadeUp}
                >
                  Hygrix supplies infection-control essentials from IPA sprays
                  and wipes to touchless dispensers, PPE, and surface cleaners
                  supported by training, SOPs, and dependable local logistics.
                </motion.p>

                {/* --- PREMIUM BUTTON --- */}
                <motion.div variants={fadeUp} className="mt-10">
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    animate="initial"
                    className="relative inline-block"
                  >
                    <Link
                      href="/#products"
                      className="relative flex items-center bg-white h-[56px] pl-[6px] pr-8 rounded-full overflow-hidden shadow-md border border-black/5"
                    >
                      <motion.div
                        className="absolute left-[6px] h-[44px] bg-primary rounded-full z-0"
                        variants={{
                          initial: { width: 44 },
                          hover: { width: "calc(100% - 12px)" },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                        }}
                      />

                      <div className="relative z-10 w-[44px] h-[44px] flex items-center justify-center overflow-hidden">
                        <motion.div
                          variants={{
                            initial: { x: 0 },
                            hover: { x: 40 },
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.div>

                        <motion.div
                          className="absolute"
                          variants={{
                            initial: { x: -40 },
                            hover: { x: 0 },
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>

                      <div className="relative z-10 ml-3 h-[20px] overflow-hidden">
                        <motion.div
                          className="flex flex-col"
                          variants={{
                            initial: { y: 0 },
                            hover: { y: -20 },
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <span className="h-[20px] flex items-center text-black text-sm font-bold">
                            Contact Us
                          </span>
                          <span className="h-[20px] flex items-center text-white text-sm font-bold">
                            Contact Us
                          </span>
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mb-15 relative z-10 w-full">
        <Brands />
      </div>
    </section>
  );
}
