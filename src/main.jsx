import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import MainLayout from './MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)