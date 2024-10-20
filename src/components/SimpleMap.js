// components/SimpleMap.js
import dynamic from 'next/dynamic';

// dynamic() è una funzione di Next.js che permette di:
// - importare componenti in modo dinamico (lazy loading)
// - controllare il Server Side Rendering (SSR)
const Map = dynamic(
    // Primo argomento: una funzione che importa il componente
    () => import('./OSMap'),
    {
        // Secondo argomento: oggetto di configurazione
        ssr: false, // Disabilita il Server Side Rendering
        loading: () => <div className='h-full text-center'><p>Caricamento mappa...</p></div> // Componente da mostrare durante il caricamento
    }
);

export default function SimpleMap() {
    return (
        <div className="block p-1 bg-slate-300 border border-slate-300 rounded-lg shadow">
            <Map />
        </div>
    );
}