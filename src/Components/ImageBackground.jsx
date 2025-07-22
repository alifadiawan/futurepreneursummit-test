import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/Logo-FEST-LIGHT.png';
import bgImage from '../assets/bg-slider.png';

const ImageBackground = () => {
    return (
        <section
            className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Preload for LCP optimization */}
            <img src={bgImage} alt="" style={{ display: 'none' }} loading="eager" />

            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    willChange: 'transform, opacity',     
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-black"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center p-8 rounded-lg relative z-10"
            >
                <motion.img
                    src={logo}
                    alt="FEST Light Logo"
                    className="mx-auto lg:max-w-2xl"
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center pb-8 rounded-lg relative z-10"
            >

                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <a className="px-6 py-4 bg-green-600 rounded-full text-white font-bold z-99">REGISTER NOW</a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ImageBackground