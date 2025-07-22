import React, { useState, useEffect, useMemo } from 'react';
import { useRef } from 'react';

// --- Mock Data ---
// This now serves as default data. In a real Inertia.js application,
// you would pass your event data as a prop to the CarouselCard component.
const defaultEvents = [
    {
        id: 1,
        location: 'Purwokerto',
        date: '10 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/6d28d9/ffffff?text=Event+1',
        featured_guest_star: 'Fiki Naki',
    },
    {
        id: 2,
        location: 'Bandung',
        date: '15 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/1e3a8a/ffffff?text=Event+2',
        featured_guest_star: 'Fiki Naki',
    },
    {
        id: 3,
        location: 'Jember',
        date: '03 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/be123c/ffffff?text=Event+3',
        featured_guest_star: 'Fiki Naki',
    },
    {
        id: 4,
        location: 'Surabaya',
        date: '22 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/c2410c/ffffff?text=Event+4',
        featured_guest_star: 'Fiki Naki',
    },
    {
        id: 5,
        location: 'Jakarta',
        date: '28 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/047857/ffffff?text=Event+5',
        featured_guest_star: 'Fiki Naki',
    },
];

// --- Arrow SVG Component ---
const Arrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} z-20 bg-white/30 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
        aria-label={direction === 'left' ? 'Previous Slide' : 'Next Slide'}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {direction === 'left' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            )}
        </svg>
    </button>
);


// --- Event Card Component ---
// Now accepts individual props for better reusability.
const EventCard = ({ title, date, location, featured_guest_star, subtitle, imageUrl }) => {
    // A simple helper to split the date string for styling.
    const [dateNum, ...dateMonth] = date.split(' ');

    return (
        <div className="flex-shrink-0 w-full">
            <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full">
                <div
                    className="relative flex-grow text-white"
                    style={{ aspectRatio: '210 / 297' }} // or '7 / 10', or '2 / 3' for simplified ratio
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/600x800/333/FFF?text=Image+Error';
                        }}
                    />
                </div>
                <div className="p-4 bg-gray-800/50 backdrop-blur-sm border-t border-white/10 text-white">
                    <header className="flex justify-between items-start mb-5">
                        <h3 className="font-extrabold text-2xl uppercase tracking-wider drop-shadow-lg">{location}</h3>
                        <div className="text-center">
                            <p className="font-bold text-md bg-green-600 rounded-full px-4">Available Now</p>
                        </div>
                    </header>
                    <div className="flex-grow"></div>
                    <footer className="drop-shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="text-center bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                                <p className="text-4xl font-bold leading-none">{dateNum}</p>
                                <p className="text-md font-semibold">{dateMonth.join(' ')}</p>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-bold leading-tight">{title}</h2>
                                <p className="text-sm text-gray-300">{subtitle}</p>
                            </div>
                        </div>
                    </footer>
                    <button className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
                        DAFTAR
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Main Carousel Component ---
// Now accepts an 'events' prop and uses the mock data as a fallback.
export default function CarouselCard({ events = defaultEvents }) {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            // Calculate the width of a single item to scroll by
            const scrollAmount = container.offsetWidth;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth', // Browser handles the smooth animation! ✨
            });
        }
    };

    return (
        <div className="flex items-center justify-center font-sans p-4 md:p-8">
            <div className="w-full mx-auto relative">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide overflow-hidden"
                >
                    {events.map((event) => (
                        <div
                            key={event.id}
                            // w-full on mobile, w-1/3 on desktop
                            className="w-full md:w-1/3 flex-shrink-0 p-2 
                                       snap-center md:snap-start" // 🔑 Snap alignment
                        >
                            <EventCard {...event} />
                        </div>
                    ))}
                </div>

                <Arrow direction="left" onClick={() => scroll('left')} />
                <Arrow direction="right" onClick={() => scroll('right')} />
            </div>
        </div>
    );
}
