import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/Header.module.sass';

function Sphere(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return (
      <mesh
        {...props}
        ref={ref}>
        <sphereGeometry />
        <meshStandardMaterial color={0x63ffee} roughness={1} />
      </mesh>
    )
}

function Header() {
    const [visible, setVisible] = useState(false);

    const listenScrollEvent = (_: any) => {
        if (window.scrollY > 20) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <header style={{boxShadow: `0 ${visible ? '1px 3px' : '0px 0px'} black`}}
        className={styles.header}>
            <div className={styles.canvas}>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[5, 5, 1]} />
                    <Sphere position={[0, 0, 0]} />
                </Canvas>
            </div>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.element}><a href="#hero">Home</a></li>
                    <li className={styles.element}><a href="">Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
