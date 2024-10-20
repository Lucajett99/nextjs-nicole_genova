import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Image from 'next/image'
import riabimed from '../../public/riabimed.jpg'
import vasto from '../../public/vasto.JPG'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const markers = [
    {
        lat: 41.964234942457374,
        lng: 14.783728682784181,
        name: "Riabimed",
        address: "Via Argentieri 352, Montenero di Bisaccia",
        image: riabimed
    },
    {
        lat: 42.11517641945536,
        lng: 14.708564921754201,
        name: "Centro Terapia Cognitivo-Comportamentale",
        address: "Piazza Giuseppe Verdi 1, Vasto",
        image: vasto
    },
];

const center = {
    lat: markers.reduce((sum, marker) => sum + marker.lat, 0) / markers.length,
    lng: markers.reduce((sum, marker) => sum + marker.lng, 0) / markers.length,
};

function OSMap() {
    const openDirections = (address, name) => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        let url;
        if (isMobile) {
            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                url = `maps://maps.apple.com/?daddr=${address}`;
            } else {
                url = `google.navigation:q=${address}`;
            }
        } else {
            url = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
        }
        window.open(url, '_blank');
    };

    return (
        <MapContainer
            center={[center.lat, center.lng]}
            zoom={10}
            style={{ height: "50vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={[marker.lat, marker.lng]}
                    icon={icon}
                >
                    <Popup maxWidth={200}>
                        <div style={{
                            fontFamily: 'Arial, sans-serif',
                            margin: '-14px -20px'
                        }}>
                            {/* Immagine header */}
                            <div style={{
                                width: '100%',
                                height: '90px',
                                overflow: 'hidden',
                                marginBottom: '10px'
                            }}>
                                <Image
                                    src={marker.image}
                                    alt={marker.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Contenuto principale */}
                            <div style={{ padding: '0 20px 15px' }}>
                                {/* Nome */}
                                <h3 style={{
                                    margin: '0 0 8px 0',
                                    fontSize: '18px',
                                    fontWeight: 'bold'
                                }}>
                                    {marker.name}
                                </h3>

                                {/* Indirizzo */}
                                <div style={{
                                    color: '#666',
                                    marginBottom: '15px',
                                    fontSize: '14px'
                                }}>
                                    {marker.address}
                                </div>

                                {/* Bottone indicazioni */}
                                <button
                                    onClick={() => openDirections(marker.address, marker.name)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        backgroundColor: '#1a73e8',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '5px',
                                        transition: 'background-color 0.2s',
                                        ':hover': {
                                            backgroundColor: '#1557b0'
                                        }
                                    }}
                                >
                                    <span>📍</span> Indicazioni stradali
                                </button>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default OSMap;