/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/wind.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Wind_Turbine" position={[0, 0.64, 0]} rotation={[Math.PI, 0, Math.PI]} scale={0.24}>
          <group name="turbine_grab">
            <group name="rotation" position={[0, 0, -0.06]} rotation={[0, 0, -0.17]} scale={0.2}>
              <mesh name="center" geometry={nodes.center.geometry} material={materials['wind trub']} rotation={[0, 0, 1.09]} scale={0.33} />
              <mesh name="piece" geometry={nodes.piece.geometry} material={materials['wind trub']} position={[0, 0, 0.04]} rotation={[0, 0, 1.09]} scale={0.33} />
              <mesh name="propeller" geometry={nodes.propeller.geometry} material={materials['wind trub']} position={[0, 0, 0.03]} rotation={[0, 0, 1.09]} scale={0.33}>
                <mesh name="red1" geometry={nodes.red1.geometry} material={materials.red} />
              </mesh>
            </group>
          </group>
          <mesh name="body" geometry={nodes.body.geometry} material={materials['wind trub']} position={[0, -1.76, 0.09]} scale={0.04}>
            <mesh name="red_body" geometry={nodes.red_body.geometry} material={materials.red} />
          </mesh>
          <mesh name="hull" geometry={nodes.hull.geometry} material={materials['wind trub']} position={[0, 0, 0.12]} scale={0.04}>
            <mesh name="cat_walk" geometry={nodes.cat_walk.geometry} material={materials['wind trub']} position={[0.08, -0.97, 5.62]} rotation={[0, 1.57, 0]} />
            <mesh name="cat_wlak_piece" geometry={nodes.cat_wlak_piece.geometry} material={materials['wind trub']} position={[0.08, -0.97, 5.62]} rotation={[0, 1.57, 0]} />
            <mesh name="hull_piece" geometry={nodes.hull_piece.geometry} material={materials['wind trub']} position={[0.08, -1.61, 2.06]} rotation={[0, 1.57, 0]} />
            <mesh name="tail" geometry={nodes.tail.geometry} material={materials['wind trub']} position={[0.08, -1.61, 2.06]} rotation={[0, 1.57, 0]} />
          </mesh>
        </group>
        <group name="Windmill" position={[0, -0.05, -0.02]} rotation={[Math.PI / 2, 0, 1.57]} scale={0}>
          <mesh name="Mesh011" geometry={nodes.Mesh011.geometry} material={materials.Standard} />
          <mesh name="Mesh011_1" geometry={nodes.Mesh011_1.geometry} material={materials.lambert2} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/wind.glb')
