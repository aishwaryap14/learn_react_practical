import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurantList from '../Utils/useRestaurantList';
import useOnlineStatus from '../Utils/useOnlineStatus';

const Body = () => {

let [searchText, setSearchText] = useState("");

const ListOfRestaurants = useRestaurantList();
const filterRestaurants = useRestaurantList();

const onlineStatus = useOnlineStatus();

if (onlineStatus == false) 
return (
  <h1>
    Looks like something went wrong!! Please check your internet connection
  </h1>
)
 
//conditional rendering
    return (ListOfRestaurants.length == 0) ? <Shimmer/> : (
      <div className='body'>
        <div className='filter'>
        <div className='search'>
          <input type='text' className='search-box' 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value)
            }}/>
          <button onClick={() => {
            let filterRestaurants = ListOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            console.log(filterRestaurants)
            setFilterRestaurants(filterRestaurants)
          }}>Search</button>
        </div>
            <button className='filter-btn' onClick={() => {
              ListOfRestaurants = ListOfRestaurants.filter( res => res.info.avgRating > 4)
              setListOfRestaurants(ListOfRestaurants)
            }}>Top Reated Restaurants</button>
        </div>
        <div className='res-container'>
          {
            filterRestaurants.map(restautant => 
              <Link className='link' key = {restautant.info.id} to={"restaurant/" + restautant.info.id}><RestaurantCard  resData = {restautant}/></Link>)
          }
        </div>
      </div>
    )
  }

  

  

export default Body;