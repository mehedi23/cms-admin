import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/auth.module.css'

function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: call API to send reset email
    alert('Password reset email requested (stub)')
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>Reset password</div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.muted}>Email</label>
            <input name="email" type="email" required className={styles.input} />
          </div>

          <button type="submit" className={styles.primaryBtn}>Send reset email</button>
        </form>

        <div className={styles.bottomText}>
          Remembered? <Link to="/login" className={styles.smallLink}>Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
