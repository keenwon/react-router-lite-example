import React from 'react'

import styles from './nav.less'

type NavProps = {
  redirect: (pageName: string) => void
}

const Nav: React.FC<NavProps> = ({
  redirect
}) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="/">
          <b>react-router-lite example</b>
        </a>
      </div>

      <div className={styles.menu}>
        <a href="javascript:;" onClick={() => redirect('page-a')}>page-a</a>
        <a href="javascript:;" onClick={() => redirect('page-b')}>page-b</a>
        <a href="javascript:;" onClick={() => redirect('page-c')}>page-c</a>
      </div>
    </nav>
  )
}

export default React.memo(Nav)
