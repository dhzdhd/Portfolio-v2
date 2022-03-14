import Link from "next/link";
import styles from '../styles/components/SocialsBar.module.sass'
import { Icon } from '@iconify/react';

const SocialsBar = () => {
    return (
        <ul className={styles.bar}>
            <li className={styles.icon}>
                <a className={styles.link} title="discord" href="https://github.com/dhzdhd" target="blank_"><Icon icon="bi:discord" /></a>
            </li>
            <li className={styles.icon}>
                <a className={styles.link} title="instagram" href="https://github.com/dhzdhd" target="blank_"><Icon icon="bi:instagram" /></a>
            </li>
            <li className={styles.icon}>
                <a className={styles.link} title="github" href="https://github.com/dhzdhd" target="blank_"><Icon icon="bi:github" /></a>
            </li>
            <li className={styles.line}></li>
        </ul>
    );
}

export default SocialsBar;
