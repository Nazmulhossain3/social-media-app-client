import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Media from './Pages/Media/Media.jsx';
import SinglePost from './Pages/Home/SinglePost.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import UpdateAbout from './Pages/About/UpdateAbout.jsx';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/media',
        element : <Media></Media>,

      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/signlePost/:id',
        element : <PrivateRoute><SinglePost></SinglePost></PrivateRoute>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/updateAbout/:id',
        element : <PrivateRoute><UpdateAbout></UpdateAbout></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
