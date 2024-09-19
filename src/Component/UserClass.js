import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            count : 0
        }
        console.log(this.props.name + "child component contructor")
    }

    componentDidMount(){
        console.log(this.props.name + " child component componentDidMount")
    }
render() {
    console.log(this.props.name + "child component render")
    const {name, location} = this.props;
    const {count} = this.state;
    return(
        <div className="user-card">
            <h2>count : {count}</h2>
            <button onClick={()=>{
                this.setState({
                    count : count + 1
                })
            }}>Count Increment</button>
            <h3>{name}</h3>
            <h4>Location : {location}</h4>
            <h4>Contact : 7666742942</h4>
        </div>
    )
}
}

export default UserClass;