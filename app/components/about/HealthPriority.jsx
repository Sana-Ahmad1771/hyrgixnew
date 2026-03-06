"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import data from "../../components/data/data.json";

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
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function HealthPriority() {
  const healthPriority = data.healthpriorities;

  return (
    <section className="relative bg-secondary-light py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="flex flex-col gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="sm:mx-10 md:mx-20 lg:mx-32 mx-5 flex flex-col gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h3
                className="text-black text-center font-aeonik text-4xl font-normal leading-normal mb-3"
                variants={fadeUp}
              >
                Your Health, Our{" "}
                <span className="text-[#5D5D5D]">Priority</span>
              </motion.h3>
              <motion.p
                className="font-poppins font-normal text-base leading-none tracking-normal text-center"
                variants={fadeUp}
              >
                We remove the stress and guesswork from healthcare. We stress
                and guesswork from healthcare.
              </motion.p>
            </motion.div>
          </div>

          {/* Cards Grid - Now integrated into the main loop */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {healthPriority.map((priority) => (
              <motion.div
                key={priority.id}
                variants={fadeUp}
                whileHover={{ y: -12 }}
                className="group relative flex flex-col items-center text-center bg-[#FCECDC] hover:bg-[#FFE4CF] p-8 rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-12px_rgba(240,140,50,0.2)] transition-all duration-500 overflow-hidden h-80 justify-center border border-transparent hover:border-white/50"
              >
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <motion.div
                    className="flex items-center justify-center w-20 h-20 rounded-full bg-white group-hover:bg-primary transition-colors duration-500 shadow-sm"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <Image
                      src={priority.image}
                      alt={priority.title}
                      width={32}
                      height={32}
                      className="group-hover:brightness-0 group-hover:invert transition-all duration-500"
                    />
                  </motion.div>

                  {/* Outer Pulsing Ring */}
                  <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>

                <div className="space-y-3 relative z-10">
                  <h5 className="font-aeonik font-bold text-xl text-black group-hover:text-primary transition-colors duration-300">
                    {priority.title}
                  </h5>
                  <p className="font-poppins font-medium text-gray-500 group-hover:text-gray-700 text-xs sm:text-sm leading-relaxed px-2 transition-colors duration-300">
                    {priority.description}
                  </p>
                </div>

                {/* Bottom Corner Accent */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
