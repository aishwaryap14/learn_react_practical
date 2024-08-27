import React from 'react'
import ReactDOM  from 'react-dom/client'
import { Restaurants } from './data'
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

const stylecard = {
  backgroundColor : "#f0f0f0"
}

const Header = () => {
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://res.cloudinary.com/dmabeivkl/image/upload/w_800,fl_lossy,f_auto/v1599564390/main-image/uyhji8rlbiqjmphel3k2.png'/>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  console.log(Restaurants)
  const {resData} = props
  const {name, cuisines, avgRating, costForTwo} = resData?.info;
  const {deliveryTime} = resData.info.sla;
  return(
    <div className='res-card' style={stylecard}>
      <img className='res-logo' alt='res-logo' src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  )
}

const Body = () => {
  return(
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {/* <RestaurantCard resData = {Restaurants[0]}/> */}
        {
          Restaurants.map(restautant => <RestaurantCard resData = {restautant}/>)
        }
      </div>
    </div>
  )
}

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