import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root/Root.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';



const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    // children:[
    //  {
      
    //  }
    // ]
  }
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
