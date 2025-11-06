import styles from '@app/styles/dashboard.module.css'

function StatCard({ title, value, children, accent }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} style={{ borderLeft: `6px solid ${accent || '#5b8def'}` }}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardValue}>{value}</div>
      </div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  )
}

export default StatCard