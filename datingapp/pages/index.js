import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Where moments become memories</h1>
      <Link href="/About">
        <a>About DateNight</a>
      </Link>
     
    </div>
    
  )
}
