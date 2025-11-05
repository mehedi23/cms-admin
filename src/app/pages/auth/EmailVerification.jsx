import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/auth.module.css'

function EmailVerification() {
  const handleResend = () => {
    // TODO: call API to resend verification email
    alert('Verification email resent (stub)')
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>Email verification</div>
        </div>

        <p className={styles.muted}>
          Thanks for signing up. We sent a verification link to your email. Click the link in that email to verify your account.
        </p>

        <div className={styles.resendRow}>
          <button onClick={handleResend} className={styles.primaryBtn}>Resend verification email</button>
          <Link to="/login" className={`${styles.smallLink} ${styles.resendLink}`}>Back to sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default EmailVerification
