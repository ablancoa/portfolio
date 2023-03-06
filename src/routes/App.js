import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../containers/Home';
import Portfolio from '../containers/Portfolio';
import Contact from '../containers/Contact';
import AboutMe from '../containers/AboutMe';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import '../styles/App.scss'



const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      errorElement: (<NotFound />),
      children: [
        {
          index: true,
          element: (<Home />)
        },
        {
          path: "portfolio",
          element: (<Portfolio />)
        },
        {
          path: "about",
          element: (<AboutMe />)
        },
        {
          path: "contact",
          element: (<Contact />)
        },
      ]
    },

  ]);


  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;