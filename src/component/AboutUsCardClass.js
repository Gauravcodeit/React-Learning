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
    componentDidUpdate(){
        console.log(this.props?.newprop +"component did  update");
    }
    render(){
        const userDetail = this.props.userDetail;
        const reposlist = this.props.userRepos;
        console.log(this.props?.newprop + "Component Render Function", reposlist)
        return (
            <>
                <h1>Class Component Practice </h1>
                <h2>Github Profile</h2>
                <div className="counter-detail">
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
                <div className="github-profile-value">
                        <div className="git-user-avatar">
                            <img src={userDetail.avatar_url} />
                        </div>
                        <div className="git-followers-detail">
                            <span>
                                Follower : {userDetail.followers}
                            </span>
                            <span>
                                |
                            </span>
                            <span>
                                following : { userDetail.following}
                            </span>
                        </div>
                </div>
                <div className="repository-list">
                    <ul>
                        {reposlist.map((item)=>{
                            return (<>
                                <li key={item?.events_url}>
                                    { item.name}
                                </li>
                            </>)
                        })}
                    </ul>
                </div>
            </>
        )
    }
    componentWillUnmount(){
        console.log("child component Unmounting")
    }
}
export default AboutUsCardClass