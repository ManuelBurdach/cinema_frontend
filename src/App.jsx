import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Seats from "./components/seats/seats";
import Admin from "./components/admin/admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/" element={<Seats />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
