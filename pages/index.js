import Head from 'next/head'
// components
import Landing from '../components/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>mathew de vin</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Landing/>
      </main>
    </>
  )
}
