import { registerMicroApps, start } from 'qiankun'
import SharedInstance, { Shared } from './shared'

interface MicroApp {
  name: string
  entry: string
  container: string
  activeRule: string
  props: {
    shared: Shared
  }
}

export const SUB_APP: MicroApp = {
  name: 'sub-app',
  entry: '//localhost:8088',
  container: '#sub-app',
  activeRule: '/sub-app',
  props: { shared: SharedInstance }
}

export const SUBV2_APP: MicroApp = {
  name: 'subv2-app',
  entry: '//localhost:8089',
  container: '#subv2-app',
  activeRule: '/subv2-app',
  props: {
    shared: SharedInstance
  }
}

export const MIRCO_APPS: MicroApp[] = [SUB_APP, SUBV2_APP]

export const startMicroApps = (): void => {
  registerMicroApps(MIRCO_APPS)
  start()
}
