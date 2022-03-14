import type { NextPage } from 'next'
import Home from '.';
import Header from '../components/header';
import styles from '../styles/Layout.module.sass';


const Layout: NextPage = ({ children }: any) =>{
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Home />
            </main>
        </div>
    );
}

export default Layout;
