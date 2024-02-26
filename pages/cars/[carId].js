import { useRouter } from "next/router"
import carsData from "../../data/carsData"
import CarDetails from "./../../Components/templates/CarDetails"

export default function CarDetail() {

    const router = useRouter()
    const { carId } = router.query
    const mainCar = carsData.find(car => car.id == carId)

    return (
        <CarDetails {...mainCar} />
    )
}
