import Layout from "../components/Layout.js";
import { MapPin } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
//import SimpleMap from "../components/Map.js";
import SimpleMap from "../components/SimpleMap.js";


export default function contacts() {

    return (
        <Layout>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8 items-center">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Contatti
                    </h2>
                </div>
                <div className="flex flex-col sm:flex-row flex-auto items-center justify-around mt-8">
                    <div className="max-w-2xl">
                        <ul className="mt-2 text-base sm:text-xl leading-8 text-white">
                            <li><span className="font-bold">Telefono:</span> <Link href="tel:+393202438325"  className="underline text-sm sm:text-xl">+39 320 2438325</Link></li>
                            <li><span className="font-bold">E-mail:</span> <Link href="mailto:nicolegenova95@gmail.com" className="underline text-sm sm:text-xl">nicolegenova95@gmail.com</Link></li>
                        </ul>
                        <span className="mt-6 text-base sm:text-xl leading-8 text-white">
                            Ricevo negli studi:
                        </span>
                        <ul className="mt-2 ml-6 sm:ml-10 text-sm sm:text-xl leading-8 text-white list-disc">
                            <li>
                                <Link
                                    href="https://www.google.com/maps/place/Dott.ssa+Nicole+Genova+-+Logopedista/@42.1196756,14.6988423,17z/data=!3m1!4b1!4m6!3m5!1s0xae0295d3e42b5efd:0xb3e896af1f89ecd1!8m2!3d42.1196716!4d14.7014172!16s%2Fg%2F11vbwhz6t4?hl=it&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-300 underline transition-colors cursor-pointer"
                                >
                                    Circonvallazione Histoniense 10, Vasto (CH), 66054
                                </Link>
                            </li>
                            <li>  
                                <Link
                                    href="https://www.google.com/maps/search/?api=1&query=Riabimed,+Via+Argentieri+352,+Montenero+di+Bisaccia+CB+86036"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-300 underline transition-colors cursor-pointer"
                                >
                                    Riabimed, Via Argentieri 352, Montenero di Bisaccia (CB), 86036
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-none mt-6 sm:mt-0 w-72 lg:w-96 ...">
                        <SimpleMap />
                    </div>
                    {/* Aggiunta dei social */}
                    {/* <div className="mt-6">
                        <h3 className="text-base sm:text-xl font-semibold text-white">Seguimi sui social</h3>
                        <div className="mt-4 flex space-x-6">
                            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-600 hover:text-blue-800" />
                                </Link>
                                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-500 hover:text-pink-700" />
                                </Link>
                            <Link href="https://www.linkedin.com/in/nicole-genova-00969b1a6" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-500 hover:text-blue-700" />
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </Layout>
    );
}
// <SimpleMap style={{ width: "100%" }} />