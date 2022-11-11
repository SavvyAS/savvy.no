import { Pages } from '@/lib/content.interface'
import content from '@/lib/content.json'
import Image from 'next/image'
import clsx from 'clsx'
import { AnimatedHeading } from 'components/AnimatedHeading/AnimatedHeading'
import Link from 'next/link'
import { Button } from 'components/Button/Button'
import { HalfImage } from 'components/HalfImage/HalfImage'
import { HorizontalScrollContainer } from 'components/HorizontalScrollContainer/HorizontalScrollContainer'
import { CvPartnerClient } from '@/lib/cvpartner'
import { GetStaticProps } from 'next/types'

type Props = { skills: string[] }

export default function Index({ skills }: Props) {
  const { home } = content.pages as Pages

  const competenceString = skills.map((x) => x + ' // ').join('')

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
                  <Button>Selskapet</Button>
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
        <h2 className="sr-only">Kunder</h2>
        <HorizontalScrollContainer>
          {home.clients.map((client, index) => (
            <div
              key={client.name}
              className={clsx('client-card', index % 2 !== 0 && 'client-card--reverse')}
            >
              <div className="client-card__figure">
                <Image
                  className="client-card__background"
                  src={client.backgroundPath}
                  quality="100"
                  width="520"
                  height="660"
                  alt={client.name}
                />
                <Image
                  className="client-card__logo"
                  src={client.logoPath}
                  width="520"
                  height="660"
                  alt={client.name + ' logo'}
                />
              </div>
              <div className="client-card__body">
                <p>Kunde</p>
                <span className="h3">{client.name}</span>
              </div>
            </div>
          ))}
        </HorizontalScrollContainer>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new CvPartnerClient()

  const users = await client.getUsers()

  let skills = new Array<string>()

  for (const user of users) {
    const cv = await client.getCv(user.id, user.default_cv_id)

    const userSkills = cv.technologies
      .flatMap((technology) => technology.technology_skills)
      .flatMap((skill) => skill?.tags?.no)
      .filter((skill) => !!skill) as string[]

    skills = [...skills, ...userSkills]
  }

  const uniqueSkills = new Set(skills)

  /* The marquee's speed is relative to the width of its content.
   * This means that if we add a lot of content it starts moving too fast for anyone to read it.
   * As a workaround we draw a maximum of 30 skills for now.
   *
   * TODO:The long term solution is to make the marquee's speed independent of its width.
   */

  const selectedSkills = Array.from(uniqueSkills)
    .sort((_) => Math.random())
    .slice(0, 30)

  return {
    props: {
      skills: selectedSkills
    }
  }
}
