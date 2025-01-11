import '../styles/globals.css';
import 'leaflet/dist/leaflet.css'
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                title="Studio di Logopedia - Nicole Genova"
                description="Studio professionale di logopedia a [Vasto] e [Montenero di Bisaccia]. Specializzata in disturbi del linguaggio, della voce e della deglutizione per bambini e adulti."
                openGraph={{
                    type: 'website',
                    locale: 'it_IT',
                    url: 'http://www.logopedistanicolegenova.it/',
                    siteName: 'Nicole Genova Logopedista',
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: 'logopedia, logopedista, terapia del linguaggio, disturbi apprendimento, [Vasto], [Montenero di Bisaccia]'
                    },
                    {
                        name: 'author',
                        content: 'Nicole Genova'
                    }
                ]}
            />
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}