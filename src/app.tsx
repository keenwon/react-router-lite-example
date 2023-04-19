import React from 'react'

import './app.less'
import Nav from '@components/nav'

import PageA from '@views/page-a'
import PageB from '@views/page-b'
import PageC from '@views/page-c'

/**
 * 入口组件
 */

const App: React.FC<{}> = () => {
  return (
    <div>
      <Nav />
      <PageA />
      <PageB />
      <PageC />
    </div>
  )
}

export default React.memo(App)
