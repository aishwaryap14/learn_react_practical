import React from "react";
import { GITHUB_API } from "../Utils/constants";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInfo:{
                name : "Dummy",
                location : "Default"
            }
        }
        console.log(this.props.name + "child component contructor")
    }

    async componentDidMount(){
        console.log(this.props.name + " child component componentDidMount")
        const data = await fetch(GITHUB_API);
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        console.log(json)
    }

    componentDidUpdate() {
        this.timer = setInterval(() => {
            console.log("setInterval called")
        },1000)
        console.log("component is update - componentDidUpdate")
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log(" component will unmount")
    }

render() {
    console.log(this.props.name + "child component render")
   const {name, location, login, bio, avatar_url} = this.state.userInfo
    
    return(
        <div className="user-card">
            <div>
                <img className="avatar-img" src={avatar_url}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{bio}</p>
                <h4>Location : {location}</h4>
                <h4>Id : {login}</h4>
                <h4>Contact : 7666742942</h4>
            </div>
        </div>
    )
}
}

export default UserClass;