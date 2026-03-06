"use client";

import Image from "next/image";
import Button from "../home/FeaturesButon";
import data from "../../components/data/data.json";
import { motion } from "framer-motion";

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

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Address() {
  const address = data.address;

  return (
    <motion.section
      className="relative flex flex-col lg:flex-row justify-between py-24 lg:py-32 px-5 sm:px-10 md:px-20 lg:px-32 lg:gap-20 gap-16 items-start overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      style={{
        backgroundImage: "url('/addressbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 45px",
        backgroundSize: "cover",
      }}
    >
      {/* Left Side: Content */}
      <motion.div
        className="flex flex-col gap-8 lg:w-1/2 lg:sticky lg:top-32"
        variants={fadeLeft}
      >
        <motion.div variants={scaleIn}>
          <Button />
        </motion.div>

        <motion.h3
          className="font-aeonik font-normal text-3xl sm:text-4xl lg:text-4xl leading-tight sm:leading-snug tracking-normal text-[#171717] max-w-xl"
          variants={fadeUp}
        >
          Hygrix support is here to help you deploy safer spaces.
        </motion.h3>

        <motion.div
          className="h-1.5 w-20 bg-primary/30 rounded-full"
          variants={fadeUp}
        />
      </motion.div>

      {/* Right Side: Address Cards & Socials */}
      <motion.div
        className="flex flex-col gap-10 w-full lg:w-1/2"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {address.map((add, index) => (
            <motion.div
              key={add.id}
              className={`w-full group ${
                index === 2 ? "lg:col-span-2 lg:max-w-[55%] lg:mx-auto" : ""
              }`}
              variants={scaleIn}
            >
              <motion.div
                className="bg-[#FCECDC] flex flex-col lg:h-52 justify-between gap-4 p-6 rounded-[24px] hover:bg-primary-light transition-colors cursor-pointer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex gap-4 items-center">
                  <motion.div
                    className="bg-white/80 p-2 rounded-xl shadow-sm"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  >
                    <Image
                      src={add.image}
                      alt={add.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                      unoptimized
                    />
                  </motion.div>
                  <span className="font-aeonik font-normal text-2xl leading-none tracking-tight text-black">
                    {add.name}
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="font-poppins font-normal text-[13px] leading-relaxed text-gray-600 max-w-[200px]">
                    {add.des}
                  </p>
                  <span className="font-poppins font-semibold text-[13px] text-primary block">
                    {add.contact}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Refined Follow Us Section */}
        <motion.div
          className="flex flex-col items-center sm:items-end justify-center pt-10 border-t border-black/5"
          variants={fadeUp}
        >
          <h4 className="font-aeonik font-bold text-gray-400 text-[10px] uppercase tracking-[0.3em] mb-5">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {["facebook", "instagram", "twitter", "linkedin"].map((social) => (
              <motion.div
                key={social}
                className="bg-white shadow-sm w-11 h-11 flex items-center justify-center rounded-2xl border border-white cursor-pointer text-gray-600 transition-all group/icon"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#000",
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={`/${social}.png`}
                  alt={social}
                  width={18}
                  height={18}
                  className="group-hover/icon:invert transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
