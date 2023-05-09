import React, { useState } from 'react'

import './app.less'
import Nav from '@components/nav'

import PageA from '@views/page-a'
import PageB from '@views/page-b'
import PageC from '@views/page-c'

/**
 * 入口组件
 */

const App: React.FC<{}> = () => {
  const [currentPageName, setCurrentPageName] = useState('page-a')

  return (
    <div>
      <Nav redirect={(pageName) => setCurrentPageName(pageName)} />

      {currentPageName === 'page-a' && <PageA />}
      {currentPageName === 'page-b' && <PageB />}
      {currentPageName === 'page-c' && <PageC />}
    </div>
  )
}

export default React.memo(App)
