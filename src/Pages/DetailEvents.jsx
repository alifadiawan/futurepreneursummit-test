import React from 'react'
import { motion } from 'framer-motion';

import Guest from '../Layout/Guest'
import logo from '../assets/Logo-FEST-LIGHT.png';
import bgImage from '../assets/bg-slider.png';
import bandung from '../assets/bandung.webp'

const DetailEvents = () => {
    return (
        <Guest>

            <section className="w-full flex flex-col items-center bg-gray-100">
                {/* Top background with poster */}
                <div
                    className="w-full h-[60vh] flex justify-center items-end relative bg-cover bg-center lg:rounded-b-4xl rounded-b-2xl"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <img
                        src={bandung}
                        alt="Event Poster"
                        className="lg:max-w-md max-w-xs rounded-xl absolute -bottom-[10rem] z-10"
                    />
                </div>

                {/* Description box below */}
                <div className="lg:mt-64 mt-48 mb-24 bg-white w-full lg:max-w-7xl rounded-xl shadow-lg p-6 z-20">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Futurepreneursummit Surabaya</h2>
                    <p className="text-gray-700 mb-2">
                        📅 <strong>Date:</strong> July 28, 2025
                    </p>
                    <p className="text-gray-700 mb-2">
                        🕒 <strong>Time:</strong> 10:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-700 mb-2">
                        📍 <strong>Location:</strong> Main Hall, ABC University
                    </p>
                    <p className="text-gray-700 mt-4">
                        Join us for an exciting day of workshops, guest speakers, networking, and fun!
                        This event is perfect for students, developers, and tech enthusiasts who want to
                        grow their skills and connect with the community.
                    </p>
                </div>
            </section>




        </Guest>
    )
}

export default DetailEvents