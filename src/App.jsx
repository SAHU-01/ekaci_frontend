import "./App.css";

import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Farmer_Register from "./pages/Farmer_Register";

function App() {
  const activeMenu = false;
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/farmer_register" element={<Farmer_Register />} />
      </Routes>
    </>
  );
}

export default App;
