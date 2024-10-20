import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/nicole.jpeg";


export default function WhoIAm() {
    return (
        <div className="relative overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* SVG background */}
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

                {/* Left column: Text section */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-gray-950">Il mio percorso</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Chi sono</h1>

                            <h2 className="mt-6 text-xl font-bold text-gray-900">Le mie origini</h2>
                            <p className="mt-4 text-base sm:text-xl leading-8 text-gray-900">
                                Mi chiamo Nicole e sono molisana, ma la mia storia è un mix
                                esplosivo di culture. Sono nata in Germania, dove mia mamma
                                portava con sé le radici della Repubblica Ceca, mentre papà è
                                tutto italiano, con il cuore piantato saldamente in Molise. Sono
                                cresciuta in Italia, tra le colline del mio paese nella fattoria
                                di famiglia, dove ho imparato a conoscere e amare la natura e
                                gli animali.
                            </p>

                            <h2 className="mt-6 text-xl font-bold text-gray-900">I miei studi</h2>
                            <p className="mt-4 text-base sm:text-xl leading-8 text-gray-900">
                                Dopo il diploma di maturità classica ho deciso di trasferirmi a
                                Zurigo, in Svizzera, dove ho vissuto per due anni, lavorando e
                                seguendo alcuni corsi di psicologia e di lingua tedesca
                                all'Università di Zurigo.
                            </p>
                            <p className="mt-4 text-base sm:text-xl leading-8 text-gray-900">   
                                Tornata in Italia, mi sono laureata con lode in logopedia presso
                                la facoltà di Medicina e Chirurgia dell’Università di Torvergada
                                di Roma nell’anno 2019.
                            </p>

                            <h2 className="mt-6 text-xl font-bold text-gray-900">Le mie competenze</h2>
                            <ul className="mt-4 list-disc pl-5 text-base sm:text-xl leading-8 text-gray-900">
                                <li>Formazione LIS  (Lingua Italiana dei Segni) - I° Modulo</li>
                                <li>Prompter di I° livello per il trattamento dei disturbi fono-articolatori</li>
                                <li>Formazione di I° livello nella valutazione e terapia dello squilibrio muscolare orofacciale - metodo Andretta</li>
                                <li>Logopedista abilitata al metodo Logogenia®</li>
                                <li>Ho collaborato come libero professionista presso il Centro PotenziAli - Neuropsicologia dello Sviluppo di Roma (disturbi dell’apprendimento)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right column: Image section */}
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        className="w-[20rem] max-w-[35rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[28rem]"
                        src={profileImage}
                        alt="Nicole's profile"
                        loading="lazy"
                    />
                </div>

                {/* Links and CTA section */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-900 lg:max-w-lg">
                            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Vuoi saperne di più?</h2>
                            <ul className="mt-6 indent-6 list-disc text-base sm:text-xl list-inside">
                                <li>
                                    <Link href="https://logogenia.it/la-logogenia/" className="underline" target="_blank">
                                        Metodo Logogenia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/watch?v=d1eMHygmIwQ" className="underline" target="_blank">
                                        Metodo Prompt
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
