import Image from "next/image";
import profileImage from "../../public/nicole.jpeg";
import violenceImage from "../../public/violence.svg";
import certificationImage from "../../public/certification.svg";
import speechImage from "../../public/speech.svg";

export default function WhoIAm() {
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
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Il mio percorso
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Chi sono
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Laureata con lode in logopedia presso la facoltà di Medicina e
                Chirurgia dell’Università di TORVERGATA di Roma nell’anno 2019.{" "}
                <br />
                <br />
                Ho concluso il I° Modulo del corso di formazione LIS (Lingua
                Italiana dei Segni) promulgato dall’ANSI a giugno 2018.
                <br />
                <br />
                Ho partecipato al corso di I° livello tecnica Prompt, diventando
                Prompter di I livello, per il trattamento dei disturbi
                fono-articolatori del linguaggio.
                <br />
                <br />
                Ho eseguito la formazione di I livello nella valutazione e
                terapia dello squilibrio muscolare orofacciale - metodo
                Andretta.
                <br />
                <br />
                Da gennaio 2022 sono una logopedista abilitata all’applicazione
                del metodo Logogenia®.
                <br />
                <br />
                In seguito ad un tirocinio formativo, ho collaborato come libero
                professionista presso il Centro PotenziAli - Neuropsicologia
                dello Sviluppo di Roma, occupandomi principalmente del
                trattamento dei disturbi dell’apprendimento.
                <br />
                <br />
                Da gennaio 2020 svolgo la mia attività sulla provincia di Chieti
                e di Campobasso.
                <br />
                <br />
                Attualmente sono iscritta al Corso di Alta Formazione in Metodo
                Propriocettivo Elastico (Proel), presso l’Università
                Internazionale Menéndez Pelayo di Santander (Spagna), per
                trattare i disturbi della voce e ottimizzare la voce normale e
                professionale.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[20rem] max-w-[35rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem]"
            src={profileImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Per approfondire
              </h2>
              <p className="mt-6 indent-6">
                <ul className="list-disc list-inside">
                  <li>
                    <a href="https://logogenia.it/la-logogenia/" target="_blank">
                      Metodo Logogenia
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=d1eMHygmIwQ" target="_blank">
                      Metodo Prompt
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
