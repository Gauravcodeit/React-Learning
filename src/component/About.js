import AboutUsCardClass from "./AboutUsCardClass";
import React from "react";

 class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent component Constructor")
    }
    componentDidMount(){
        console.log("parent component did mount")
    }
    render(){
        console.log("parent component render")
        return (
            <div className="about-us-wrap">
               <div className="container">
                     About Us
                 <AboutUsCardClass newprop= {'Child 1'} />
                 <AboutUsCardClass newprop= {'Child 2'} />
                </div>
            </div>
        )
    }

}
export default  About;
