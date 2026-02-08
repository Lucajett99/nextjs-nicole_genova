import '../styles/globals.css';
import 'leaflet/dist/leaflet.css'
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    
    return (
        <>
            <DefaultSeo
                title="Studio di Logopedia - Nicole Genova"
                description="Studio professionale di logopedia a Vasto e Montenero di Bisaccia. Specializzata in disturbi del linguaggio, della voce e della deglutizione per bambini e adulti."
                canonical={`https://www.logopedistanicolegenova.it${router.asPath === '/' ? '' : router.asPath}`}
                openGraph={{
                    type: 'website',
                    locale: 'it_IT',
                    url: 'https://www.logopedistanicolegenova.it/',
                    siteName: 'Nicole Genova Logopedista',
                    images: [
                        {
                            url: 'https://www.logopedistanicolegenova.it/pictures/nicole.jpeg',
                            width: 1200,
                            height: 630,
                            alt: 'Nicole Genova - Logopedista',
                        }
                    ],
                }}
                robotsProps={{
                    noindex: false,
                    nofollow: false
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: 'logopedia, logopedista, terapia del linguaggio, disturbi apprendimento, Vasto, Montenero di Bisaccia'
                    },
                    {
                        name: 'author',
                        content: 'Nicole Genova'
                    }
                ]}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Studio di Logopedia Nicole Genova",
                        "description": "Studio professionale di logopedia specializzato in disturbi del linguaggio, della voce e della deglutizione per bambini e adulti.",
                        "url": "https://www.logopedistanicolegenova.it",
                        "image": "https://www.logopedistanicolegenova.it/pictures/nicole.jpeg",
                        "priceRange": "€€",
                        "@id": "https://www.logopedistanicolegenova.it",
                        "address": [
                            {
                                "@type": "PostalAddress",
                                "addressLocality": "Vasto",
                                "addressRegion": "CH",
                                "addressCountry": "IT"
                            },
                            {
                                "@type": "PostalAddress",
                                "addressLocality": "Montenero di Bisaccia",
                                "addressRegion": "CB",
                                "addressCountry": "IT"
                            }
                        ],
                        "areaServed": ["Vasto", "Montenero di Bisaccia", "Chieti", "Campobasso"],
                        "serviceType": ["Logopedia", "Terapia del linguaggio", "Disturbi dell'apprendimento"]
                    })
                }}
            />
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}