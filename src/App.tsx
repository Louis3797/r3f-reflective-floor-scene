import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Floor from "./components/Floor";
import { OrbitControls, softShadows } from "@react-three/drei";
import MirrorFloor from "./components/MirrorFloor";

import MySphere from "./components/MySphere";
import { ACESFilmicToneMapping, PCFSoftShadowMap, sRGBEncoding } from "three";

softShadows();
const App: React.FC = () => {
  return (
    <div className="container">
      <Canvas
        shadows
        camera={{ fov: 75, near: 1, far: 500, position: [80, 20, 80] }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(window.devicePixelRatio);
          gl.outputEncoding = sRGBEncoding;
          gl.physicallyCorrectLights = true;
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = PCFSoftShadowMap;
          gl.toneMapping = ACESFilmicToneMapping;
        }}
      >
        <OrbitControls />

        <ambientLight intensity={0.2} castShadow color="#ffffff" />
        <directionalLight
          position={[-100, 50, -100]}
          castShadow
          intensity={0.7}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={500}
          shadow-camera-near={0.5}
          shadow-camera-left={50}
          shadow-camera-right={-50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
          color="#0CECDD"
        />
        <directionalLight
          position={[100, 50, 100]}
          castShadow
          intensity={0.7}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={500}
          shadow-camera-near={0.5}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
          color="#0CECDD"
        />
        <directionalLight
          position={[100, 50, -100]}
          castShadow
          intensity={0.7}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={500}
          shadow-camera-near={0.5}
          shadow-camera-left={50}
          shadow-camera-right={-50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
          color="#f900bf"
        />
        <directionalLight
          position={[-100, 50, 100]}
          castShadow
          intensity={0.7}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={500}
          shadow-camera-near={0.5}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
          color="#f900bf"
        />
        <hemisphereLight args={[0xf900bf, 0x0cecdd, 1]} />
        <Suspense fallback={null}>
          <MirrorFloor />
          <MySphere />
          <fog attach="fog" near={100} far={300} color="#040303" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
