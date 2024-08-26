import React from 'react'
import ReactDOM  from 'react-dom/client'
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
  console.log(props)
  
  return(
    <div className='res-card' style={stylecard}>
      <img className='res-logo' alt='res-logo' src = {props.imgLink}/>
      <h3>{props.resName}</h3>
      <h5>{props.cuisin}</h5>
      <h5>{props.rating}</h5>
      <h5>{props.deliveryTime}</h5>
    </div>
  )
}

const Body = () => {
  return(
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard resName = 'Meghana Foods' cuisin = 'Biryani, North Indian, Asian' rating = '4.3 stars' deliveryTime = '38 Minutes' imgLink = 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Instant-Pot-Paneer-Biryani-500x500.jpg'/>
        <RestaurantCard resName = 'KFC' cuisin = 'chicken nugg, burger' rating = '4.0 stars' deliveryTime = '40 minutes' imgLink = 'https://content.jdmagicbox.com/v2/comp/mumbai/m1/022pxx22.xx22.200829100417.u5m1/catalogue/kfc-mumbai-fast-food-1gtb5g7j7r.jpg'/>
        <RestaurantCard resName = 'Diminos' cuisin = 'pizza, slides, clod drink' rating = '4.4 stars' deliveryTime = '30 minutes' imgLink = 'https://www.jubilantfoodworks.com/images/brand_pic3.jpg'/>
        <RestaurantCard resName = 'Good Bowl' cuisin = 'Biryani, rice bowls' rating = '4.1 stars' deliveryTime = '20 minutes' imgLink = 'https://b.zmtcdn.com/data/pictures/chains/6/18884536/a47e79a5630151521ab801b4bafbb1f4.jpg?fit=around|750:500&crop=750:500;*,*'/>
        <RestaurantCard resName = 'cakes mania' cuisin = 'cakes, pastries' rating = '4.0 stars' deliveryTime = '30 minutes' imgLink = 'https://tfcakes.in/images/products/230202_121618_424_398.jpg'/>
        <RestaurantCard resName = 'Burger king' cuisin = 'Burger, soft drink' rating = '4.3 stars' deliveryTime = '25 minutes' imgLink = 'https://www.bristolairport.co.uk/media/zrccwpo3/burger-king-og-1200-x-630.jpg'/>
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