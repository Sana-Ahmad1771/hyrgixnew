"use client"
import HealthCard from "./HealthPriorityCard";
import data from "../../components/data/data.json";
import { motion } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
}

export default function HealthPriority() {
    const healthPriority = data.healthpriorities;
    return (
        <section className="bg-[#FCF2E580] py-15">
            <div className="sm:mx-10 md:mx-20 lg:mx-32 mx-5 flex flex-col gap-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <motion.h3 
                        className="text-[#171717] text-center font-aeonik text-4xl font-normal leading-normal"
                        variants={fadeUp}
                    >
                        Your Health, Our <br /> <span className="text-[#5D5D5D]">Priority</span>
                    </motion.h3>
                    <motion.p 
                        className="font-poppins font-normal text-base leading-none tracking-normal text-center"
                        variants={fadeUp}
                    >
                        We remove the stress and guesswork from healthcare. We stress and guesswork from healthcare.
                    </motion.p>
                </motion.div>
                <motion.div 
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {healthPriority.map((priority) => (
                        <motion.div key={priority.id} variants={fadeUp}>
                            <HealthCard {...priority} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}