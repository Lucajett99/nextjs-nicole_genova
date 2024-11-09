import Image from "next/image";
import logopedist from "../../public/logopedista.jpg";
import logopedist2 from "../../public/logopedista2.jpg";

export default function Approach() {
  return (
    <div className="relative overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Il mio approccio
              </h1>

              <h3 className="mt-6 text-2xl font-semibold leading-8 text-white">
                Valutazione
              </h3>
              <p className="mt-6 text-base sm:text-xl leading-8 text-white">
                Ogni percorso logopedico inizia con una fase fondamentale: la
                valutazione. Attraverso un'attenta osservazione e la
                somministrazione di test specifici, costruisco un profilo
                personalizzato del paziente, base essenziale per definire
                obiettivi chiari e realizzabili.
              </p>

              <h3 className="mt-6 text-2xl font-semibold leading-8 text-white">
                Lavoro di squadra
              </h3>
              <p className="mt-6 text-base sm:text-xl leading-8 text-white">
                Il successo della terapia si basa sulla collaborazione attiva di tutti gli attori coinvolti:
              </p>
              <ul className="mt-2 text-base indent-6 sm:text-xl leading-8 text-white list-disc list-inside">
                <li>Genitori e familiari</li>
                <li>Insegnanti</li>
                <li>Medici e professionisti sanitari</li>
              </ul>
              <p className="mt-6 text-base sm:text-xl leading-8 text-white">
                I caregiver sono parte integrante del percorso terapeutico. Durante le sedute,
                potranno osservare, comprendere le difficoltà e acquisire gli strumenti pratici
                per supportare efficacemente il paziente nel quotidiano.
              </p>

              <h3 className="mt-6 text-2xl font-semibold leading-8 text-white">
                    Un percorso su misura
              </h3>
              <p className="mt-6 text-base sm:text-xl leading-8 text-white">
                Ogni persona è unica, e così deve essere il suo percorso terapeutico. La durata e l'intensità del trattamento non sono determinate dalla problematica in sé, ma vengono personalizzate in base alle caratteristiche e ai progressi individuali.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[20rem] max-w-[35rem] rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem]"
            src={logopedist}
            alt=""
            loading="lazy"
          />
          <Image
            className="w-[20rem] max-w-[35rem] rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem] mt-10"
            src={logopedist2}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
