import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider'
import DishList from '../components/DishList'
import getProducts from '../util/getProducts'

export default function Home( {dishList} ) {
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
      <DishList dishList={dishList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      dishList: JSON.parse(JSON.stringify(await getProducts()))
    }
  }
}