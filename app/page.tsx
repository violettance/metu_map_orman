"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Leaflet'i client tarafında yüklemek için dynamic import kullanıyoruz
const CampusMap = dynamic(() => import("@/components/campus-map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800 text-white">
      <p className="text-lg">Harita yükleniyor...</p>
    </div>
  ),
})

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <Suspense
        fallback={
          <div className="w-full h-screen bg-gray-800 text-white flex items-center justify-center">Yükleniyor...</div>
        }
      >
        <CampusMap />
      </Suspense>
    </main>
  )
}
