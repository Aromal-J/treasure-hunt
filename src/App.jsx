import { useState } from 'react'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/team-name/level-1/:id"
          element={<Login />}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
