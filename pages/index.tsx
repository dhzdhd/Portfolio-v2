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
        <div className={styles.landing}>

        </div>
      </div>
    </>
  )
}

export default Home
