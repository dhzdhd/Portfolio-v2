import type { NextPage } from 'next'
import Header from '../components/header';
import styles from '../styles/Layout.module.sass';

const Layout: NextPage = ({ children }: any) =>{
    return (
        <div className={styles.layout}>
            <Header />
            <main>

            </main>
        </div>
    );
}

export default Layout;
