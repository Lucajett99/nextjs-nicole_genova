import React from 'react';
import Image from "next/image";
import speechImage from "../../public/icons/speechImage.png";
import stutteringImage from "../../public/icons/stuttering.png";
import learningImage from "../../public/icons/learning.png";
import swallowingImage from "../../public/icons/swallowing.png";
import voiceImage from "../../public/icons/voice.png";
import tongueImage from "../../public/icons/tongue.png";

const features = [
    {
        name: "Ritardi e disturbi del linguaggio",
        description: "Valutazione e interventi per migliorare la comunicazione nei bambini con difficoltà linguistiche.",
        icon: speechImage,
    },
    {
        name: "Valutazione e trattamento dei disturbi dell'apprendimento",
        description: "Trattamento e supporto personalizzato per affrontare sfide nell'apprendimento.",
        icon: learningImage,
    },
    {
        name: "Valutazione e trattamento della deglutizione disfunzionale",
        description: "",
        icon: swallowingImage,
    },
    {
        name: "Valutazione e trattamento del frenulo linguale alterato",
        description: "",
        icon: tongueImage,
    },
    {
        name: "Disturbi della fluenza (Balbuzie e Cluttering)",
        description: "Terapia per migliorare la fluenza verbale.",
        icon: stutteringImage,
    },
    {
        name: "Disturbi della voce",
        description: "Interventi per preservare o ripristinare la salute e la qualità della voce.",
        icon: voiceImage,
    }
];

export default function Treatments() {
    return (
        <div className="relative overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Di cosa mi occupo?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                    Questi sono i trattamenti che eseguo
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name} className="flex justify-center">
                            <div className="relative aspect-square w-full max-w-[280px]">
                                <div className="absolute inset-0">
                                    <div className="h-full w-full rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-6">
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="relative w-16 h-16">
                                                <Image
                                                    src={feature.icon}
                                                    alt=""
                                                    className="object-contain"
                                                    fill
                                                    sizes="(max-width: 64px) 100vw, 64px"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="text-center space-y-2">
                                                <h3 className="font-semibold text-gray-900 text-s">
                                                    {feature.name}
                                                </h3>
                                                {feature.description && (
                                                    <p className="text-gray-900 text-sm leading-tight">
                                                        {feature.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}