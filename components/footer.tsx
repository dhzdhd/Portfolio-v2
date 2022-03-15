import styles from '../styles/components/Footer.module.sass'
import AnimatedLink from './link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>Design inspired by <AnimatedLink text='Brittany Chiang' link='https://brittanychiang.com/' title='Brittany Chiang' /></span>
            <span>Built by <AnimatedLink text='dhzdhd' link='https://github.com/dhzdhd' title='dhzdhd' /> using Next.js</span>
        </footer>
    );
}

export default Footer;
