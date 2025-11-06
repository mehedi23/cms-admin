import React from 'react'
import SideNav from './SideNav'
import {Outlet} from 'react-router-dom'
import styles from '@app/styles/layout.module.css'

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.sidenavLayout}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
