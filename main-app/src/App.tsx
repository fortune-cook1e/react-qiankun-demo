import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import RouteMap from '@/routes'

const App = (): JSX.Element => {
  return (
    <div>
      <div>tihs is app</div>
      <Router>
        <RouteMap />
      </Router>
    </div>
  )
}

export default App
