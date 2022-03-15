import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SocialsBar from '../components/socials_bar'
import styles from '../styles/Home.module.sass'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dhzdhd</title>
        <meta name="description" content="My personal portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className={styles.landing}>
          <h1 className={styles.h1}>Hi, my name is</h1>
          <h2 className={styles.h2}>dhzdhd</h2>
          <h3 className={styles.h3}>I build multiplatform apps.</h3>
          <p className={styles.p}>I&apos;m a Data Science undergraduate student who has an interest in developing web, desktop and mobile apps using various frameworks and languages.</p>
        </section>
        <SocialsBar />
      </div>
    </>
  )
}

export default Home
