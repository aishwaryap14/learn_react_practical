import User from './User'
import UserClass from './UserClass'
import React  from 'react'
class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("parent constructor")
    }

    componentDidMount() {
        // console.log("parent componentDidMount")
    }

    render(){
        // console.log("parent render")
        return(
            <div>
                <h1>About Us</h1>
                <User name = {"Aishwarya P"} location={ "Bangalore"}/>
                {/* <UserClass name = {"First"} location = {"Nashik, Maharashtra"}/> */}
            </div>
        )
    }
}



export default About;