import styles from "./CarsPage.module.css"

export default function CarsPage({data}) {
  return (
    <div className={styles.container}>
{
data.map(carItem=>(
    <p key={carItem.id}>{carItem.name}</p>
))
}
    </div>
  )
}
