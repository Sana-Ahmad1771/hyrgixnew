"use client"

import Image from "next/image"
import Button from "./FeaturesButon"
import Link from "next/link"
import { motion } from "motion/react"

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

export default function HealthTracking() {
    return (
        <section className="flex flex-col gap-15 sm:mx-10 md:mx-20 lg:mx-32 mx-5">

            {/* Heading */}
            <motion.div
                className="flex flex-col gap-3 items-center justify-center mt-20"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                // once: false ensures it repeats every time you scroll back
                // amount: 0.2 ensures it triggers early enough on all screens
                viewport={{ once: false, amount: 0.2 }}>
                <motion.div variants={fadeUp}>
                    <Button />
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    className="text-[#171717] text-center font-aeonik text-3xl sm:text-4xl md:text-4xl font-normal">Simplified You Can Focus on Living</motion.h2>

                <motion.p
                     variants={fadeUp}
                     className="text-[#171717] text-center text-base font-normal max-w-2xl">We remove the stress and guesswork from healthcare. so you always feel informed, supported, and in control,We remove the stress and guesswork from healthcare. so you always feel informed, supported, and in control.</motion.p>
            </motion.div>

            {/* Grid */}
            <motion.div
                className="gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                // once: false allows the grid to re-animate when scrolling back down
                // amount: 0.1 is critical for mobile so the first items animate as soon as they appear
                viewport={{ once: false, amount: 0.1 }}>

                {/* Image 1 */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{scale:1.05 }}
                    className="w-full h-85 mx-auto bg-white rounded-3xl overflow-hidden">
                    <Image src="/HealthTracking1.png" width={400} height={340} alt="Doctor providing personalized health consultation" className="w-full h-full object-cover" />
                </motion.div>

                {/* Card 1 */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{scale:1.05 }}
                    className="w-full h-85 bg-[#FFE4CF] rounded-3xl flex flex-col p-5 justify-between mx-auto">
                    <h3 className="text-[#171717] font-aeonik text-2xl font-normal">
                        Smart Health <br /> Tracking
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#171717] font-poppins text-xs font-normal"> We remove the stress and guesswork from healthcare. So you always feel informed, supported, and in control.</p>
                        <Link href="#" className="underline text-xs">More Information</Link>
                    </div>
                </motion.div>

                {/* Image 2 */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{scale:1.05 }}
                    className="w-full h-85 mx-auto bg-white rounded-3xl overflow-hidden">
                    <Image src="/HealthTracking2.png" width={400} height={340} alt="Medical professional with stethoscope" className="w-full h-full object-cover" />
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{scale:1.05 }}
                    className="w-full h-85 bg-[#FFE4CF] rounded-3xl flex flex-col p-5 justify-between mx-auto">
                    <h3 className="text-[#171717] font-aeonik text-2xl font-normal">Smart Health <br /> Tracking</h3>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#171717] font-poppins text-xs font-normal">We remove the stress and guesswork from healthcare. So you always feel informed, supported, and in control.</p>
                        <Link href="#" className="underline text-xs">More Information</Link>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{scale:1.05 }}
                    className="w-full h-85 bg-[#FFE4CF] rounded-3xl flex flex-col p-5 justify-between mx-auto"
                >
                    <h3 className="text-[#171717] font-aeonik text-2xl font-normal">
                        Smart Health <br /> Tracking
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#171717] font-poppins text-xs font-normal">
                            We remove the stress and guesswork from healthcare. So you always feel informed, supported, and in control.
                        </p>
                        <Link href="#" className="underline text-xs">
                            More Information
                        </Link>
                    </div>
                </motion.div>

                {/* Image 3 */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{scale:1.05 }}
                    className="w-full h-85 mx-auto bg-white rounded-3xl overflow-hidden"
                >
                    <Image src="/HealthTracking3.png" width={400} height={340} alt="Virtual healthcare consultation session" className="w-full h-full object-cover" />
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{scale:1.05 }}
                    className="w-full h-85 bg-[#FFE4CF] rounded-3xl flex flex-col p-5 justify-between mx-auto"
                >
                    <h3 className="text-[#171717] font-aeonik text-2xl font-normal">
                        Smart Health <br /> Tracking
                    </h3>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#171717] font-poppins text-xs font-normal">
                            We remove the stress and guesswork from healthcare. So you always feel informed, supported, and in control.
                        </p>
                        <Link href="#" className="underline text-xs">
                            More Information
                        </Link>
                    </div>
                </motion.div>

                {/* Image 4 */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{scale:1.05 }}
                    className="w-full h-85 mx-auto bg-white rounded-3xl overflow-hidden"
                >
                    <Image src="/HealthTracking4.png" width={400} height={340} alt="Health supplements and vitamins" className="w-full h-full object-cover" />
                </motion.div>

            </motion.div>
        </section>
    )
}