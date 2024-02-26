import styles from "./index.module.css"
import CarsPage from "../Components/templates/CarsPage"
import carsData from "../data/carsData"
import Category from "../Components/modules/Category"
import Sedan from "./../Components/icons/Sedan"
import Suv from "./../Components/icons/Suv"
import Hatchback from "./../Components/icons/Sedan"
import Sport from "./../Components/icons/Sport"
import Link from "next/link"
import SearchBar from "./../Components/modules/SearchBar"
import { useRouter } from "next/router"



export default function Home() {

  const router = useRouter()



  return (
    <div className={styles.container}>
      <div className={styles.search}><SearchBar /></div>
      <div className={styles.categories}>
        <Link href={`/category/sedan`}><Category title={"Sedan"} icon={<Sedan />} /></Link>
        <Link href={`/category/hatchback`}><Category title={"Hatchback"} icon={<Hatchback />} /></Link>
        <Link href={`/category/suv`}><Category title={"Suv"} icon={<Suv />} /></Link>
        <Link href={`/category/sport`}><Category title={"Sport"} icon={<Sport />} /></Link>
      </div>
      <Link href={"/cars"} className={styles.seeBtn}>See All</Link>
      <CarsPage data={carsData.slice(0, 3)} />
    </div>
  )
}
