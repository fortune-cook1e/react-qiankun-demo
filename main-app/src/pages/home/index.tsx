import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const Home = (): JSX.Element => {
  const navigate = useNavigate()

  const [state, setState] = React.useState({ count: 0 })

  const goMiroApp = () => {
    navigate('/sub-app')
  }

  return (
    <div>
      <h1>this is home</h1>

      <Button onClick={goMiroApp}>go sub-app page</Button>
    </div>
  )
}

export default Home
