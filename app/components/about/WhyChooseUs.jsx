"use client"
import Image from "next/image"
import Button from "../home/FeaturesButon";
import ReasonsCard from "./Reasons";
import data from "../../components/data/data.json";
import { motion } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    },
}

const fadeRight = {
    hidden: { opacity: 0, x: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

export default function WhyChooseUs() {
    const reason = data.reasons;

    return (
        <motion.section
            className="px-5 sm:px-10 md:px-20 lg:px-32 py-16 sm:py-20 flex flex-col lg:flex-row gap-8 sm:gap-10 items-center justify-center"
        >
            {/* Image */}
            <motion.div
                className="w-full lg:w-1/2 flex justify-center"
                whileHover={{
                    scale: 1.01
                }}
            >
                <Image
                    src="/chooseus.png"
                    alt="Why choose us"
                    width={520}
                    height={520}
                    className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-130 h-auto object-contain transition-all duration-300"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-6 items-center lg:items-start text-center lg:text-left"
                variants={fadeRight}
            >
                <motion.div
                    variants={fadeUp}
                >
                    <Button />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="font-aeonik font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight transition-all duration-300"
                >
                    Why Choose Our <br className="hidden lg:block" /> Medical Care?
                </motion.h2>


                <motion.div
                    className="flex flex-col gap-4 sm:gap-5 w-full"
                    variants={staggerContainer}
                >
                    {reason.map((item) => (
                        <motion.div key={item.id} variants={fadeUp}>
                            <ReasonsCard {...item} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex items-center justify-center w-28 sm:w-30 md:w-32 h-10 sm:h-10.5 md:h-11 rounded-full bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-900 transition-all duration-300"
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="text-white font-medium text-xs sm:text-sm">Get Started</span>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
