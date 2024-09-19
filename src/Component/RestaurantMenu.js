import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {MENU_CDN_URL, MENU_API} from '../Utils/constants';
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([]);
    
    const {resId} = useParams();
    

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        console.log("jsonData-", jsonData);
        setResInfo(jsonData.data)
    }

    if (resInfo.length == 0) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    let itmCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.map(i => i.card.card.itemCards).filter(i => i !== undefined);
    console.log("a-",itmCard)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ") } - {costForTwoMessage}</p>
            <h1>Menu</h1>
            <hr></hr>
            <div >
                <h3 className="menu-details">{itmCard[0].map(item => 
                    <div className="menu-card" key = {item.card.info.id}>
                        <li >{item.card.info.name} - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100} </li>
                        <img className = "menu-img" src={MENU_CDN_URL + item.card.info.imageId}/>
                    </div>
                )}</h3>
            </div>
        </div>
    )
};

export default RestaurantMenu;