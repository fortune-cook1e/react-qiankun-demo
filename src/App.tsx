import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import RouteMap from '@/routes'

const App = (): JSX.Element => {
  return (
    <Router>
      <RouteMap />
    </Router>
  )
}

export default App
