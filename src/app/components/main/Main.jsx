import React from 'react';
import styles from './main.module.css'
import Board from './board/Board';
import SideMenu from './menu/SideMenu';

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <SideMenu>
        Side Menu
      </SideMenu>
      <Board>
        Board
      </Board>
    </main>
  )
}

export default Main