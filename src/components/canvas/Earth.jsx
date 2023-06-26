import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls , Preload , useGLTF } from '@react-three/drei';

import Loader from '../Loader'
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <mesh>
      <pointLight intensity={1}/>
      <hemisphereLight intensity={.15} groundColor='black' />

      <primitive object={earth.scene} scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}

const EarthCanvas = ()=>{
  return (
    <Canvas shadows frameloop='demand' dpr={[1, 2]} gl={{preserveDrawingBuffer:true}} camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
    >
        <Suspense fallback={<Loader/>}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            maxPolarAngle = {Math.PI/2}
            minPolarAngle = {Math.PI/2}
          />
          <Earth/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default EarthCanvas;