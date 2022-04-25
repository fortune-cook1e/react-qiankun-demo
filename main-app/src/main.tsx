import React from 'react'
import App from './App'
import { render } from 'react-dom'
import '@/styles/base.less'

import { startMicroApps } from '@/micro'

const rootElement = document.getElementById('root')

render(<App />, rootElement)

startMicroApps()
