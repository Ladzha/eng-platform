import React from 'react'
import styles from '../main.module.css'


const SideMenu = ({children}) => {
  return (
    <aside className={styles.sideMenuContainer}>
      {children}
    </aside>
  )
}

export default SideMenu