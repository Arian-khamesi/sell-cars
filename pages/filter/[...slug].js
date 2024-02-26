import { useRouter } from 'next/router'
import React from 'react'
import carsData from '../../data/carsData'
import Card from '../../Components/modules/Card';
import styles from "./slug.module.css"
import Back from "./../../Components/icons/Back"

export default function FilteredCars() {

    const router = useRouter()
    console.log((router.query.slug));
    const [min, max] = router.query.slug || []

    const fiterCars = carsData.filter(car => car.price > Number(min) && car.price < Number(max))
    const backHandler = () => {
        router.back();
    };
    console.log(fiterCars);

    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <Back />
                <p>back</p>
            </div>
            {
                fiterCars.length ?
                    <>
                        {
                            fiterCars.map(car => <Card {...car} />)
                        }
                    </> : <> <h1>No machines were found in this price range</h1></>
            }
        </div>
    )
}
