"use client"
import Image from "next/image"
import Button from "../home/FeaturesButon"
import Card from "./Card"
import data from "../../components/data/data.json"
import { motion } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" },
    },
}

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
}

export default function Address() {
    const address = data.address;
    return (
        <motion.section
            className="flex flex-col lg:flex-row justify-between mt-30 pb-30 px-5 sm:px-10 md:px-20 lg:px-32 lg:gap-15 gap-10 items-center"
            style={{
                backgroundImage: "url('/addressbg.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 45px",
                backgroundSize: "cover"
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
        >
            {/* Left Side */}
            <motion.div 
                className="flex flex-col gap-6 lg:w-175"
                variants={fadeLeft}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button />
                </motion.div>
                <motion.h3 
                    className="font-aeonik font-normal text-3xl sm:text-4xl lg:text-4xl leading-tight sm:leading-snug tracking-normal"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Healthcare, Simplified You Can Focus on Living.
                </motion.h3>
            </motion.div>

            {/* Right Side */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-2 w-full"
                variants={staggerContainer}
            >
                {address.map((add, index) => (
                    <motion.div
                        key={add.id}
                        className={`w-full ${
                            index === 2 ? "sm:translate-x-1/4 lg:translate-x-[calc(14%+4px)]" : ""
                        }`}
                        variants={scaleIn}
                    >
                        <Card
                            image={add.image}
                            name={add.name}
                            des={add.des}
                            contact={add.contact}
                        />
                    </motion.div>
                ))}

                {/* Follow Us */}
                <motion.div 
                    className="flex flex-col items-center sm:items-end justify-center"
                    variants={fadeUp}
                >
                    <motion.h4 
                        className="font-aeonik font-semibold mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 }}
                    >
                        Follow Us
                    </motion.h4>
                    <motion.div 
                        className="flex gap-2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <motion.div 
                            className="bg-[#F4F4F4] p-2 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer"
                            variants={scaleIn}
                            whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
                        </motion.div>
                        <motion.div 
                            className="bg-[#F4F4F4] p-2 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer"
                            variants={scaleIn}
                            whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Image src="/instagram.png" alt="Instagram" width={16} height={16} />
                        </motion.div>
                        <motion.div 
                            className="bg-[#F4F4F4] p-2 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer"
                            variants={scaleIn}
                            whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Image src="/twitter.png" alt="Twitter" width={16} height={16} />
                        </motion.div>
                        <motion.div 
                            className="bg-[#F4F4F4] p-2 flex items-center justify-center rounded hover:bg-gray-200 transition-colors cursor-pointer"
                            variants={scaleIn}
                            whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Image src="/linkedin.png" alt="LinkedIn" width={16} height={16} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
