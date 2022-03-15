import type { NextPage } from 'next'
import Home from '.';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/Layout.module.sass';


const Layout: NextPage = ({ children }: any) =>{
    return (
        <div className={styles.layout}>
            <a className={styles.a11y_link} href="#landing">Jump to main</a>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
