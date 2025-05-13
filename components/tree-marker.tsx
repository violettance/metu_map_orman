"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, Billboard } from "@react-three/drei"
import type { TreeType } from "@/lib/types"
import type * as THREE from "three"

interface TreeMarkerProps {
  tree: TreeType
  position: [number, number, number]
  onHover: () => void
  onLeave: () => void
}

export function TreeMarker({ tree, position, onHover, onLeave }: TreeMarkerProps) {
  const ref = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (ref.current && hovered) {
      ref.current.rotation.y += 0.01
    }
  })

  const handlePointerOver = () => {
    setHovered(true)
    onHover()
  }

  const handlePointerOut = () => {
    setHovered(false)
    onLeave()
  }

  return (
    <group ref={ref} position={position} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <Html distanceFactor={15} center>
          <div
            className={`flex flex-col items-center transition-all duration-300 ${hovered ? "scale-125" : "scale-100"}`}
          >
            <div className="w-20 h-20 relative">
              <img src={`/images/${tree.imageFile}`} alt={tree.name} className="w-full h-full object-contain" />
            </div>
            <div className="text-white text-sm font-bold mt-1 bg-primary/90 px-3 py-1 rounded-full shadow-lg">
              {tree.name}
            </div>
          </div>
        </Html>
      </Billboard>
    </group>
  )
}
