import React from 'react'
import styles from '../main.module.css'

const Board = ({children}) => {
  return (
    <section className={styles.boardContainer}>
      {children}
    </section>
  )
}

export default Board
