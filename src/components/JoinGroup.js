import React, { Component } from "react";
import apiUrl from "../apiConfig";
// import { join } from "path";
import GroupForm from "./GroupForm";
// let url = `${apiUrl}/sign-in`;
//
class JoinGroup extends Component{
    state={
      group_key: null,
      join:false
    };

    handleJoinRequest = group_key => {
        let url = `${apiUrl}/group/${group_key}`;
        
        fetch(url, {
          mode: "cors",
          credentials: "include",
          method: "POST",
          headers: {
            "Content-type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => {
            if (data.status > 299) 
              this.setState({ err: data.message});
            else {
              console.log(data)
              this.setState({join:true});
            }
          })
          .catch(e => console.log(e));
      };
      
    handleListMemberRequest = group_key => {
        let url = `${apiUrl}/group/${group_key}/member`;
        
        fetch(url, {
          mode: "cors",
          credentials: "include",
          method: "GET",
          headers: {
            "Content-type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => {
            if (data.status > 299) 
              this.setState({ err: data.message});
            else {
              console.log(data)
              this.setState({join:true});
            }
          })
          .catch(e => console.log(e));
      };

      handleSubmit = e => {
        e.preventDefault();
        this.handleJoinRequest(this.state.group_key);
        e.preventDefault();
        this.handleListMemberRequest(this.state.group_key);
      };
    
    handleChange=({currentTarget})=>{
        this.setState({ group_key:currentTarget.value });   
     }

    render(){
        return(
           <React.Fragment>
            <div>** Welcom **</div>
            <form onSubmit={this.handleSubmit}>
               <label> ID </label>
               <input placeholder="enter group id" onChange={this.handleChange}></input>
               <button type="submit" className="btn btn-primary"> Join </button>
             </form>
             {this.state.join===true? <GroupForm/>:""}
           </React.Fragment>
        );
    }
}

    
export default JoinGroup;
    