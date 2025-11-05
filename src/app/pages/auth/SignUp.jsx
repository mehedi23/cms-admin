import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/auth.module.css'
import { useForm } from 'react-hook-form'
import { GoogleLogin } from '@react-oauth/google'

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('signup', data)
    alert('Sign-up submitted (stub)')
  }

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('google credential', credentialResponse)
    alert('Google sign-up successful (stub) — check console for credential')
  }

  const handleGoogleError = () => {
    console.error('Google signup failed')
    alert('Google signup failed')
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>Create account</div>
        </div>

        <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />

        <div className={styles.divider}><span>or</span></div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.muted}>Email</label>
            <input {...register('email', { required: 'Email is required' })} type="email" className={styles.input} />
            {errors.email && <div className={styles.errorText}>{errors.email.message}</div>}
          </div>

          <div className={styles.field}>
            <label className={styles.muted}>Password</label>
            <input {...register('password', { required: 'Password is required' })} type="password" className={styles.input} />
            {errors.password && <div className={styles.errorText}>{errors.password.message}</div>}
          </div>

          <button type="submit" className={styles.primaryBtn}>Sign up</button>
        </form>

        <div className={styles.bottomText}>
          Already have an account? <Link to="/signin" className={styles.smallLink}>Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
