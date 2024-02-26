import styles from "./Card.module.css"
import Location from "./../icons/Location"

export default function Card(props) {
    const { name, model, year, distance, price, image, location } = props
    return (
        // <Link href={`/cars/${id}`}>
        <div className={styles.container}>
            <img src={image} className={styles.image} />
            <h4 className={styles.title}>{`${name} ${model}`}</h4>
            <p className={styles.detail}>{`${year} . ${distance}km`}</p>
            <div className={styles.footer}>
                <p className={styles.price}>$ {price}</p>
                <div className={styles.location}>
                    <p>{location}</p>
                    <Location />
                </div>
            </div>
        </div>
        //   </Link>
    )
}
