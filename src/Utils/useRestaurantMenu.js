import { useEffect, useState } from "react";
import {MENU_API} from '../Utils/constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        console.log("jsonData-", jsonData);
        setResInfo(jsonData.data);
    }

    return resInfo;

}

export default useRestaurantMenu;