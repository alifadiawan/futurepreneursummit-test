import React from 'react';
import natinalcompetition from '../assets/programs/national_competition-3.png';
import backgroundImage from '../assets/bg-green.jpeg';
import backgroundImage2 from '../assets/bg-green-2.jpeg';

import bgblack1 from '../assets/black.jpg';
import bgblack2 from '../assets/black-2.jpg';

// import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

import startupfounder from '../assets/programs/startup_founder.png';
import visioncraft from '../assets/programs/vision_craft.png';
import futureminds from '../assets/programs/futureminds.png';
import twibbonchampion from '../assets/programs/twibbon_champion.png';
import hadiah from '../assets/20jt.png';

const CompetitionCard = ({ logo, title, description, link = "#" }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-300"
    >
        <div className="p-4 mb-6">
            <img src={logo} alt={`${title} logo`} className="h-56 w-56 object-contain" />
        </div>
        <h3 className="font-bold text-2xl text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-lg mb-8">{description}</p>
        <a href={link}
            className="mt-auto w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 py-3 px-6 text-center font-bold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Daftar Sekarang
        </a>
    </motion.div>
);

const FuturecompetitionSection = () => {
    return (
        <>
            {/* <Head title="Futurepreneur National Competition" /> */}
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: `url(${bgblack1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Hero Section */}
                <main className="relative overflow-hidden">
                    {/* This is likely for a background image or effect, leaving as is */}
                    <div className="absolute inset-0"></div>

                    <div className="container mx-auto px-6 lg:px-24 md:px-12 pt-20 pb-32">

                        {/* --- Section 1: Introduction --- */}
                        <div className="flex flex-col w-full items-center justify-center gap-12 mb-2 mt-12">
                            <img src={natinalcompetition} className="max-w-2xl w-full" alt="logo_national" />

                            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                                <div className="flex flex-col gap-6 w-full md:w-2/3">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg text-gray-300 p-6 text-justify text-xl md:text-2xl">
                                        Futurepreneur National Competition adalah ajang wirausaha kekinian untuk generasi muda yang mencakup empat kategori seru: kompetisi ide bisnis inovatif, kompetisi esai inspiratif, kompetisi poster kreatif, dan kompetisi post twibbon yang viral, semuanya untuk mengasah kreativitas dan semangat entrepreneur digital di era sekarang.

                                        Ayo tunjukkan potensimu untuk menjadi entrepreneur masa depan!
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <a href="#guidebook" className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-colors duration-300">
                                            Download Guidebook
                                        </a>
                                        <a href="#guidebook" className="rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-colors duration-300">
                                            Daftar Sekarang
                                        </a>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <img src={hadiah} alt="Total Hadiah" className="w-[40rem] h-auto object-contain rounded-lg" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">

                                {/* <a href="#daftar" className="rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300">
                                    Daftar Sekarang
                                </a> */}
                            </div>
                        </div>

                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl mb-16">
                                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                                    Total Hadiah <br /><span className="text-yellow-500">Rp 20.000.000</span>
                                </h2>
                                <p className="text-xl text-emerald-600 font-semibold mb-8">Plus Mentoring dari Top Entrepreneurs!</p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="#guidebook" className="rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-colors duration-300">
                                        Download Guidebook
                                    </a>
                                    <a href="#daftar" className="rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300">
                                        Daftar Sekarang
                                    </a>
                                </div>
                            </div>
                        </motion.div> */}

                        {/* --- Section 3: Competition Categories --- */}
                        <section id="kompetisi" className="py-2">
                            <hr className="mb-12 border-t-2 border-white w-full mx-auto" />

                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-white mb-4">Pilih Kategorimu</h2>
                                <p className="text-xl text-white">Empat kategori yang akan menguji kreativitas dan inovasimu</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <CompetitionCard
                                    logo={startupfounder}
                                    title="Startup Founder Clash"
                                    description="Presentasikan ide bisnismu dan dapatkan pendanaan"
                                />
                                <CompetitionCard
                                    logo={visioncraft}
                                    title="Visioncraft Poster Challenge"
                                    description="Ekspresikan ide cemerlangmu lewat poster dan rebut juara!"
                                />
                                <CompetitionCard
                                    logo={futureminds}
                                    title="Future Minds Essay Contest"
                                    description="Tulis ide terbaikmu dan menangkan kompetisinya!"
                                />
                                <CompetitionCard
                                    logo={twibbonchampion}
                                    title="Twibbon Champion Hunt"
                                    description="Tunjukkan semangatmu lewat Twibbon dan jadilah inspirasi!"
                                />
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </>
    );
};

export default FuturecompetitionSection;