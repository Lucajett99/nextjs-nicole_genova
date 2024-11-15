import React, { useState, useEffect } from 'react';
import one from "../../public/pictures/mani2.jpg";
import two from "../../public/pictures/giochi.jpg";
import three from "../../public/pictures/mani.jpg";
import Image from "next/image";

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            url: one,
            alt: "Sessione di logopedia",
            caption: "Sessioni personalizzate per ogni paziente"
        },
        {
            url: two,
            alt: "Terapia del linguaggio",
            caption: "Approccio professionale e empatico"
        },
        {
            url: three,
            alt: "Studio di logopedia",
            caption: "Ambiente accogliente e confortevole"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-lg shadow-xl">
            <div className="relative h-[450px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image.url}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};