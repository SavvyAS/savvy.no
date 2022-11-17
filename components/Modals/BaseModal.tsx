import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import styles from './Modals.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/pro-regular-svg-icons'

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
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </Dialog>
  )
}
