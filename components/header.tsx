import styles from '../styles/components/Header.module.sass';

function Header() {
    return (
        <header className={styles.header}>
            <div>Icon here</div>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.element}>Links here</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
