import { useEffect, useState } from 'react';
import {RES_LIST_API} from '../Utils/constants'

const useRestaurantList = () => {

const [ListOfRestaurants, setListOfRestaurants] = useState([]);
const [filterRestaurants, setFilterRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
       }, [])

    const fetchData = async() => {
        const data = await fetch(RES_LIST_API);
        const jsonData = await data.json();
        console.log(jsonData)
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }

    return ListOfRestaurants, filterRestaurants;
}

export default useRestaurantList;