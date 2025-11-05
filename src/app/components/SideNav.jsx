import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/layout.module.css'

// MUI icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import StorefrontIcon from '@mui/icons-material/Storefront'
import SettingsIcon from '@mui/icons-material/Settings'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

// nav structure
const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: DashboardIcon, to: '/dashboard' },
  // product navigation
  {
    key: 'product',
    label: 'Products',
    icon: Inventory2Icon,
    children: [
      { key: 'product-list', label: 'Product List', to: '/product/list' },
      { key: 'product-add', label: 'Add Product', to: '/product/add' },
      { key: 'product-categories', label: 'Categories', to: '/product/categories' },
    ],
  },
  { key: 'shop', label: 'Shop', icon: StorefrontIcon, to: '/shop' },
  { key: 'orders', label: 'Orders', icon: StorefrontIcon, to: '/orders' },
  { key: 'settings', label: 'Settings', icon: SettingsIcon, to: '/settings' },
]

function SideNav() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [openParents, setOpenParents] = useState({})
  const itemRefs = React.useRef({})

  const toggleCollapsed = () => setCollapsed((s) => !s)

  const toggleParent = (key) => {
    setOpenParents((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleParentClick = (e, item) => {
    if (item.children) {
      // when parent has children, clicking should toggle dropdown (not navigate)
      e.preventDefault()
      toggleParent(item.key)
    }
    // otherwise Link will navigate normally
  }

  return (
    <nav className={`${styles.sidenav} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoWrap}>
        <div className={styles.logoBox}>CH</div>
        <div className={styles.brand}>Web Hoster</div>

        <button
          aria-label="Toggle sidebar"
          className={styles.hamburger}
          onClick={toggleCollapsed}
        >
          <MenuIcon fontSize="small" />
        </button>
      </div>

      <ul className={styles.navList}>
        {navItems.map((item) => {
          const isActive =
            (item.to && (location.pathname === item.to || location.pathname.startsWith(`${item.to}/`))) ||
            (item.children && item.children.some((c) => location.pathname.startsWith(c.to)))

          return (
            <li
              key={item.key}
              ref={(el) => (itemRefs.current[item.key] = el)}
              className={`${styles.navItem} ${isActive ? styles.active : ''} ${openParents[item.key] ? styles.openParent : ''}`}
            >
              <Link to={item.to || '#'} className={styles.navLink} onClick={(e) => handleParentClick(e, item)}>
                <span className={styles.icon} aria-hidden>
                  {React.createElement(item.icon, { fontSize: 'small' })}
                </span>
                <span className={styles.label}>{item.label}</span>
                {item.children ? (
                  <span className={styles.expandIcon} aria-hidden>
                    {openParents[item.key] ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                  </span>
                ) : null}
              </Link>

              {item.children ? (
                <ul
                  className={`${styles.childList} ${openParents[item.key] ? styles.open : ''} ${collapsed ? styles.childCollapsed : ''}`}
                  style={
                    collapsed && openParents[item.key]
                      ? { top: itemRefs.current[item.key]?.offsetTop ? `${itemRefs.current[item.key].offsetTop}px` : undefined }
                      : undefined
                  }
                >
                  {item.children.map((child) => {
                    const childIsActive =
                      child.to && (location.pathname === child.to || location.pathname.startsWith(`${child.to}/`))

                    return (
                      <li key={child.key} className={`${styles.childItem} ${childIsActive ? styles.active : ''}`}>
                        <Link to={child.to} className={styles.childLink}>
                          <span className={styles.childLabel}>{child.label}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SideNav
