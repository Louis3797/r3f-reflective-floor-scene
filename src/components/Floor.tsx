import React from "react";
import * as THREE from "three";
const Floor: React.FC = () => {
  return (
    <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[500, 500, 1, 1]} />
      <meshPhongMaterial
        attach="material"
        color="#000000"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Floor;
