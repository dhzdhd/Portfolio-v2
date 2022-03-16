import styles from '../styles/components/Navbar.module.sass';

const NavbarItem = () => {
    return (
        <a className={styles.item} href=""></a>
    )
}

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.element}>
                    <NavbarItem />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
