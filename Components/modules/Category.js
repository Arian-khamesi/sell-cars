import React from 'react'
import  styles from "./Category.module.css"

function Category({title,icon}) {
  return (
    <div className={styles.container}>
        <p>{title}</p>
        {icon}
    </div>
  )
}

export default Category