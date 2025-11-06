import React from 'react'
import styles from '@app/styles/dashboard.module.css'
import StatCard from './components/StatCard'


function DashBoard() {
  return (
    <div className={`${styles.root} container`}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.sub}>Overview of products and orders</p>
      </header>

      <section className={styles.grid}>
        <StatCard title="Total Products" value="50" accent="#3DBE29">
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Active</div>
              <div className={styles.statValue}>45</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Inactive</div>
              <div className={styles.statValue}>5</div>
            </div>
          </div>
          <div className={styles.progressWrap}>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: '90%' }} />
            </div>
            <small className={styles.progressText}>90% active</small>
          </div>
        </StatCard>

        <StatCard title="Orders" value="50" accent="#FF8A00">
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Not accepted</div>
              <div className={styles.statValue}>45</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>In progress</div>
              <div className={styles.statValue}>5</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Completed</div>
              <div className={styles.statValue}>5</div>
            </div>
          </div>
          <div className={styles.progressWrap}>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: '20%', backgroundColor: '#FF8A00' }} />
            </div>
            <small className={styles.progressText}>20% completed</small>
          </div>
        </StatCard>
      </section>
    </div>
  )
}

export default DashBoard
