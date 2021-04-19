import '../styles/globals.scss'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Background from "../components/Background";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Layout>
        <Header/>
        <Component {...pageProps} />
      </Layout>
      <Background/>
    </>
  )
}

export default MyApp
