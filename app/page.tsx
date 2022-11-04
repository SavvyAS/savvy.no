import { Home } from '@/lib/content'
import { pages } from '@/lib/content.json'
import { AnimatedHeading } from '@/ui/AnimatedHeading'
import { Button } from '@/ui/Button'
import { HalfImage } from '@/ui/HalfImage'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const home: Home = pages.home
  const competenceString = home.competence.map((x) => x + ' // ').join('')

  return (
    <div>
      <header>
        <HalfImage
          image={
            <Image
              src="/images/header-image-1.png"
              width="628"
              height="790"
              quality="100"
              sizes="sm:300px lg:600px"
              alt=""
            />
          }
        >
          <div className="row">
            <div className="column-2">
              <div className="header-text">
                <h1 style={{ display: 'none', opacity: 0 }}>{home.heading}</h1>
                <AnimatedHeading />
                <Link href="/agency">
                  <Button>The agency</Button>
                </Link>
              </div>
            </div>
          </div>
          <Image
            className="graffiti-1"
            src="/images/graffiti.svg"
            width="413"
            quality="100"
            height="408"
            alt=""
          />
        </HalfImage>
      </header>
      <div className="container">
        <div className="row">
          <p className="column-2 paragraph-large ingress">{home.ingress}</p>
        </div>
      </div>

      <section>
        <HalfImage
          image={
            <Image
              src="/images/header-image-2.png"
              width="628"
              height="790"
              sizes="sm:300px lg:600px"
              alt=""
            />
          }
        >
          <div style={{ display: 'grid', alignContent: 'end', height: '100%' }}>
            <div style={{ height: '130px' }}>
              <div className="relative">
                <div className="marquee marquee--slow">
                  <div className="marquee__track">
                    <span className="marquee__content">{competenceString}</span>
                    <span className="marquee__content">{competenceString}</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: '130px' }}>
              <div className="relative">
                <div className="marquee marquee--reverse marquee--primary">
                  <div className="marquee__track">
                    <span className="marquee__content">{competenceString}</span>
                    <span className="marquee__content">{competenceString}</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: '130px' }}>
              <div className="relative">
                <div className="marquee marquee--fast marquee marquee--primary-dark">
                  <div className="marquee__track">
                    <span className="marquee__content">{competenceString}</span>
                    <span className="marquee__content">{competenceString}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HalfImage>
      </section>
      <section>
        <h2 className="sr-only">Clients</h2>
        {/* <HorizontalScrollContainer>
                <div
                    v-for="(client, index) in home.clients"
                    :key="client.name"
                    className="client-card"
                    :className="{ 'client-card--reverse': index % 2 !== 0 }"
                >
                    <div className="client-card__figure">
                        <Image
                            className="client-card__background"
                            format="webp"
                            :src="client.backgroundPath"
                            quality="100"
                            width="520"
                            height="660"
                            alt=""
                        />
                        <img
                            className="client-card__logo"
                            loading="lazy"
                            :src="client.logoPath"
                            :alt="client.name + ' logo'"
                        />
                    </div>
                    <div className="client-card__body">
                        <p>Client</p>
                        <span className="h3">{ client.name }</span>
                    </div>
                </div>
            </HorizontalScrollContainer> */}
        <Image
          className="graffiti-2"
          src="/images/graffiti_2.svg"
          quality="100"
          width="379"
          height="431"
          alt=""
        />
      </section>
    </div>
  )
}
