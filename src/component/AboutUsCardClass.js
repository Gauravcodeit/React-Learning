import React from "react";
class AboutUsCardClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            age: 0,
            expenseString: "0"
        };
        console.log(this.props?.newprop + " Component Constructor")
    }
    componentDidMount(){
        console.log(this.props?.newprop + "Component DID Mount")
    }
    render(){
        console.log(this.props?.newprop + "Component Render Function")
        return (
            <>
                <div>
                    details from class {this.props?.newprop}

                    { " " + this.state.age }
                    <button onClick={ ()=>{
                            this.setState({
                                age : this.state.age + 1,
                            })
                    }}>
                    Counter
                     </button>
                </div>
            </>
        )
    }
}
export default AboutUsCardClass