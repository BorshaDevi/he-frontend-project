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
     }
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
