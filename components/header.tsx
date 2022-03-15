import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextureLoader } from 'three';
import styles from '../styles/components/Header.module.sass';

function Sphere(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    const loader = new TextureLoader();
    const texture = loader.load('../public/e.jpg');

    return (
      <mesh
        {...props}
        ref={ref}>
        <sphereGeometry />
        <meshStandardMaterial color={0x63ffee} roughness={1} roughnessMap={texture} envMap={texture} />
      </mesh>
    )
}

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.canvas}>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[5, 5, 1]} />
                    <Sphere position={[0, 0, 0]} />
                </Canvas>
            </div>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.element}>Links here</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
