import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import speechImage from "../../public/speech2.svg";
import learningImage from "../../public/learning.svg";

const features = [
  {
    name: "Ritardi e disturbi del linguaggio",
    description:
      "Valutazione e interventi per migliorare la comunicazione nei bambini con difficoltà linguistiche.",
    icon: (
      <Image
        src={speechImage}
        className="h-16 w-16 mx-auto text-indigo-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Valutazione e trattamento dei disturbi dell’apprendimento",
    description:
      "Supporto personalizzato per affrontare sfide nell'apprendimento e nello sviluppo cognitivo.",
    icon: (
      <Image
        src={learningImage}
        className="h-16 w-16 mx-auto text-indigo-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Valutazione e trattamento della deglutizione atipica e disfunzionale",
    description:
      "Aiuto per affrontare problemi di deglutizione irregolare o problematica.",
    icon: (
      <Image
        src={learningImage}
        className="h-16 w-16 mx-auto text-indigo-600"
        aria-hidden="true"
      />
    ),
  },
];

/*

  
  {
    name: "Disturbi della fluenza (balbuzie)",
    description:
      "Terapia per migliorare la fluidità nella comunicazione verbale.",
    icon: FingerPrintIcon,
  },
  {
    name: "Disturbi della voce",
    description:
      "Interventi per preservare o ripristinare la salute e la qualità della voce.",
    icon: FingerPrintIcon,
  },
  {
    name: "Esiti post-ictus (afasia)",
    description:
      "Supporto per la riabilitazione della comunicazione dopo ictus, compresa l'afasia.",
    icon: FingerPrintIcon,
  },
*/

export default function Treatments() {
  return (
    <div className="relative overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Di cosa mi occupo?
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Questi sono i trattamenti che utilizzo per picchiare i bambini
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="text-center bg-slate-300 rounded-lg shadow-lg"
            >
              <div className="p-6">
                {feature.icon}
                <p className="mt-4 text-base font-semibold text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
