import styles from './BlockQuote.module.scss'
interface ButtonProps  {
    text: string;
  }

export default function BlockQuote({text}: ButtonProps){
    return (
        <blockquote
        className={styles.blockquote}
        >
            {text}
        </blockquote>
    )
}

                