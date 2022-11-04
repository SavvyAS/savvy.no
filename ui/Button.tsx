'use client'

import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.scss'

interface Props extends React.PropsWithChildren {
  type?: 'arrow' | 'plus'
  size?: 'small' | 'medium' | 'large'
  color?: string
  onClick?: () => void
}

export const Button = ({
  type = 'arrow',
  size = 'medium',
  color = 'primary',
  children,
  onClick
}: Props) => {
  const buttonStyle = clsx(
    styles['button'],
    type === 'arrow' ? styles['button--arrow'] : styles['button--plus'],
    size === 'small' ? styles['button--small'] : size === 'large' ? styles['button--large'] : '',
    styles[`button--${color}`]
  )

  return (
    <button onClick={onClick} className={buttonStyle}>
      <div className={styles['button__content']}>{children}</div>
      <div className={styles['button__icon']}>
        {type === 'arrow' ? (
          <i className="far fa-long-arrow-right fa-fw fa-md" />
        ) : (
          <i className="far fa-plus fa-fw fa-md" />
        )}
      </div>
    </button>
  )
}
