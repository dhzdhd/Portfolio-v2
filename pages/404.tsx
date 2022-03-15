import AnimatedLink from '../components/link';
import LinkButton from '../components/link_button';
import styles from '../styles/ErrorPage.module.sass';


const ClientErrorPage = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>404</h1>
            <h2 className={styles.h2}>Page not found!</h2>
            <LinkButton text='Go back' title='Go back' link="/" />
        </div>
    );
}

export default ClientErrorPage;
