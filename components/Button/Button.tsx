import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.scss'
import { FaLongArrowAltRight, FaPlus } from 'react-icons/fa'

interface Props extends React.PropsWithChildren {
  type?: 'button' | 'submit'
  icon?: 'arrow' | 'plus'
  size?: 'small' | 'medium' | 'large'
  color?: string
  marginBottom?: boolean
  onClick?: () => void
}

export const Button = ({
  type = 'button',
  icon = 'arrow',
  size = 'medium',
  color = 'primary',
  marginBottom = false,
  children,
  onClick
}: Props) => {
  const buttonStyle = clsx(
    styles['button'],
    icon === 'arrow' ? styles['button--arrow'] : styles['button--plus'],
    size === 'small' ? styles['button--small'] : size === 'large' ? styles['button--large'] : '',
    styles[`button--${color}`],
    marginBottom ? styles['button--mb-l'] : ''
  )

  return (
    <button type={type} onClick={onClick} className={buttonStyle}>
      <div className={styles['button__content']}>{children}</div>
      <div className={styles['button__icon']}>
        {icon === 'arrow' ? <FaLongArrowAltRight /> : <FaPlus />}
      </div>
    </button>
  )
}
