import { registerMicroApps, start } from 'qiankun'

interface MicroApp {
  name: string
  entry: string
  container: string
  activeRule: string
}

export const CDP_WEB_SELECTOR = '#cdp-container'

export const MIRCO_APPS: MicroApp[] = [
  {
    name: 'cdp-web',
    entry: '//localhost:8080',
    container: CDP_WEB_SELECTOR,
    activeRule: '/cdp'
  }
]

export const startMicroApps = (): void => {
  registerMicroApps(MIRCO_APPS)
  start()
}
