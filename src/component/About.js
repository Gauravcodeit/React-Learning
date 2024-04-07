import AboutUsCardClass from "./AboutUsCardClass";
import React from "react";

import UserContext from "../Util/UserContext";

 class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userDetail : {
                name: 'Dummy',
                location: 'Default'
            },
            userRepos : []
        }

        console.log("parent component Constructor")
    }
    async componentDidMount(){
        const userDetail = await fetch('https://api.github.com/users/Gauravcodeit') ;
        const userDetailJson = await userDetail.json();

        const userRepos = await fetch(userDetailJson.repos_url)
        const userReposJson = await userRepos.json();
        //console.log(userReposJson)
        this.setState({userDetail: userDetailJson, userRepos : userReposJson})
        console.log("parent component did mount", this.state.userDetail);

    }
    componentDidUpdate(){
        console.log("parent component did  update");
    }
    componentWillUnmount(){
        console.log("parent component Unmounting")
    }

    render(){
        console.log("parent component render", this.state.userDetail)
        return (
            <div className="about-us-wrap">
               <div className="container">

                      Logged In User :
                     <UserContext.Consumer>
                      {({loggedInUser})=> <div>{loggedInUser}</div>}
                     </UserContext.Consumer>
                    <AboutUsCardClass newprop= {'Child 1'} key="about-us-1" userDetail = {this.state.userDetail}  userRepos ={this.state.userRepos} />
                    { /* <AboutUsCardClass newprop= {'Child 2'} userDetail={this.state.userDetail} /> */}
                </div>
            </div>
        )
    }

}
export default  About;
