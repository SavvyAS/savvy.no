import content from '@/lib/content.json'
import {Agency, Employees, Pages} from '@/lib/content.interface'
import Image from 'next/image'
import styles from './index.module.scss'
import clsx from 'clsx'
import { Button } from 'components/Button/Button'
import { Card } from 'components/Card/Card'
import Head from 'next/head'
import React, { ReactNode, useState } from 'react'
import { BaseModal } from 'components/Modals/BaseModal'
import { CvForm } from 'components/Forms/CvForm'
import ParallaxImage from '@/components/ParallaxImage/ParallaxImage'
import {GetStaticProps} from "next/types";
import {CvPartnerClientFactory} from "@/lib/cvpartner";
import {CvPartnerCv, CvPartnerUser} from "@/lib/cvpartner.interface";
import {downloadAndStoreInPublic} from "@/lib/downloadAndStoreInAssets";

export default function Page({ agency, employees }: Props) {

  const [modalContent, setModalContent] = useState<{
    content: ReactNode
    color: string
  } | null>(null)

  const getColor = (i: number) => {
    switch (i) {
      case 0:
        return 'secondary-dark'
      case 1:
        return 'primary'
      case 2:
        return 'primary-dark'
      default:
        return 'primary'
    }
  }

  const openTextModal = (text: string, color: string) => {
    const content = (
      <p className="paragraph-large" style={{ maxWidth: '60ch' }}>
        {text}
      </p>
    )
    setModalContent({ content, color })
  }

  const openSendMessageModal = () => {
    setModalContent({ content: <CvForm />, color: 'primary-dark' })
  }

  return (
    <>
      <Head>
        <title>{agency.metaTitle}</title>
      </Head>
      {modalContent && (
        <BaseModal
          isOpen={!!modalContent}
          onClose={() => setModalContent(null)}
          color={modalContent.color}
        >
          {modalContent.content}
        </BaseModal>
      )}
      <div className={clsx(styles.agency, 'container')}>
        <header>
          <div className="row">
            <h1 className={clsx(styles.agency__heading, 'column-4')}>{agency.heading}</h1>
          </div>
          <div className="row">
            <p className="column-2 paragraph-large">{agency.ingress}</p>
          </div>
        </header>
        <div className="row">
          <Image
            className={clsx(styles['graffiti-top'], 'column')}
            src="/images/graffiti.svg"
            quality="100"
            width="413"
            height="408"
            alt=""
          />
        </div>
        <div className="row">
          <p className="relative column-4">{agency.text}</p>
        </div>
        <section className="row">
          <div className="column">
            <Card
              image={
                <div className={styles['card-image-wrapper']}>
                  <Image
                    src="/images/purple-room.png"
                    alt=""
                    quality="100"
                    width="790"
                    height="628"
                  />
                </div>
              }
            >
              <div className="vertical-align-center">
                <span className="h3">{agency.guilty.heading}</span>
                <p>{agency.guilty.text}</p>
                <a href={agency.guilty.webpageUrl} style={{ width: 'auto' }}>
                  <Button>Besøk Guilty</Button>
                </a>
              </div>
            </Card>
          </div>
        </section>
        <section>
          <div className="row">
            <h2 className="column color-secondary">{agency.list.heading}</h2>
          </div>
          <ul className={styles.ul}>
            {agency.list.items.map((coreValue, index) => (
              <li className={clsx('row', styles.li)} key={coreValue.name}>
                <div className="column-4">
                  <Button
                    icon="plus"
                    size="large"
                    color={getColor(index)}
                    onClick={() => openTextModal(coreValue.modalContent, getColor(index))}
                    marginBottom
                  >
                    {coreValue.name}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.employees}>
          <h2 className="sr-only">Employees</h2>
          {employees.map((employee, index) => (
            <div className={clsx('row', styles.employees__row)} key={employee.name + index}>
              <div className={index % 2 === 0 ? 'column' : 'column-2'}>
                <Card
                  alignRight={index % 2 !== 0}
                  image={
                    <div className={styles['card-image-wrapper']}>
                      <div className={styles['card-image-container']}>
                        <Image
                          src={employee.imagePath}
                          alt=""
                          width="379"
                          height="431"
                          quality="100"
                          sizes="sm:400px md:100% lg:800px"
                          className={styles["image-actual"]}
                        />
                        { employee.overlayPath && <Image className={styles["overlay-image"]} src={employee.overlayPath} alt="" width={379} height={431} quality={100} sizes="sm:400px md:100% lg:800px" />}
                      </div>

                      {index === 1 && (
                        <div className={styles.graffiti}>
                          <Image
                            src="/images/graffiti_2.svg"
                            width="379"
                            height="431"
                            quality="100"
                            alt=""
                          />
                        </div>
                      )}
                      {index === 3 && (
                        <div className={styles.graffiti}>
                          <Image
                            src="/images/graffiti.svg"
                            quality="100"
                            width="413"
                            height="408"
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  }
                >
                  <div className="vertical-align-center">
                    <small>{employee.title}</small>
                    <h3>{employee.name}</h3>
                    <p>{employee.about}</p>
                    <a href={`mailto:${employee.email}`} className="color-primary paragraph-small">
                      {employee.email}
                    </a>
                    <Button onClick={openSendMessageModal}>Be om CV</Button>
                    {index === 1 && (
                      <div className={styles['graffiti-mobile']}>
                        <Image
                          src="/images/graffiti_2.svg"
                          quality="100"
                          width="379"
                          style={{ position: 'relative' }}

                          height="431"
                          alt=""
                        />
                      </div>
                    )}
                    {index === 3 && (
                      <div className={styles['graffiti-mobile']}>
                        <Image
                          src="/images/graffiti.svg"
                          width="413"
                          quality="100"
                          height="408"
                          style={{ position: 'relative' }}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

type Employee = {
  email: string,
  title: string,
  about: string,
  name: string,
  imagePath: string,
  overlayPath: string | null,
}

type Props = { employees: Employee[], agency: Agency };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const agency = content.pages.agency as Agency;

  const client = CvPartnerClientFactory.Create();

  const cvPartnerUsers = (await client.getUsers()).reduce(
      (current, user) => ({ ...current, [user.id]: user}),
      {} as {[key:string]: CvPartnerUser}
  );

  console.log(cvPartnerUsers);

  const employees: Employee[] = await Promise.all(agency.team.map(async employee => {
    if (!employee.cvPartnerId)
      return {...employee};

    const cvPartner = cvPartnerUsers[employee.cvPartnerId];

    if (!cvPartner)
      return {...employee};

    const cv = await client.getCv(cvPartner.id, cvPartner.default_cv_id);

    if (!cv)
      return {...employee};

    let imagePath = "/images/header-image-1.png";
    let overlayPath = null;
    if (cvPartner?.image?.url) {
      await downloadAndStoreInPublic(cvPartner.image.url,"images/from_cv_partner", `${cvPartner.id}.png`);
      overlayPath = "/images/header-image-1.png";
      imagePath = `/images/from_cv_partner/${cvPartner.id}.png`;
    }

    return {
      ...employee,
      name: cvPartner.name,
      email: cvPartner.email,
      imagePath,
      overlayPath: overlayPath
    };
  }));

  return { props: {  employees, agency }}
}
