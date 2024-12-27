import { useState } from 'react'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import TreasureHuntWon from './pages/TreasureHuntWon'
import Level1 from './pages/Level1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={<Login />}
        />
        <Route
          path="/:team-name/level-1/:id"
          element={<Level1 />}
        />
        <Route
          exact
          path="/won"
          element={<TreasureHuntWon />}
        />
      </Routes>
    </>
  )
}

export default App
