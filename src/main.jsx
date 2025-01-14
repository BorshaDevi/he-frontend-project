import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root/Root.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Login from "./Login/Login.jsx"
import Register from "./Register/Register.jsx"
import Menu from './Pages/Menu/Menu.jsx'
import Orders from "./Pages/Orders/Orders.jsx"
import AddMenu from './Pages/AddMenu/AddMenu.jsx';



const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
     {
      path:'/login',
      Component:Login,
     },
     {
      path:'/register',
      Component:Register,
     },
     {
      path:'/menu',
      Component:Menu,

     },
     {
      path:'/orders',
      Component:Orders
     },
     {
      path:'/addMenu',
      Component:AddMenu,
     },
    ]
  }
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
