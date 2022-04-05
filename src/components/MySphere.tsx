import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import React from "react";

const MyBox: React.FC = () => {
  return (
    <Icosahedron args={[10, 100]} position={[0, 20, 0]}>
      <MeshDistortMaterial distort={1} speed={2} radius={1} color="#F3E9DD" />
    </Icosahedron>
  );
};

export default MyBox;
