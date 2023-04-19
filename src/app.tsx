import React from 'react'

import PageA from '@views/page-a'
import PageB from '@views/page-b'
import PageC from '@views/page-c'

/**
 * 入口组件
 */

const App: React.FC<{}> = () => {
  return (
    <div>
      <h2>react-router-lite example</h2>
      <PageA />
      <PageB />
      <PageC />
    </div>
  )
}

export default React.memo(App)
