import Layout from "../components/Layout.js";
import Link from "next/link";
import ImageCarousel from "../components/ImageCarousel.js";

export default function Index() {
    return (
        <Layout>
            <div className="relative isolate px-6 pt-14 lg:px-8">
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
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const isUnderConstruction = false;
    
    if (isUnderConstruction) {
        return {
            redirect: {
                destination: '/coming_soon',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}