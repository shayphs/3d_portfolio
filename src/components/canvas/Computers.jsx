import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <div>
      {/*
        <mesh>
          <HemisphereLight intensity={0.15} groundColor="black" />
        </mesh>
      */}
    </div>
  )
}

export default Computers