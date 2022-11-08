import clsx from 'clsx'
import React from 'react'
import styles from './Card.module.scss'

interface Props extends React.PropsWithChildren {
  alignRight?: boolean
  image: React.ReactNode
}

export const Card = ({ alignRight = false, image, children }: Props) => {
  return (
    <div className={clsx(styles['card'], alignRight && styles['card--right'])}>
      <div className={styles['card__figure']}>{image}</div>
      <div className={styles['card__body']}>{children}</div>
    </div>
  )
}
