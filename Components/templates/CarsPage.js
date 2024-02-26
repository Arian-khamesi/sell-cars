import Card from "../modules/Card"
import styles from "./CarsPage.module.css"

export default function CarsPage({ data }) {
    return (
        <div className={styles.container}>
            {
                data.map(carItem => (
                    <Card key={carItem.id} {...carItem} />
                ))
            }
        </div>
    )
}
