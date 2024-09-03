import {CDN_URL} from '../Utils/constants'

const stylecard = {
    backgroundColor : "#f0f0f0"
  }

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo} = resData?.info;
    const {deliveryTime} = resData.info.sla;
    return(
      <div className='res-card' style={stylecard}>
        <img className='res-logo' alt='res-logo' src = {CDN_URL + resData.info.cloudinaryImageId}/>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} minutes</h5>
      </div>
    )
  }

  export default RestaurantCard;