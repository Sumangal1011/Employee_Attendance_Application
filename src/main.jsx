import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from "../Layout.jsx"
import Home from "../src/Components/Home-Screen/Home.jsx"
import Dashboard from "../src/Components/Home-Screen/Dashboard.jsx"
import Attendance from "../src/Components/Home-Screen/Attendance.jsx"
import Employees from "../src/Components/Home-Screen/Employees.jsx"
import Report from "../src/Components/Home-Screen/Report.jsx"
import Settings from "../src/Components/Home-Screen/Settings.jsx"
import Login from "../src/Components/Home-Screen/Login.jsx"
import Admin_Login from './Components/Admin/Admin_Login.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='Attendance' element={<Attendance/>}/>
      <Route path='Employees' element={<Employees/>}/>
      <Route path='Report' element={<Report/>}/>
      <Route path='Settings' element={<Settings/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Admin_Login' element={<Admin_Login/>}/>

      

    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
