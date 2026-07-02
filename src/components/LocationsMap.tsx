import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '../contexts/LanguageContext';

// Fix Leaflet's default icon paths in Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function MapBounds({ locations }: { locations: { position: [number, number] }[] }) {
  const map = useMap();
  useEffect(() => {
    if (locations.length > 1) {
      const bounds = L.latLngBounds(locations.map(l => l.position));
      map.fitBounds(bounds, { padding: [80, 80] });
    } else if (locations.length === 1) {
      map.setView(locations[0].position, 13);
    }
  }, [map, locations]);
  return null;
}

export default function LocationsMap() {
  const { t } = useLanguage();

  const locations = useMemo(() => [
    {
      name: t("map.loc1.name"),
      position: [52.4680, 13.4410] as [number, number], // Naumburger Str. 37, 12057 Berlin-Neukölln
      desc: t("map.loc1.desc"),
      address: t("map.loc1.address"),
      city: t("map.loc1.city")
    },
    {
      name: t("map.loc2.name"),
      position: [52.5040, 13.3920] as [number, number], // Markgrafenstraße 67, 10969 Berlin
      desc: t("map.loc2.desc"),
      address: t("map.loc2.address"),
      city: t("map.loc2.city")
    }
  ], [t]);

  return (
    <section className="py-24 md:py-32 bg-stone-50 border-t border-stone-200 border-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">{t("map.title")}</h2>
          <div className="w-16 h-px bg-stone-300 mx-auto mb-6"></div>
          <p className="text-stone-500 font-light">{t("map.subtitle")}</p>
        </div>
        <div className="w-full h-[500px] bg-stone-100 rounded-sm overflow-hidden shadow-md border border-stone-200 relative z-0">
        <MapContainer 
          style={{ height: '100%', width: '100%', zIndex: 1 }} 
          scrollWheelZoom={false}
          center={[52.486, 13.416]}
          zoom={12}
        >
          {/* CartoDB Voyager Tile Layer - Cleaner and fits the theme better */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <MapBounds locations={locations} />
          {locations.map((loc, idx) => (
            <Marker key={idx} position={loc.position}>
              <Popup className="wedding-popup">
                <div className="text-center p-1">
                  <h4 className="font-serif text-lg text-stone-800 mb-1">{loc.name}</h4>
                  <p className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-1">{loc.city}</p>
                  <p className="font-sans text-xs text-stone-500 mb-2">{loc.address}</p>
                  <p className="font-sans text-sm text-stone-600">{loc.desc}</p>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.position[0]},${loc.position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs tracking-widest text-stone-500 hover:text-stone-900 underline transition-colors"
                  >
                    {t("map.route")}
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      {/* Some custom Leaflet popup styling to blend with the app */}
      <style>{`
        .leaflet-popup-content-wrapper {
          border-radius: 2px;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .leaflet-popup-tip {
          box-shadow: none;
        }
      `}</style>
      </div>
    </section>
  );
}
