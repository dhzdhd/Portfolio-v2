import { MouseEventHandler, ReactElement } from "react";
import styles from '../styles/components/LinkButton.module.sass';

interface ButtonProps {
    text: string,
    link: string,
    title: string
}

const LinkButton = ({ text, link, title }: ButtonProps) => {
    return (
        <a className={ styles.button } href={ link } title={ title }>
            { text }
        </a>
    );
}

export default LinkButton;
