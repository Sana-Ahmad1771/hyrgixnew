"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);

    // --- REFINED GSAP LOGIC ---

    // 1. Minimal Floating (Breathing)
    // Reduced x/y and rotation for a calmer look
    gsap.to(imageRef.current, {
      y: 8,
      x: 3,
      rotation: 0.5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 2. Controlled Scroll Path
    // Limited xPercent/yPercent so it stays "behind" the content properly
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      xPercent: 5, // Very slight move right
      yPercent: 12, // Moves down moderately
      scale: 1.05, // Minimal zoom
      opacity: 0.4, // Maintains visibility longer
    });

    return () => {
      window.removeEventListener("resize", update);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isDesktop || !containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative flex items-center justify-center p-4 lg:p-10 bg-[#FFE4CF]/70 overflow-hidden"
    >
      {/* Backgrounds */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg.png'), url('/bg2.png'), url('/bg2.png')",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundSize: "cover, cover, cover",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Capsule */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full px-5 sm:px-10 md:px-20 lg:px-24 mt-16 max-w-[1650px] min-h-[86vh] bg-white/10 border border-white/40 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center overflow-hidden text-center"
      >
        {/* 2nd IMAGE */}
        <div
          ref={imageRef}
          className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none"
          style={{ transform: "translate(-2%, -5%)" }}
        >
          <Image
            src="/herobg.png"
            alt="Hygrix Tech"
            width={700}
            height={700}
            className="object-contain opacity-70 drop-shadow-[0_20px_50px_rgba(243,115,3,0.15)]"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-full mx-auto p-8 lg:p-20 flex flex-col items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-black leading-[1.2] tracking-tighter mb-6">
            Hygrix keeps every touchpoint protected.
            <br />
            Hospital-grade hygiene for real life.
          </h1>

          <p className="text-gray-700/80 text-lg max-w-lg mb-10 leading-relaxed font-medium">
            Infection prevention products engineered for clinics, workplaces,
            schools, and homes tested, compliant, and ready to deploy across the
            UAE and GCC.
          </p>

          {/* CTA */}
          <div className="inline-flex items-center bg-white/40 backdrop-blur-xl p-1.5 rounded-full border border-black/5 w-fit shadow-xl">
            <Link
              href="/contactus"
              className="px-8 py-4 bg-primary capitalize text-white rounded-full font-bold text-sm hover:bg-primary/50 transition-all duration-500"
            >
              Talk to team
            </Link>
            <Link
              href="/#products"
              className="px-8 py-4 capitalize text-black font-bold text-sm hover:text-primary"
            >
              Catalogue
            </Link>
          </div>

          {/* STATS */}
          {/* <div className="mt-14 w-full bg-black backdrop-blur-sm border border-white/5 rounded-2xl p-4 flex justify-around items-center">
            <StatItem label="GCC" value="Certified" />
            <div className="w-[1px] h-8 bg-white/10" />
            <StatItem label="Grade" value="Medical" />
            <div className="w-[1px] h-8 bg-white/10" />
            <StatItem label="Safety" value="100%" />
          </div> */}
        </div>
      </motion.div>

      {/* Scroll Tag */}
      <div className="absolute bottom-8 right-20 hidden lg:flex items-center gap-4 rotate-90 origin-right">
        <span className="text-[10px] uppercase tracking-[0.5em] text-black/40 font-bold">
          Scroll to explore
        </span>
        <div className="w-12 h-[1px] bg-black/20" />
      </div>
    </section>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-[9px] text-white uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-primary text-sm font-bold uppercase">{value}</p>
    </div>
  );
}
