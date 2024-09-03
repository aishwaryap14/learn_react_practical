import { useState } from 'react';
import  {Restaurants}  from '../Utils/data'
import RestaurantCard from './RestaurantCard';

const Body = () => {

let [ListOfRestaurants, setListOfRestaurants] = useState(Restaurants)

    return(
      <div className='body'>
        {/* <div className='search'>Search</div> */}
        <div className='filter'>
            <button className='filter-btn' onClick={() => {
              ListOfRestaurants = ListOfRestaurants.filter( res => res.info.avgRating > 4)
              setListOfRestaurants(ListOfRestaurants)
            }}>Top Reated Restaurants</button>
        </div>
        <div className='res-container'>
          {
            ListOfRestaurants.map(restautant => <RestaurantCard key = {restautant.info.id} resData = {restautant}/>)
          }
        </div>
      </div>
    )
  }

  

  

export default Body;