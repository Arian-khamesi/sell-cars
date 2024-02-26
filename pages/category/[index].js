import React from 'react'
import CarsPage from '../../Components/templates/CarsPage'
import { useRouter } from 'next/router'
import carsData from '../../data/carsData'
import Back from "./../../Components/icons/Back"
import styles from "./index.module.css"

export default function index() {

  const router = useRouter()
  const mainCategory = router.query.index

  const carsCategory = carsData.filter(car => car.category === mainCategory)
  const backHandler = () => {
    router.back();
  };

  return (
    <div>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <CarsPage data={carsCategory} />
    </div>
  )
}
