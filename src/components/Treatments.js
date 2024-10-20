import Image from "next/image";
    import speechImage from "../../public/speechImage.png";
import stutteringImage from "../../public/stuttering.png";
import learningImage from "../../public/learning.png";
import swallowingImage from "../../public/swallowing.png";
import voiceImage from "../../public/voice.png";
import rehabilitationImage from "../../public/rehabilitation.svg";
import tongueImage from "../../public/tongue.png";

const features = [
  {
    name: "Ritardi e disturbi del linguaggio",
    description:
      "Valutazione e interventi per migliorare la comunicazione nei bambini con difficoltà linguistiche.",
    icon: (
      <Image
        src={speechImage}
        className="h-16 w-16 mx-auto text-gray-950"
        aria-hidden="true"
        loading="lazy"
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
        className="h-16 w-16 mx-auto text-gray-950"
        aria-hidden="true"
        loading="lazy"
      />
    ),
  },
  {
    name: "Valutazione e trattamento della deglutizione disfunzionale",
    description:
      "Aiuto per affrontare problemi di deglutizione irregolare o problematica.",
    icon: (
      <Image
        src={swallowingImage}
        className="h-16 w-16 mx-auto text-gray-950"
        aria-hidden="true"
        loading="lazy"
      />
    ),
  },
  {
    name: "Valutazione e trattamento del frenulo linguale alterato",
    description: "",
    icon: (
      <Image
        src={tongueImage}
        className="h-16 w-16 mx-auto text-gray-950"
        aria-hidden="true"
        loading="lazy"
      />
    ),
  },
  {
    name: "Disturbi della fluenza (balbuzie)",
    description:
      "Terapia per migliorare la fluidità nella comunicazione verbale.",
    icon: (
      <Image
        src={stutteringImage}
        className="h-16 w-16 mx-auto text-gray-950"
        aria-hidden="true"
        loading="lazy"
      />
    ),
  },
  {
    name: "Disturbi della voce",
    description:
      "Interventi per preservare o ripristinare la salute e la qualità della voce.",
    icon: (
      <Image
        src={voiceImage}
        className="h-16 w-16 mx-auto text-gray-950"
        aria-hidden="true"
        loading="lazy"
      />
    ),
  }
];


export default function Treatments() {
  return (
    <div className="relative overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
          Di cosa mi occupo?
        </p>
        <p className="mt-6 sm:text-lg leading-8 text-gray-900">
          Questi sono i trattamenti che utilizzo
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-4xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="text-center text-s lg:text-sm bg-slate-300 rounded-full shadow-lg h-70 w-70 p-4 sm:p-2 lg:p-7"
            >
              <div className="h-[60%] w-[80%] m-auto rounded-full p-2 justify-center items-center">
                {feature.icon}
                <p className="mt-4 font-semibold text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 text-gray-900">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
