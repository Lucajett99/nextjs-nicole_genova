import GoogleMap from "google-maps-react-markers";
import { useRef, useState } from "react";
import markerImage from "../../public/marker.svg";
import Image from "next/image";

const Marker = (props) => {
    const { markerId, lat, lng, name, onClick } = props;
    const handleClick = () => {
        // Esegui le azioni desiderate quando il marker viene cliccato
    onClick({ markerId, lat, lng });
  };
  return <div onClick={handleClick}><Image src={markerImage} className="h-8 w-8 mx-auto text-indigo-600" aria-hidden="true" />;</div>;
};


const SimpleMap = () => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const markers = [
    {
      lat: 41.964234942457374,
      lng: 14.783728682784181,
      name: "Montenero di Bisaccia",
    },
    { lat: 42.11517641945536, lng: 14.708564921754201, name: "Vasto" },
  ];

  // Inizializza le variabili per la somma delle coordinate
  let sumLat = 0;
  let sumLng = 0;

  // Calcola la somma delle coordinate
  markers.forEach((marker) => {
    sumLat += marker.lat;
    sumLng += marker.lng;
  });

  // Calcola il centroide
  const centroid = {
    lat: sumLat / markers.length,
    lng: sumLng / markers.length,
  };


  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  const mapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  const onMarkerClick = ({ markerId, lat, lng }) => {
    console.log("This is ->", markerId);
    mapRef.current.setCenter({ lat, lng });
};

  return (
    <div
      style={{ width: "50%" }}
      className="block max-w-sm p-1 bg-slate-300 border border-slate-300 rounded-lg shadow "
    >
      {mapReady}
      <GoogleMap
        defaultCenter={centroid}
        defaultZoom={10}
        mapMinHeight="50vh"
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        {markers.map(({ lat, lng, name }, index) => (
          <Marker
            key={index}
            lat={lat}
            lng={lng}
            markerId={name}
            name={name}
            onClick={onMarkerClick} // you need to manage this prop on your Marker component!
            // draggable={true}
            // onDragStart={(e, { latLng }) => {}}
            // onDrag={(e, { latLng }) => {}}
            // onDragEnd={(e, { latLng }) => {}}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default SimpleMap;
