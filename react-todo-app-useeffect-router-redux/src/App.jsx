import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Todos from "./pages/Todos"
import "./App.css"

function App () {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/todos">Todos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
