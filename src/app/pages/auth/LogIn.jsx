import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/auth.module.css'
import { useForm } from 'react-hook-form'
import { GoogleLogin } from '@react-oauth/google'

function LogIn() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    // TODO: send credentials to your login API
    console.log('submit', data)
    alert('Sign in submitted (stub)')
  }

  const handleGoogleSuccess = (credentialResponse) => {
    // credentialResponse contains `credential` (JWT) from Google
    // Send `credentialResponse.credential` to your backend to verify / create session.
    console.log('google credential', credentialResponse)
    alert('Google sign-in successful (stub) — check console for credential')
  }

  const handleGoogleError = () => {
    console.error('Google login failed')
    alert('Google login failed')
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>Sign in</div>
        </div>

        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />

        <div className={styles.divider}><span>or</span></div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.muted}>Email</label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              className={styles.input}
            />
            {errors.email && <div className={styles.errorText}>{errors.email.message}</div>}
          </div>

          <div className={styles.field}>
            <label className={styles.muted}>Password</label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              className={styles.input}
            />
            {errors.password && <div className={styles.errorText}>{errors.password.message}</div>}
          </div>

          <div className={styles.formActions}>
            <Link to="/forgot-password" className={styles.smallLink}>Forgot password?</Link>
            <button type="submit" className={styles.primaryBtn}>Sign in</button>
          </div>
        </form>

        <div className={styles.bottomText}>
          Don't have an account? <Link to="/signup" className={styles.smallLink}>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default LogIn
