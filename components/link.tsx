import styles from '../styles/components/Link.module.sass';

interface LinkParams {
    text: string,
    link: string,
    title: string
}

const AnimatedLink = ({ text, link, title }: LinkParams) => {
    return (
        <a className={styles.link} title={title} href={link} target='blank_'>{text}</a>
    )
}

export default AnimatedLink;
