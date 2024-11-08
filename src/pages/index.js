import Layout from "../components/Layout.js";
import Link from "next/link";

export default function index() {
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
                <div className="mx-auto max-w-4xl sm:max-w-5xl py-32">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
                            Nessun vento è favorevole per chi non sa dove andare, ma per noi che sappiamo anche la brezza sarà preziosa
                        </h1>
                    </div>
                    <div className="mt-14 flex justify-center justify-items-center text-center gap-x-4">
                        <Link
                            href="/treatments"
                            className="inline-block rounded-lg text-center bg-white min-w-[8rem] sm:min-w-[12rem] px-3 py-3 sm:text-lg font-semibold text-gray-900 hover:bg-gray-200"
                        >
                            Trattamenti
                        </Link>
                        <Link
                            href="/whoIam"
                            className="inline-block rounded-lg text-center bg-white min-w-[8rem] sm:min-w-[12rem] px-3 py-3 sm:text-lg font-semibold text-gray-900 hover:bg-gray-300"
                        >
                            Chi Sono
                        </Link>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const isUnderConstruction = false;
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