import React, { useEffect } from 'react'
import { start } from 'qiankun'
import { SUB_APP } from '@/micro'

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
      this is main-app sub-app page
      <div id={SUB_APP.container.slice(1)} />
    </div>
  )
}

export default MicroApp
