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
                canonical={`https://logopedistanicolegenova.it${router.asPath === '/' ? '' : router.asPath}`}
                openGraph={{
                    type: 'website',
                    locale: 'it_IT',
                    url: 'https://logopedistanicolegenova.it/',
                    siteName: 'Nicole Genova Logopedista',
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
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}