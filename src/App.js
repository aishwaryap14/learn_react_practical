import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './Component/Header'
import Body from './Component/Body'
import About from './Component/About'
import Contact from './Component/Contact'
import Error from './Component/Error'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
/*
* Header
  - LOGO
  - NavItems
* Body
  - Search
  - RestaurantComponent
  - RestaurantCard
    - img
    - name of restaurant
    - star ratings
    - cuisin
    - delivery time
* Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

const AppLayout = () => {
  return(
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/> ,
    errorElement : <Error/>
  },
  {
    path : "/about",
    element : <About/>
  },
  {
    path : "/contact",
    element : <Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)