import React, { useEffect } from 'react'
import { start } from 'qiankun'

const MicroApp = (): JSX.Element => {
  useEffect(() => {
    if (!(window as any).qiankunStarted) {
      ;(window as any).qiankunStarted = true
      start()
    }
  }, [])

  return (
    <div>
      this is mirco-app
      <div id='cdp-container' style={{ height: '500px' }} />
    </div>
  )
}

export default MicroApp
