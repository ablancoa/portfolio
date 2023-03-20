import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import AboutMe from '../pages/AboutMe';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Modal from '../containers/modal/Modal';
import AppContext from '../context/AppContext';
import useInitialState from '../context/useInitialState';
import '../styles/App.scss'



const App = () => {
  const helmetContext = {}
  const initialState = useInitialState()

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
    <HelmetProvider context={helmetContext}>
      <div className='App'>
        <AppContext.Provider value={initialState} >
          <RouterProvider router={router} />
          <Modal />
        </AppContext.Provider>
      </div>
    </HelmetProvider>
  )
}

export default App;