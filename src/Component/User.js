import { useEffect } from "react";

const User = ({name, location}) => {
    useEffect(() => {
        timer = setInterval(() => {
            console.log("set Interval called in use effect")
        },1000)

        return(() => {
            clearInterval(timer)
            console.log("return in use effect")
        })
    },[])
    return (
        <div className="user-card">
            <h3>{name}</h3>
            <h4>Location : {location}</h4>
            <h4>Contact : @aishwaryaa_potdar</h4>
        </div>
    )
}

export default User;