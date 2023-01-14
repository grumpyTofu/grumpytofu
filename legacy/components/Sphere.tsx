import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";

const Sphere = () => {
  const planet = useRef<any>();

  const { nodes } = useGLTF("models/mars.glb") as any;

  useFrame(() => (planet.current.rotation.y += 0.0003));

  return <mesh ref={planet} visible position={[0, 0, 0]} geometry={(nodes.Cube008 as any).geometry} material={(nodes.Cube008 as any).material} />;
};

export default Sphere;
