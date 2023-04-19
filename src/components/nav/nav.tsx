import React from 'react'

import styles from './nav.less'

const Nav: React.FC<{}> = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <a href="/">
        <b>react-router-lite example</b>
      </a>
    </div>

    <div className={styles.menu}>
      <a href="/page-a">page-a</a>
      <a href="/page-b">page-b</a>
      <a href="/page-c">page-c</a>
    </div>
  </nav>
)

export default React.memo(Nav)
