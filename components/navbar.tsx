import { Icon } from '@iconify/react';
import React, { useEffect, useState, WheelEvent } from 'react';
import styles from '../styles/components/Navbar.module.sass';

const NavbarItem = () => {
    return (
        <a className={styles.item} href="#landing" title='home button'>
            <Icon className={styles.icon} icon="bx:home" />
        </a>
    )
}

const Navbar = () => {
    const [visible, setVisible] = useState(true);

    const listenScrollEvent = (e: any) => {
        if (window.scrollY > document.body.scrollHeight - 1040) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    return (
        <nav style={{'display': visible ? 'flex': 'none'}}
        className={styles.nav}>
            <ul>
                <li className={styles.element}>
                    <NavbarItem />
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;
