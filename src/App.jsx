import "./App.css";

import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  const activeMenu = false;
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
