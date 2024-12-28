import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import TreasureHuntWon from "./pages/TreasureHuntWon";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/:team-name/level-1/:id" element={<Level1 />} />
        <Route path="/:team-name/level-2/:id" element={<Level2 />} />
        <Route path="/:id/level-three/:team-name" element={<Level3 />} />
        <Route
          exact
          path="/challenge-completed"
          element={<TreasureHuntWon />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
