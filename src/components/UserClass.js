import React from "react";
import UserContext from "../Utils/UserContext";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        
        this.state = {
            count: 1,
            userInfo: {
                name: "Yash",
                location: "Hyderabad"
            }
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo: json,
        });
    }

    render(){
        const {name, location} = this.state.userInfo
        const{count} = this.state
        return (
            <div className="user-card">
              <h3>Name: {name}</h3>
              <h4>Location: {location}</h4>
              <h4>Count: {count}</h4>
              <button onClick={
                () => {
                    // never update state variables direclty
                    this.setState({
                        count: this.state.count + 1,
                    })
                }
              }>Count Increase</button>
              <div>
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="font-bold">User: {loggedInUser}</h1>}
                </UserContext.Consumer>
              </div>
            </div>
)}
}

export default UserClass;