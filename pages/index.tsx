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
        <SocialsBar />
        <section className={styles.landing}>
          <span>Hi, my name is</span>
          <h1>dhzdhd</h1>
          <h2>I build multiplatform apps</h2>
        </section>
      </div>
    </>
  )
}

export default Home
