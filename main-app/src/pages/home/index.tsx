import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const Home = (): JSX.Element => {
  const navigate = useNavigate()

  const [state, setState] = React.useState({ count: 0 })

  const goMicroApp = () => {
    navigate('/sub-app')
  }

  const goMicroApp2 = () => {
    navigate('/subv2-app')
  }

  return (
    <div>
      <h1>this is home</h1>

      <Button onClick={goMicroApp}>go sub-app page</Button>
      <Button onClick={goMicroApp2}>go to subv2-app page</Button>
    </div>
  )
}

export default Home
