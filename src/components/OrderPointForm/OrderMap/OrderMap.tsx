import styles from './OrderMap.module.css'
import { MapContainer, TileLayer, useMap, CircleMarker, Popup } from 'react-leaflet'
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css'
import type { City } from "../../../types/index";


function PointMarkers({ points, onSelect }: { points: City['points'], onSelect: (name: string) => void }) {
  const map = useMap()
  return (
    <>
      {points.map((point) => (
        <CircleMarker
          key={point.name}
          center={point.position}
          radius={9}
          pathOptions={{ color: '#0ec261', fillColor: '#fff', fillOpacity: 1, weight: 5 }}
        >
          <Popup>
            {point.name}
            <button
              type="button"
              onClick={() => { onSelect(point.name); map.closePopup() }}
              className={styles.mapPopUpButton}
            >
              <span>Выбрать</span>
            </button>
          </Popup>
        </CircleMarker>
      ))}
    </>
  )
}

function MapUpdater({ position, zoom }: { position: [number, number], zoom: number }) {
  const map = useMap()
  useEffect(() => {
    map.setView(position, zoom)
  }, [position, zoom, map])
  return null
}

type Props = {
  mapPosition: number[];
  selectedCity: City | undefined;
  handlePointSelect: (name: string) => void;
}

function OrderMap({ mapPosition, selectedCity, handlePointSelect }: Props) {
    const position = mapPosition as [number, number]
    return(
      <MapContainer
        center={position}
        zoom={1} zoomControl={false}
        className={styles.mapContainer}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <MapUpdater position={position} zoom={12} />
        {selectedCity && (
          <PointMarkers points={selectedCity.points} onSelect={handlePointSelect} />
        )}
      </MapContainer>
    )
}

export default OrderMap