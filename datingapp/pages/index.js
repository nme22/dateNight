import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>DateNight | Home</title>
        <meta name="keywords" content="DateNight"/>
      </Head>
      <div>
        <h1 className={styles.title}>"Where Moments Become Memories" </h1>
        <p className={styles.text}> Don't Pencilvester your memories, remember the barbaque. Plan out your dates, send an invitation, and record your experience! </p>
        <Link href="/About">
          <a className={styles.btn}>About DateNight</a>
        </Link>
      
      </div>
  </>
  )
}
