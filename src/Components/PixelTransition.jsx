import React from 'react'
import { motion } from "framer-motion";

const PixelTransition = ({ imageUrl, title, ctaText, ctaLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="max-w-sm mx-auto overflow-hidden rounded-2xl border border-orange-200 shadow-lg transition-transform"
    >
      <div className="aspect-[16/9] w-full">
        <img
          src={imageUrl}
          alt={title}
          decoding="async"
          loading="lazy"
          fetchpriority="low"
          width="640"
          height="360"
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/640x360/000000/FFFFFF?text=Image+Not+Found';
          }}
        />
      </div>
    </motion.div>
  )
}

export default PixelTransition