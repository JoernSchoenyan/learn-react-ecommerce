import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider'
import DishList from '../components/DishList'
import axios from "axios";

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
  const res = await axios.get("http://localhost:3000/api/products");
  console.log(res);

  return {
    props: {
      dishList: res.data
    }
  }
}