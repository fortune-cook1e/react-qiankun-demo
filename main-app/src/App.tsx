import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import RouteMap from '@/routes'

const App = (): JSX.Element => {
  return (
    <ConfigProvider>
      <div>
        <h1>this is Main-App </h1>
        <Router>
          <RouteMap />
        </Router>
      </div>
    </ConfigProvider>
  )
}

export default App
