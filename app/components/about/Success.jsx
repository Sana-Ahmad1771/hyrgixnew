"use client";
import SuccessCard from "./SuccessCard"
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

export default function Success() {
    const success = data.success;
    return (
        <section className="flex flex-col gap-5 bg-[#FAFAFA] w-auto py-20">
            <motion.div 
                className="flex flex-col gap-10 mx-5 sm:mx-10 md:mx-20 lg:mx-32"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <motion.h4 
                    className="font-aeonik font-normal text-3xl lg:text-4xl leading-none tracking-normal text-center"
                    variants={fadeUp}
                >
                    Measuring our Success <br /> with Key Metrics
                </motion.h4>
                <motion.div 
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={staggerContainer}
                >
                    {success.map((item) => (
                        <motion.div key={item.id} variants={fadeUp}>
                            <SuccessCard {...item} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}