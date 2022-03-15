import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import styles from '../styles/components/Header.module.sass';

function Sphere(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    return (
      <mesh
        {...props}
        ref={ref}
        onPointerOver={(_) => hover(true)}
        onPointerOut={(_) => hover(false)}>
        <sphereGeometry parameters={{widthSegments: 64, heightSegments: 32, radius: 0.1, phiStart: 0, phiLength: Math.PI * 2, thetaStart: 0, thetaLength: Math.PI}} />
        <meshStandardMaterial color={0x64ffda} roughness={1} />
      </mesh>
    )
}

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.canvas}>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 2]} />
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
