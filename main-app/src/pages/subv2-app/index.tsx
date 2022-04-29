import React, { useEffect } from 'react'
import { start } from 'qiankun'
import { SUBV2_APP } from '@/micro'

const MicroApp = (): JSX.Element => {
  useEffect(() => {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }
  }, [])

  useEffect(() => {}, [])

  return (
    <div>
      this is main-app subv2-app page
      <div id={SUBV2_APP.container.slice(1)} />
    </div>
  )
}

export default MicroApp
