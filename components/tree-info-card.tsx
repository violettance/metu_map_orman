"use client"

interface TreeInfoCardProps {
  tree: {
    id: number
    name: string
    scientificName: string
    lifespan: string
    info: string
    imageFile: string
  }
}

export function TreeInfoCard({ tree }: TreeInfoCardProps) {
  return (
    <div className="bg-gray-900 bg-opacity-90 text-white rounded-lg shadow-lg overflow-hidden border border-green-500 animate-in fade-in slide-in-from-right-5 duration-300">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 relative">
            <img
              src={`${window.location.origin}/images/${tree.imageFile}`}
              alt={tree.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                // Hata durumunda yedek görsel göster
                e.currentTarget.src = `${window.location.origin}/images/fallback-tree.png`
                // Yedek görsel de yüklenmezse, hata mesajı göster
                e.currentTarget.onerror = () => {
                  e.currentTarget.style.display = "none"
                  e.currentTarget.parentElement!.innerHTML =
                    `<div class="flex items-center justify-center w-full h-full bg-gray-800 text-white rounded-md"><span>${tree.name}</span></div>`
                }
              }}
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-400">{tree.name}</h3>
            <p className="italic text-sm text-gray-300">{tree.scientificName}</p>
          </div>
        </div>

        <div className="mt-4 space-y-3 text-sm">
          <div className="p-2 bg-gray-800 rounded-md">
            <span className="font-semibold block mb-1 text-green-300">Ortalama Yaşam Süresi:</span>
            <span>{tree.lifespan}</span>
          </div>
          <div className="p-2 bg-gray-800 rounded-md">
            <span className="font-semibold block mb-1 text-green-300">Bilgi:</span>
            <span>{tree.info}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
