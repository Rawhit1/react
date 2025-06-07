import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

/**
* @author
* @function 
**/

export const  Layout = (props) => {
  return(
    <>
    <Header />
    {/* //outlet is used to render the child components of the current route
    //it is used to render the components that are nested inside the current route */}
     <Outlet />
    <Footer />
    </>
   )
  }
