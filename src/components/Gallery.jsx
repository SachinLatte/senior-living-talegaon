import React from "react";
import LazyImage from "./LazyImage";

const galleryImages = [
  { src: "/images/1.webp", alt: "Image 1" },
  { src: "/images/2.webp", alt: "Image 2" },
  { src: "/images/3.webp", alt: "Image 3" },
  { src: "/images/4.webp", alt: "Image 4" },
  { src: "/images/5.webp", alt: "Image 5" },
  { src: "/images/6.webp", alt: "Image 6" },
  { src: "/images/7.webp", alt: "Image 7" },
  { src: "/images/8.webp", alt: "Image 8" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-7 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-['Inter']">
            Moments at Cradle of Life
          </h2>
          <p className="mt-4 text-gray-600 font-['Inter']">
            Take a Virtual Tour of Our Senior Residences
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {galleryImages.map((img, index) => (
            <LazyImage
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-full h-72 rounded-lg object-cover"
              width={389}
              height={288}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
