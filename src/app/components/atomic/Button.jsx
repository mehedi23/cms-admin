import React from 'react';
import Button from '@mui/material/Button';
import styles from './atomic.module.css';


export function PrimaryButton({ children, ...props }) {
  return (
    <Button
        className={styles.primaryButton}
        variant="contained"
        color="primary"
        size="small"
        {...props}
    >
        {children}
    </Button>
  )
}

export function SecondaryButton({ children, ...props }) {
  return (
    <Button
        className={styles.secondaryButton}
        variant="outlined"
        color="secondary"
        size="small"
        {...props}
    >
        {children}
    </Button>
  )
}