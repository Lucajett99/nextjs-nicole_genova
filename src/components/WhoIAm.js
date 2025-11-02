import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/pictures/nicole.jpeg";

export default function WhoIAm() {
    return (
        <div className="relative overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">{/* SVG background */}</div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

                {/* Sezione testo */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-xl">
                            <p className="text-base font-semibold leading-7 text-white">Il mio percorso</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Chi sono</h1>

                            <h2 className="mt-6 text-xl font-bold text-white">Le mie origini</h2>
                            <p className="mt-4 text-base sm:text-xl leading-8 text-white">
                                Mi chiamo Nicole e sono molisana, ma la mia storia è un mix
                                esplosivo di culture. Sono nata in Germania, dove mia mamma
                                portava con sé le radici della Repubblica Ceca, mentre papà è
                                tutto italiano, con il cuore piantato saldamente in Molise.
                                Sono cresciuta in Italia, tra le colline del mio paese nella fattoria
                                di famiglia, dove ho imparato a conoscere e amare la natura e
                                gli animali.
                            </p>

                            {/* 🔹 Immagine mobile (solo su schermi piccoli) */}
                            <div className="flex justify-center my-10 lg:hidden">
                                <Image
                                    className="w-[15rem] max-w-[35rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem]"
                                    src={profileImage}
                                    alt="Nicole's profile"
                                    loading="lazy"
                                />
                            </div>

                            <h2 className="mt-6 text-xl font-bold text-white">I miei studi</h2>
                            <p className="mt-4 text-base sm:text-xl leading-8 text-white">
                                Dopo il diploma di maturità classica ho deciso di trasferirmi a
                                Zurigo, in Svizzera, dove ho vissuto per due anni, lavorando e
                                seguendo corsi di psicologia e lingua tedesca all'Università di Zurigo.
                            </p>
                            <p className="mt-4 text-base sm:text-xl leading-8 text-white">
                                Tornata in Italia, mi sono laureata con lode in logopedia presso
                                la facoltà di Medicina e Chirurgia dell’Università di Torvergata
                                di Roma nell’anno 2019.
                            </p>
                            <p className="mt-4 text-base sm:text-xl leading-8 text-white">
                                Attualmente esercito la libera professione nelle province di Campobasso e Chieti, e collaboro come libero professionista presso il Centro PotenziAli - Neuropsicologia dello Sviluppo di Roma.
                            </p>

                            <h2 className="mt-6 text-xl font-bold text-white">Le mie competenze</h2>
                            <ul className="mt-4 list-disc pl-5 text-base sm:text-xl leading-8 text-white">
                                <li>Formazione LIS (Lingua Italiana dei Segni) - I° Livello</li>
                                <li>{'Prompter di I° e II° livello per il trattamento dei disordini motori dello speech presso il '}
                                    <Link href="https://promptinstitute.com/" target="_blank" className="-m-1.5 p-1.5">
                                        <span className="inline-flex items-center text-white hover:text-white/80 underline underline-offset-4">Prompt Institute</span>
                                    </Link>
                                </li>
                                <li>Formazione di I° livello nella valutazione e terapia dello squilibrio muscolare orofacciale - metodo Andretta</li>
                                <li>Formazione sul frenulo linguale alterato, metodo Beghetto e metodo di Giulio</li>
                                <li>Logopedista abilitata al metodo Logogenia®</li>
                                <li>Master in Vocologia Clinica presso la Nuova Artec</li>
                                <li>Corso Oral Motor Therapy - per migliorare l'agilità,  la precisione e per il rinforzo delle strutture orali</li>
                                <li>Corsi in disturbi della fluenza verbale (balbuzie e cluttering)</li>
                                <li>Corsi sui disturbi della comprensione morfosintattica - docente Renata Salvadorini</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 🔹 Immagine desktop (solo su schermi grandi) */}
                <div className="hidden lg:flex items-start justify-center h-full lg:min-h-screen p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 -translate-y-8">
                    <Image
                        className="w-[15rem] max-w-[35rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem]"
                        src={profileImage}
                        alt="Nicole's profile"
                        loading="lazy"
                    />
                </div>

                {/* CTA finale */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
                            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white">Vuoi saperne di più?</h2>
                            <ul className="mt-6 indent-6 list-disc text-base sm:text-xl list-inside">
                                <li>
                                    <Link href="https://logogenia.it/la-logogenia/" className="underline" target="_blank">
                                        Metodo Logogenia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/watch?v=d1eMHygmIwQ" className="underline" target="_blank">
                                        Sistema Prompt
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
