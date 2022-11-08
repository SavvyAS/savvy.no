import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'
import styles from './AnimatedHeading.module.scss'

const words = [
  'people.',
  'consultants.',
  'developers.',
  'designers.',
  'disruptors.',
  'innovators.',
  'dreamers.',
  'specialists.'
]

export const AnimatedHeading = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setInterval(() => setCurrentIndex((c) => (c >= words.length - 1 ? 0 : c + 1)), 3000)
  }, [])

  return (
    <h1 className={styles['perspective-container']}>
      We are savvy{' '}
      {words.map((word, index) => (
        <Fragment key={word}>
          {index === currentIndex ? (
            <span
              className={clsx(styles['animation-enter-leave'])}
            >
              {word}
            </span>
          ) : null}
        </Fragment>
      ))}
    </h1>
  )
}
