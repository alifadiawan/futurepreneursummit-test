import React from 'react';
import BG_IMAGE_URL from '../assets/5185208.jpg';
import MAIN_IMAGE_URL from '../assets/programs/grand-summit.png';

import BAZAAR from '../assets/grand-seminar/BAZAAR.webp';
import DOORPRIZE from '../assets/grand-seminar/DOORPRIZE.webp';
import MUSIK from '../assets/grand-seminar/MUSIK.webp';
import SEMINAR from '../assets/grand-seminar/SEMINAR.webp';


// Helper component for individual grid items to keep the main component clean.
const GridItem = ({ imageUrl, title, text }) => (
  <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
    <img
      loading="lazy"
      src={imageUrl}
      alt={title}
      className="w-full h-40 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/FFCCBC/424242?text=Image+Error'; }}
    />
    <div className="p-4">
      <h3 className="font-bold text-lg text-orange-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  </div>
);

// Main GrandSummitSection Component
const GrandSummitSection = () => {

  // Data for the 4x2 grid. In a real application, this would likely come from an API.
  const gridData = [
    { id: 1, title: "SEMINAR/TALKSHOW", text: "Seminar akan diikutin oleh banyak peserta yang akan dihadiri oleh pembicara/pemateri yang akan langsung disampaikan di depan panggung dengan materi yang telah ditentukan, tentunya mengenai Entrepreneur dan lainya.", imageUrl: SEMINAR },
    { id: 2, title: "QUIZ GAME & DOORPRIZE", text: "Quiz Game dan Doorprize diberikan sebagai bentuk hiburan/refresh untuk peserta yang telah antusias mengikuti kegiatan seminar dan akan dipilih melalui keaktifan mengajukan pertanyaan pada saat kegiatan berlangsung.", imageUrl: DOORPRIZE },
    { id: 3, title: "ACCOUSTIC  PERFORMANCE", text: "Pada saat kegiatan Seminar akan kita berikan Hiburan musik meliputi Band, Akustik dll, sebagai Ice breaking agar selama mengikuti kegiatan peserta tetap enjoy and fun.", imageUrl: MUSIK },
    { id: 4, title: "BAZAAR UMKM MILLENIAL", text: "Bazaar akan dilaksanakan ketika kegiatan Seminar berlangsung ini dibuat sebagai bentuk konkrit dalam mendukung UMKM agar para UMKM memiliki wadah untuk langsung menjual produknya kepada peserta Seminar.w", imageUrl: BAZAAR },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
    >
      <div className="min-h-screen w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">


        {/* Main Image Placeholder */}
        <div className="w-full max-w-2xl my-12 rounded-xl overflow-hidden">
          <img
            loading="lazy"
            src={MAIN_IMAGE_URL}
            alt="Grand Summit main visual"
            className="w-full h-auto object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/FFCCBC/424242?text=Image+Not+Found'; }}
          />
        </div>

        {/* 4x2 Grid Section */}
        <div className="w-full max-w-[90rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {gridData.map(item => (
              <GridItem
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default GrandSummitSection;