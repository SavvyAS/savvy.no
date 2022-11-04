'use client'

import React from 'react'
import styles from './HorizontalScrollContainer.module.scss'

export const HorizontalScrollContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles['horizontal-scroll']}>
      <div className="row">
        <div className="column-1">
          <div className={styles['horizontal-scroll__grid']}>{children}</div>
        </div>
      </div>
    </div>
  )
}
