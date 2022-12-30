import { ImageProps } from 'next/image'
import Image from 'next/image'
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

type Props = {} & ImageProps

export const ParallaxImage: React.FC<Props> = (props: Props) => {
  return (
    <ParallaxProvider>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ transform: 'scale(1.2)' }}>
          <Parallax translateY={[0, 20]}>
            <Image {...props} />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default ParallaxImage
