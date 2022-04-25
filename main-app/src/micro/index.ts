import { registerMicroApps, start } from 'qiankun'
import shared from './shared'

interface MicroApp {
  name: string
  entry: string
  container: string
  activeRule: string
  props: any
}

export const SUB_APP: MicroApp = {
  name: 'sub-app',
  entry: '//localhost:8088',
  container: '#sub-app',
  activeRule: '/sub-app',
  props: { shared }
}

export const MIRCO_APPS: MicroApp[] = [SUB_APP]

export const startMicroApps = (): void => {
  registerMicroApps(MIRCO_APPS)
  start()
}
