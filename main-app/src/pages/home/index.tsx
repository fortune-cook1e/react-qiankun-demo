import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (): JSX.Element => {
  const navigate = useNavigate()

  const goMiroApp = () => {
    navigate('/cdp')
  }

  return (
    <div>
      this is home <button onClick={goMiroApp}>click me</button>
    </div>
  )
}

export default Home
