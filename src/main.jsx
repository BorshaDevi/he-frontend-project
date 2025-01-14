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
import UpdateMenu from './Pages/UpdateMenu/UpdateMenu.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


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
     {
      path:'/updateMenu',
      Component:UpdateMenu,
     },
    ]
  }
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
