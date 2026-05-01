import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

const Lotus = ({ primaryColor, secondaryColor, accentColor }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.15;
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial
          color={primaryColor}
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      
      {/* Multi-color glow effect - Dynamic theme colors */}
      <pointLight position={[0, 0, 0]} intensity={2} color={primaryColor} />
      <pointLight position={[2, 2, 2]} intensity={1.5} color={secondaryColor} />
      <pointLight position={[-2, -2, 2]} intensity={1.5} color={accentColor} />
    </Float>
  );
};

const Scene3D = () => {
  const { theme } = useTheme();
  
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color={theme.colors.primary} />
        <directionalLight position={[-10, -10, 5]} intensity={1} color={theme.colors.accent} />
        <Lotus 
          primaryColor={theme.colors.primary}
          secondaryColor={theme.colors.secondary}
          accentColor={theme.colors.accent}
        />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
