import React, { useEffect, Suspense } from 'react'
import { Spin } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterElement from './routes'
import config from './utils/config'

const App: React.FC = () => {
	useEffect(() => {
		// do sth
	}, [])

	return <RouterElement />
}

export default App
