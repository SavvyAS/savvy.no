import styles from "./ActionButton.module.scss";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export default function ActionButton({text, onClick}: ButtonProps){
    return (
        <button
        className={styles.actionButton}
        onClick={onClick}
        >
            {text}
        </button>
    )
}