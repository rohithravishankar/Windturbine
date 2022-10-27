import * as THREE from 'three'
import { Suspense, useLayoutEffect, useRef, useAnimations } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, Environment, Stage, PresentationControls } from '@react-three/drei'
import {Model} from './Wind'


export default function App() {
  return (

    <Canvas dpr={[1, 2]} shadows camera={{ fov:45 }} style={{ "position": "absolute" }}>
      <color attach="background" args={['#87CEEB']} />

      <PresentationControls speed={1.5} global zoom={0.6} polar={[-0.1, Math.PI / 4]} >
        <Stage environment={'sunset'} >
        <Model scale={0.1} />
        
          

        </Stage>

      </PresentationControls>

    </Canvas>
  )
}
