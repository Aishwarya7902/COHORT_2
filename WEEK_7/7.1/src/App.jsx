// import {lazy} from "react"

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import { Suspense,lazy } from 'react';

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));



function App() {


  return (
    <div>

      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate();
  return <div >
    <button onClick={() => {
      navigate("/dashboard");
    }}>DashBoard</button>

    <button onClick={() => {
      navigate("/");
    }}>Landing</button>
  </div>
}

export default App
