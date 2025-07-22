import React from 'react'
import { motion } from "framer-motion"

import bgbg from '../assets/bg-purple.jpg'
import bgbg2 from '../assets/bg-purple-2.jpg'



import bgabout1 from '../assets/bg-about.jpg'
import bgabout2 from '../assets/about-2.jpeg'
import bgabout3 from '../assets/bg-about-3.webp'
import bgabout4 from '../assets/YK-160.jpg'


const AboutUsSection = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        // THEME CHANGE: Background is now a placeholder image with cover and center properties.
        <section
            className="py-16 md:py-32 relative overflow-hidden"
            id="aboutus"
            style={{
                backgroundImage: `url(${bgbg2})`, // CRITICAL: Ensure this image is compressed!
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block">
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide">
                            GET TO KNOW US
                        </h2>
                        {/* REMOVED: Animation on the underline is now a static element. */}
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-[#FF7700] rounded-full mx-auto mt-2" />
                    </div>
                </motion.div>

                {/* Content Section with Image Gallery */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 w-full  items-center">
                    {/* Left Column - Image Gallery */}
                    <div className="xl:col-span-7 space-y-6">
                        {/* Main featured image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <img
                                src={bgabout2}
                                loading="lazy"
                                alt="FES Event Highlight"
                                className="relative w-full h-80 object-cover rounded-2xl shadow-2xl border border-gray-200/20"
                            />
                        </motion.div>

                        {/* Image grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >
                                <img
                                    src={bgabout3}
                                    loading="lazy"
                                    alt="Futurepreneursimmit X Kapal Api"
                                    className="relative w-full h-48 object-cover rounded-xl shadow-xl border border-gray-200/20"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                            >
                                <img
                                    src={bgabout4}
                                    loading="lazy"
                                    alt="Team Collaboration"
                                    className="relative w-full h-48 object-cover rounded-xl shadow-xl border border-gray-200/20"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="xl:col-span-5 h-full"
                    >
                        <div className="bg-white/95 h-full px-6 py-12 rounded-2xl shadow-lg border border-orange-200/50 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-700 border-b border-orange-200 pb-3">
                                    Our Story Since 2020
                                </h3>
                                <div className="space-y-4 mt-4">
                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                        Future Entrepreneur Summit (FESt) is an entrepreneurial seminar where several entrepreneurs and practitioners will present and share their entrepreneurial experiences with participants. We focus on how they dare to start, collaborate, and develop creative ideas to innovate in their businesses.
                                    </p>
                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                        This summit serves as a forum for sharing entrepreneurial trends that evolve with technology and the Millennial Generation. Featuring speakers from academia and industry, we require support from various parties to ensure this activity can run successfully and inspire the next wave of entrepreneurs.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-6">
                                <button className="px-6 py-2 bg-green-600 rounded-full text-white font-bold">
                                    More Information
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* Trust Indicators */}
                <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { number: "20+", text: "Partners", icon: "🤝" },
                        { number: "25,000+", text: "Attendees", icon: "👥" },
                        { number: "50+", text: "Projects", icon: "🎯" },
                        { number: "100+", text: "Team Members", icon: "⭐" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1 }}
                            variants={fadeInUp}
                            // REMOVED: Hover effects on the card. Only a subtle shadow change remains.
                            className="bg-white/95 p-4 md:p-6 rounded-xl border border-gray-200/80 text-center shadow-md transition-shadow duration-300 hover:shadow-orange-200/50"
                        >
                            {/* REMOVED: Hover scale effect on icon. */}
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">{item.number}</div>
                            <div className="text-sm md:text-base text-slate-500">{item.text}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection