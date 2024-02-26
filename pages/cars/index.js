import CarsPage from "../../Components/templates/CarsPage"
import carsData from "../../data/carsData"

export default function index() {
  return (
    <div>
        <CarsPage data={carsData}/>
    </div>
  )
}
