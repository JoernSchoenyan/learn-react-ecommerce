import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider'
import DishList from '../components/DishList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>testCommerce</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider images={[
        "/img/slider/pizzadesmonats.jpg",
        "/img/slider/specialdesmonats.jpg",
        "/img/slider/nachtischdesmonats.jpg",
      ]} />
      <DishList />
    </div>
  )
}
