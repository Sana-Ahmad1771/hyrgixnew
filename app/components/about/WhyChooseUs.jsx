"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../home/FeaturesButon";
import ReasonsCard from "./Reasons";
import data from "../../components/data/data.json";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const reasons = data.reasons;

  useEffect(() => {
    // 1. Image Parallax & Scaling
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0, x: -50 },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
        },
      },
    );

    // 2. Staggered reveal for the ReasonsCards
    const cards = gsap.utils.toArray(".reason-card-wrapper");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-5 sm:px-10 md:px-20 lg:px-32 py-24 sm:py-32 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-center overflow-hidden bg-white"
    >
      {/* --- LEFT SIDE: THE IMAGE --- */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div ref={imageRef}>
          <Image
            src="/chooseus.png"
            alt="Why choose us"
            width={520}
            height={520}
            className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-130 h-auto object-contain transition-all duration-300"
          />
        </div>
      </div>

      {/* --- RIGHT SIDE: CONTENT --- */}
      <div
        ref={contentRef}
        className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start"
      >
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
          <Button />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-aeonik font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight transition-all duration-300"
          >
            Why teams choose Hygrix <br className="hidden xl:block" />
            for infection control
          </motion.h2>
        </div>

        {/* --- REASONS LIST --- */}
        <div className="flex flex-col gap-4 w-full">
          {reasons.map((item) => (
            <div key={item.id} className="reason-card-wrapper">
              <ReasonsCard {...item} />
            </div>
          ))}
        </div>

        {/* --- UPGRADED INTERACTIVE BUTTON --- */}
        <div className="mt-4">
          <motion.div
            initial="initial"
            whileHover="hover"
            animate="initial"
            className="relative inline-block mt-3"
          >
            <Link
              href="/#products"
              className="relative flex items-center bg-black h-[50px] pl-[6px] pr-8 rounded-full overflow-hidden shadow-md border border-black/5"
            >
              {/* The Orange Circle: Forced expansion via variants */}
              <motion.div
                className="absolute left-[6px] h-[40px] bg-primary rounded-full z-0"
                variants={{
                  initial: { width: 40 },
                  hover: { width: "calc(100% - 12px)" },
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />

              {/* Icon container with sliding arrows */}
              <div className="relative z-10 w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
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
              {/* Text container with color and position swap */}
              <div className="relative z-10 ml-3 h-[20px] overflow-hidden">
                <motion.div
                  className="flex flex-col"
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -20 }, // Moves up exactly the height of one span
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* First Span: Black (Visible by default) */}
                  <span className="h-[20px] flex items-center text-white text-sm font-bold">
                    Plan my hygiene program
                  </span>

                  {/* Second Span: White (Visible on hover) */}
                  <span className="h-[20px] flex items-center text-white text-sm font-bold">
                    Plan my hygiene program
                  </span>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
