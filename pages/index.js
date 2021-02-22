import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Kojo's Blog Corner <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}