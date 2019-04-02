import React from "react";
import apiUrl from "../apiConfig";
import { setUser } from "../services/AuthService";
// import { getUser, onSignin } from "./services/AuthService";
// import JoinGroup from "./JoinGroup"

class CreateGroup extends React.Component{


    state = {
       formData: {
         name: null,
         group_key: null,
       }
     };
   

     handleCreateRequest = data => {
      var newData = {
        name: this.state.formData.name,
        group_key: this.state.formData.group_key
    }
    console.log(newData)

  
       let url = `${apiUrl}/new-group`;
       fetch(url, {
         mode: "cors",
         method: "POST",
         credentials: "include",
         headers: {
           "Content-type": "application/json"
         },
         body: JSON.stringify({data: newData})
       })
         .then(res => res.json())
         .then(data => {
           if (data.status > 299) 
             this.setState({ err: data.message});
           else {
             setUser(data);
            
           }
         })
         .catch(e => console.log(e));
     };
     handleSubmit = e => {
       e.preventDefault();
       this.handleCreateRequest(this.state.formData);
     };
   
     handleChange = ({ currentTarget }) => {
       const formData = { ...this.state.formData };
       formData[currentTarget.name] = currentTarget.value;
       this.setState({ formData });
     };


    
    render(){
        
        return(
            <div className="pt-5 mt-5">
            <h1>CREATE NEW GROUP</h1>
            {this.state.err ? (
              <div className="alert alert-warning"> {this.state.err} </div>
            ) : (
              ""
            )}
       <form onSubmit={this.handleSubmit}>
{/* 
       <label>User ID</label>
          <input placeholder="Enter ID"
          name="userId"
          onChange={this.handleChange}
          ></input> */}
          <label> Group Name</label>
          <input placeholder="Enter Name"
          name="name"
          onChange={this.handleChange}
          ></input>
        
          <label> Group ID</label>
          <input placeholder="Enter ID"
          name="group_key"
          onChange={this.handleChange}
          ></input>

          <button type="submit" className="btn btn-primary">
            Create Group
          </button>
        </form>
     </div>
);
        }
    }


    
export default CreateGroup;