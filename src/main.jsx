import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='todo-app' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
