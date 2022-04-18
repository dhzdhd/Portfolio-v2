import { Icon } from '@iconify/react';
import React, { useEffect, useState, WheelEvent } from 'react';
import styles from '../styles/components/Navbar.module.sass';

const NavbarItem = ({ icon, link }: { icon: string, link: string }) => {
    return (
        <a className={styles.item} href={link} title='home button'>
            <Icon className={styles.icon} icon={icon} />
        </a>
    )
}

const Navbar = () => {
    const [visible, setVisible] = useState(true);

    const listenScrollEvent = (_: any) => {
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
        <nav style={{'display': visible ? 'none': 'none'}}
        className={styles.nav}>
            <ul>
                <li className={styles.element}>
                    <NavbarItem icon="bx:home" link="#landing" />
                </li>
                <li className={styles.element}>
                    <NavbarItem icon="iconoir:profile-circled" link="#about-me" />
                </li>
                <li className={styles.element}>
                    <NavbarItem icon="ant-design:project-outlined" link="#landing" />
                </li>
                <li className={styles.element}>
                    <NavbarItem icon="fluent:local-language-16-filled" link="#landing" />
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;
