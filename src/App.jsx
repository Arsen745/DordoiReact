import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './router/AppRout'

const App = () => {
  const routing = useRoutes(routes)
  return (
    <div>
      {routing}
    </div>
  )
}

export default App