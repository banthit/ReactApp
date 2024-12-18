import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Login from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path= "" index element = {<Login/>}/>
        <Route path= "Dashboard" element = {<Dashboard />}/>
    </Routes>

  </BrowserRouter>
 
);
