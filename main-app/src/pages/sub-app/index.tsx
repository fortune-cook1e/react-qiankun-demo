import React, { useEffect } from 'react'
import { start } from 'qiankun'
import { SUB_APP } from '@/micro'
import { Button } from 'antd'
import actions from '@/micro/actions'

const MicroApp = (): JSX.Element => {
  useEffect(() => {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }
  }, [])

  useEffect(() => {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log('主应用观察者：token 改变前的值为 ', prevState.token)
      console.log(
        '主应用观察者：登录状态发生改变，改变后的 token 的值为 ',
        state.token
      )
    })
  }, [])

  const changeGlobalState = () => {
    actions.setGlobalState({
      token: Math.random() * 10,
      userName: 'gaoliang31312'
    })
  }

  return (
    <div>
      this is main-app sub-app page
      <Button onClick={changeGlobalState}>change global state</Button>
      <div id='sub-app' />
    </div>
  )
}

export default MicroApp
