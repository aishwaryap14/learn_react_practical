import { useEffect, useState } from 'react';
import  {Restaurants}  from '../Utils/data'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {

let [ListOfRestaurants, setListOfRestaurants] = useState([]);
const [filterRestaurants, setFilterRestaurants] = useState([]);

let [searchText, setSearchText] = useState("");

useEffect(() => {
 fetchData();
}, [])

const fetchData = async() => {
  const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const jsonData = await data.json();
  console.log(jsonData)
  setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilterRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
} 
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
            filterRestaurants.map(restautant => <RestaurantCard key = {restautant.info.id} resData = {restautant}/>)
          }
        </div>
      </div>
    )
  }

  

  

export default Body;