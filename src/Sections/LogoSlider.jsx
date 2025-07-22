import React from 'react';
// import brand1 from '../assets/brands/width_200.webp'
// import brand2 from '../assets/brands/brands2.webp'
// import brand3 from '../assets/brands/brands3.webp'
// import brand4 from '../assets/brands/brand4.png'
// import brand5 from '../assets/brands/brand4.webp'

import brand1 from '../assets/brands/LOGO-1.png'
import brand2 from '../assets/brands/LOGO-2.png'
import brand3 from '../assets/brands/LOGO-3.png'
import brand4 from '../assets/brands/LOGO-4.png'
import brand5 from '../assets/brands/LOGO-5.png'

const logos = [
    { src: brand1, alt: "Brand 1" },
    { src: brand2, alt: "Brand 2" },
    { src: brand3, alt: "Brand 3" },
    { src: brand4, alt: "Brand 4" },
    { src: brand5, alt: "Brand 5" },
    { src: brand1, alt: "Brand 1" },
    { src: brand2, alt: "Brand 2" },
    { src: brand3, alt: "Brand 3" },
    { src: brand4, alt: "Brand 4" },
    { src: brand5, alt: "Brand 5" },
];

const LogoSlider = () => {
    const extendedLogos = [...logos, ...logos];

    return (
        <>
            <style>
                {`
                @keyframes slide-left {
                    from {
                        transform: translateX(0%);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                .animate-slide-left {
                    animation: slide-left 15s linear infinite;
                    will-change: transform; /* Performance optimization hint */
                }

                .group:hover .animate-slide-left {
                    animation-play-state: paused;
                }
                `}
            </style>

            <section className="bg-slate-50 py-12 sm:py-16 antialiased">
                <div className="container mx-auto px-4">

                    {/* The mask-image provides the fade-out effect on the edges,
                      making the continuous loop appear more natural.
                    */}
                    <div
                        className="group relative overflow-hidden whitespace-nowrap"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)',
                            maskImage: 'linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)',
                        }}
                    >
                        <div className="flex animate-slide-left">
                            {extendedLogos.map((logo, index) => (
                                <div key={index} className="mx-8 flex flex-shrink-0 items-center justify-center">
                                    <img
                                        className="h-20 w-auto object-contain"
                                        src={logo.src}
                                        alt={logo.alt}
                                        width="160"
                                        height="64"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const GlobalStyles = () => (
    <style>{`
    .group:hover .pause-animation {
      animation-play-state: paused;
    }
  `}</style>
);


export default function App() {
    return (
        <LogoSlider />
    );
}
