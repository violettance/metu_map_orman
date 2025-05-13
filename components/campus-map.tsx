"use client"

import { useState, useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import { treeData } from "@/lib/tree-data"
import type { TreeType } from "@/lib/types"
import { TreeInfoCard } from "@/components/tree-info-card"
import { Icon } from "leaflet"
import { Github, Map } from "lucide-react"
import "leaflet/dist/leaflet.css"

// ODTÜ kampüs koordinatları
const ODTU_CENTER = [39.889, 32.782]
const ZOOM_LEVEL = 15

// Haritayı ODTÜ kampüsüne odaklayan bileşen
function MapCenter() {
  const map = useMap()

  useEffect(() => {
    map.setView(ODTU_CENTER, ZOOM_LEVEL)
  }, [map])

  return null
}

export default function CampusMap() {
  const [hoveredTree, setHoveredTree] = useState<TreeType | null>(null)
  const mapRef = useRef(null)

  // Leaflet icon için varsayılan ikonun yolunu düzeltmek için
  useEffect(() => {
    delete (Icon.Default.prototype as any)._getIconUrl
    Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    })
  }, [])

  // Ağaç ikonları için özel ikon oluşturma
  const createTreeIcon = (imageFile: string) => {
    return new Icon({
      iconUrl: `/images/${imageFile}`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    })
  }

  return (
    <div className="relative w-full h-full">
      <div className="h-screen w-screen">
        {/* Header - fixed positioning ile her zaman görünür */}
        <header className="fixed top-0 left-0 right-0 z-[9999] bg-gray-900 bg-opacity-90 text-white p-3 flex justify-between items-center shadow-lg border-b border-green-600">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Map className="h-6 w-6 text-green-400" />
            <span className="text-xl font-bold text-green-400">MapOrman</span>
          </div>

          {/* Title */}
          <h1 className="text-xl font-bold text-center">ODTÜ Bitki Örtüsü</h1>

          {/* GitHub Button */}
          <a
            href="https://github.com/violettance/metu_map_orman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </header>

        {/* Map Container - header yüksekliğini hesaba katarak konumlandırma */}
        <div className="w-full h-full">
          <MapContainer
            center={ODTU_CENTER}
            zoom={ZOOM_LEVEL}
            style={{ height: "100vh", width: "100vw" }}
            zoomControl={true}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapCenter />

            {treeData.map((tree) => (
              <Marker
                key={tree.id}
                position={tree.geoPosition}
                icon={createTreeIcon(tree.imageFile)}
                eventHandlers={{
                  mouseover: () => setHoveredTree(tree),
                  mouseout: () => setHoveredTree(null),
                  click: () => setHoveredTree(tree),
                }}
              />
            ))}
          </MapContainer>
        </div>

        {hoveredTree && (
          <div className="fixed top-20 right-4 w-80 z-[9998]">
            <TreeInfoCard tree={hoveredTree} />
          </div>
        )}
      </div>
    </div>
  )
}
