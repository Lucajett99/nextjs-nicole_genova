import Layout from "../components/Layout.js";
import Link from "next/link";
import ImageCarousel from "../components/ImageCarousel.js";

export default function Index() {
    return (
        <Layout>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl sm:max-w-5xl py-16">
                    <div className="text-center space-y-8">
                        {/* Sezione citazione con stile decorativo */}
                        <div className="relative">
                            <span className="absolute -left-4 -top-6 text-6xl font-serif text-white opacity-30">"</span>
                            <span className="absolute -right-4 -bottom-6 text-6xl font-serif text-white opacity-30">"</span>
                            <h1 className="relative text-2xl font-light tracking-wide text-white sm:text-4xl italic font-playfair">
                                ... resta sempre notevole il fatto che tutto ciò che possiamo dire sia esprimibile con la combinazione dei circa trenta caratteri dell'alfabeto.
                            </h1>
                        </div>

                        {/* Sottotitolo o autore della citazione */}
                        <p className="text-sm sm:text-base text-white/80 font-light tracking-widest uppercase">
                            ― Richard L. Gregory
                        </p>
                    </div>

                    <ImageCarousel />

                    {/* <div className="mt-20 flex justify-center justify-items-center text-center gap-x-4">
                        <Link
                            href="/treatments"
                            className="inline-block rounded-lg text-center bg-white min-w-[8rem] sm:min-w-[12rem] px-3 py-3 sm:text-lg font-semibold text-gray-900 hover:bg-gray-200 transition-colors duration-300"
                        >
                            Trattamenti
                        </Link>
                        <Link
                            href="/whoIam"
                            className="inline-block rounded-lg text-center bg-white min-w-[8rem] sm:min-w-[12rem] px-3 py-3 sm:text-lg font-semibold text-gray-900 hover:bg-gray-300 transition-colors duration-300"
                        >
                            Chi Sono
                        </Link>
                    </div> */}
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const isUnderConstruction = true;
    if (isUnderConstruction && context.req.url === "/") {
        return {
            redirect: {
                destination: "/coming_soon",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}