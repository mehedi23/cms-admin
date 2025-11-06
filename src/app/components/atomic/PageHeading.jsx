import React from 'react'
import styles from '@app/styles/theme.module.css'

function PageHeading({
    title,
    subtitle
}) {
  return (
    <>
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.sub}>{subtitle}</p>
        </div>
    </>
  )
}

export default PageHeading
