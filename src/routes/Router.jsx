import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/services',
          element: <Services></Services>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/signin',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        }
      ]
    },
  ]);


export default router;