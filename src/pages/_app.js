import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const isUnderConstruction = true;
        if (!isUnderConstruction && router.pathname !== '/') {
            router.push('/coming_soon');
        }
    },[router.pathname]);
  return <Component {...pageProps} />
}
