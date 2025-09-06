import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/dashboard.jsx"
import Setting from "./pages/setting.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem",color:"red" }}>
        <Link to="/"><h1>Dashboard</h1></Link>
        <Link to="/setting">Setting</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App




