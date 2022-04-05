import { MeshReflectorMaterial } from "@react-three/drei";
import React from "react";

const MirrorFloor: React.FC = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <circleGeometry args={[250, 10]} />
      <MeshReflectorMaterial
        blur={[0, 0]}
        mixBlur={0.1}
        mixStrength={0.15}
        mixContrast={0.4}
        resolution={2048}
        mirror={1}
        depthScale={1}
        minDepthThreshold={0}
        maxDepthThreshold={0}
        depthToBlurRatioBias={0.03}
        reflectorOffset={0.2}
      />
    </mesh>
  );
};

export default MirrorFloor;
