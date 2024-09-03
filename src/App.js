import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './Component/Header'
import Body from './Component/Body'
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)