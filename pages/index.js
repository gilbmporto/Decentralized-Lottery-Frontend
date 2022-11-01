import Head from 'next/head'
import Image from 'next/image'
// import ManualHeader from '../components/ManualHeader'
import Header from '../components/Header'
import LotteryEntrance from '../components/LotteryEntrance'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <Head>
        <title>Gil's Decentralized Lottery</title>
        <meta name="description" content="A truly decentralized and fraud-proof raffle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
    </div>
  )
}
