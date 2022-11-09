import { Button } from 'components/Button/Button'
import { BaseForm } from './BaseForm'
import styles from './Forms.module.scss'

export const CvForm = () => {
  const onSubmit = (event: any) => {
    const data = new FormData(event.target)
    const send = `mailto:hei@savvy.no?subject=Forespørsel&body=Navn: ${data.get(
      'name'
    )}%0DTelefon: ${data.get('telephone')}%0D%0D${data.get('message')}%0D`
    
    window.location.href = send
  }
  return (
    <BaseForm onSubmit={onSubmit}>
      <input className={styles.input} id="name" placeholder="Navn *" required name="name" />
      <input className={styles.input} id="telephone" placeholder="Telefon" name="telephone" />
      <textarea
        className={styles.input}
        id="message"
        placeholder="Melding *"
        required
        name="message"
      />
      <div style={{ display: 'grid', justifyItems: 'end' }}>
        <a href="body">
          <Button type="submit" color="secondary" icon="arrow">
            Send
          </Button>
        </a>
      </div>
    </BaseForm>
  )
}
