import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {


  return (
    <>
       <div >
         <button onClick={()=>{
            window.location.href="/dashboard";
         }}>DashBoard</button>

         <button onClick={()=>{
             window.location.href="/";
         }}>Landing</button>
       </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
