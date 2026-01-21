"use client"
import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "motion/react"

export default function ReadingProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#F0F0F0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="h-full bg-gradient-to-r from-[#F37303] to-[#FF9A4D] origin-left"
                style={{ scaleX }}
            />
        </motion.div>
    )
}
