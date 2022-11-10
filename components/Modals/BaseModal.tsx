import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import styles from './Modals.module.scss'

interface Props extends React.PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  color?: string
}

export const BaseModal = ({ isOpen, onClose, color = 'primary-dark', children }: Props) => {
  return (
    <Dialog as="div" open={isOpen} className={styles.dialog} onClose={onClose}>
      <div className={styles.container}>
        <div className={clsx(styles.content)}>
          <Dialog.Panel className={clsx(styles.panel, styles[`panel--bg-${color}`])}>
            {children}
          </Dialog.Panel>
          <button type="button" className={styles['close-button']} onClick={onClose}>
            <i className="far fa-times"></i>
          </button>
        </div>
      </div>
    </Dialog>
  )
}
