import styles from './Forms.module.scss'

interface Props extends React.PropsWithChildren {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const BaseForm = ({ onSubmit, children }: Props) => {
  const preventDefault = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
  }
  return (
    <form className={styles.form} onSubmit={preventDefault}>
      {children}
    </form>
  )
}
