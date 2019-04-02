import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { inspect } from "util";

class MyGroup extends Component{

    state = {
        groupList:[],
        groupID:null,
        groupJoin:[]
    }
   
    handleDeleteRequest(groupId) {
        let url = `${apiUrl}/group/${groupId}`;
    
        fetch(url, {
          mode: "cors",
          credentials: "include",
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        })
          .then(res => res.json())
          .then(groupList => {
            if (groupList.status > 299) 
              this.setState({ err: groupList.message});
            else {
              // this.setState({members: data.member});
              this.setMembersListgroupList(groupList);
              this.componentWillMount();
            }
          })
          .catch(e => console.log(e));
      };

    deleteGroup= ( e , id) => {
        e.preventDefault();
        this.handleDeleteRequest(id);
        // this.setState({});
    }

     setMembersListgroupList = list=>{
        // console.log("HHHHHHHHHHHHJJJJ",list)
        this.setState({ 
            groupList:list
        });
      };
      
componentWillMount(){
        let url = `${apiUrl}/group`;
        fetch(url, {
          mode: "cors",
          credentials: "include",
          method: "GET",
          headers: {
            "Content-type": "application/json"
          }
        })
          .then(res => res.json())
          .then(groupList => {
            if (groupList.status > 299) 
              this.setState({ err: groupList.message});
            else {
                // console.log("group list::::: ",groupList);
              this.setMembersListgroupList(groupList.group);
            }
          }).catch(e => console.log(e));
    
    }

 render(){
     return(
       <form>
           {this.state.groupList.length > 0 ? <div>{this.state.groupList.map(group=> <li>{group.id}<button onClick={(e) => this.deleteGroup(e , group.id)}> DELETE </button></li>)}</div>:<h3>No groups</h3>}
       </form>
     );
 }

}

export default MyGroup;