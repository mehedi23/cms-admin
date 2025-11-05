import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/layout.module.css'

// MUI icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import StorefrontIcon from '@mui/icons-material/Storefront'
import SettingsIcon from '@mui/icons-material/Settings'

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
  { key: 'order', label: 'Orders', icon: ReceiptLongIcon },
  { key: 'product', label: 'Products', icon: Inventory2Icon },
  { key: 'shop', label: 'Shop', icon: StorefrontIcon },
  { key: 'settings', label: 'Settings', icon: SettingsIcon },
]

function SideNav() {
  const location = useLocation()

  return (
    <nav className={styles.sidenav}>
      <div className={styles.logoWrap}>
        <div className={styles.logoBox}>CH</div>
        <div className={styles.brand}>Web Hoster</div>
      </div>

      <ul className={styles.navList}>
        {navItems.map((item) => {
          const to = `/${item.key}`
          const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`)

          return (
            <li
              key={item.key}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <Link to={to} className={styles.navLink}>
                <span className={styles.icon} aria-hidden>
                  {React.createElement(item.icon, { fontSize: 'small' })}
                </span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SideNav
