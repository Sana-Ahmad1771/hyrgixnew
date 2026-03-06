"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero2() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      yPercent: 20,
      scale: 1.1,
      opacity: 0.6,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative flex flex-col bg-primary/10 overflow-hidden rounded-b-[60px] md:rounded-b-[100px]"
    >
      {/* Background Layers */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/bg2.png'), url('/bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none px-4 pt-20"
      >
        <Image
          src="/herobg.png"
          alt="Hygrix Tech"
          width={700}
          height={700}
          className="h-[60%] md:h-[80%] lg:h-[90%] w-auto object-contain opacity-60 md:opacity-80"
          priority
        />
      </div>

      {/* CORE CONTENT CONTAINER */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto w-[95%] md:w-[90%] max-w-[1650px] pt-32 pb-12">
        {/* MIDDLE CONTENT AREA */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
            {/* Left Column: Heading - Centered on mobile, Left on LG */}
            <div className="max-w-full lg:max-w-6xl text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-base md:text-lg font-medium mb-2 md:mb-4 text-primary"
              >
                Hey, we are
              </motion.p>
              <h1 className="text-[15vw] sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tighter text-black">
                Hygrix <br className="hidden lg:block" />
              </h1>
            </div>

            {/* Right Column: Description & CTA - Centered on mobile, Left (inside right col) on LG */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-sm lg:ml-auto">
              <h2 className="text-xl md:text-2xl capitalize font-bold mb-4 leading-tight text-black">
                Hospital-grade hygiene <br className="hidden md:block" /> for
                real life.
              </h2>
              <p className="text-black/70 max-w-[450px] text-sm md:text-base leading-relaxed mb-8">
                Infection prevention products engineered for clinics,
                workplaces, schools, and homes tested, compliant, and ready to
                deploy across the UAE and GCC.
              </p>

              {/* EXPANDING BUTTON */}
              <motion.div
                initial="initial"
                whileHover="hover"
                animate="initial"
                className="relative inline-block"
              >
                <Link
                  href="/#products"
                  className="relative flex items-center bg-white h-[48px] md:h-[56px] pl-[4px] md:pl-[6px] pr-6 md:pr-8 rounded-full overflow-hidden shadow-lg border border-black/5"
                >
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
                        View Catalogue
                      </span>

                      {/* Second Span: Visible on hover */}
                      <span className="h-[18px] md:h-[20px] flex items-center text-white text-xs md:text-sm font-bold whitespace-nowrap">
                        View Catalogue
                      </span>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS AREA */}
        <div className="mt-8 pt-8 md:pt-12 border-t border-black/10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatItem number="01" label="GCC" value="Certified" />
          <StatItem number="02" label="Grade" value="Medical" />
          <StatItem number="03" label="Safety" value="100% Tested" />
          <StatItem number="04" label="Reach" value="UAE & GCC" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label, value }) {
  return (
    <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
      <span className="text-[10px] font-bold text-primary">#{number}</span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-black/60 font-semibold">
        {label}
      </span>
      <span className="text-sm md:text-base font-bold text-black">{value}</span>
    </div>
  );
}
