import { useState } from 'react'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route
          path="/:team-name/login"
          element={<Login />}
        />
      </Routes>
    </>
  )
}

export default App
