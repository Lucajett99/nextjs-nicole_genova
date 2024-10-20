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
              <p className="text-base font-semibold leading-7 text-gray-950">
                Il mio approccio
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Il mio approccio
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-900">
                Ogni percorso logopedico comincia con una valutazione. La
                valutazione è una fase fondamentale del processo, finalizzata a
                stabilire gli obiettivi da perseguire. Solo così è possibile
                costruire un profilo del paziente ed un percorso individuale.
                Attraverso il colloquio con i caregiver (genitori o familiari o
                tutori) e tramite l’osservazione diretta, che prevede la
                somministrazione di test specifici, è possibile comprendere la
                situazione generale. Il lavoro di squadra è fondamentale. La
                presa in carico deve coinvolgere tutti: genitori, familiari,
                insegnanti e altre figure professionali. Successivamente i
                caregiver verranno coinvolti nel trattamento riabilitativo:
                dovranno assistere alla seduta, vedere insieme la difficoltà,
                accoglierla e definire gli strumenti per aiutare concretamente
                il paziente. Con una presa in carico globale e l'allenamento
                costante, il trattamento sarà più efficace e anche più veloce.
                Ogni percorso ha la sua durata, che non è dettata dalla
                problematica, ma dalla persona, perché ogni percorso è
                individuale.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[20rem] max-w-[35rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem]"
            src={logopedist}
            alt=""
            loading="lazy"
          />
          <Image
            className="w-[20rem] max-w-[35rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem] mt-10"
            src={logopedist2}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
