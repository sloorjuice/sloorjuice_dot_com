"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* Grid of thumbnails */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer border-2 border-black hover:scale-105 transition-transform aspect-square overflow-hidden bg-transparent flex items-center justify-center"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="max-w-full max-h-full object-contain"
                style={{ imageRendering: "pixelated" }}
                unoptimized
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={2400}
                height={2400}
                className="w-auto h-auto"
                style={{ 
                  imageRendering: "pixelated",
                  maxWidth: "98vw",
                  maxHeight: "98vh",
                  minWidth: "400px",
                  minHeight: "400px"
                }}
                unoptimized
                quality={100}
              />
            </div>
            {selectedImage.title && (
              <p className="text-white text-lg text-center mt-4">{selectedImage.title}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}