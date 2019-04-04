import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { inspect } from "util";
import MainpageForm from './MainpageForm';

class MyGroup extends Component{

    state = {
        groupList:[],
        groupID:null,
        clickExit:false
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
              
              this.componentDidMount();
      
              
            }
          })
          .catch(e => console.log(e));
      };

    deleteGroup= ( e , id) => {
        e.preventDefault();
        this.handleDeleteRequest(id);
        this.setState({
          clickExit:true
        });
        // this.setState({});
    }

    filterGroup=( e , id) => {
      e.preventDefault();
      this.handleMemberGroupRequest(id);
      // this.setState({});
  }

     setMembersListgroupList = list=>{
      
      console.log("gggggglist",list)
      const groupNameList=list.map(group=> group.Group);
       console.log("yyyyyydgfvdggdvgd",groupNameList)
      
        this.setState({ 
            groupList:groupNameList
        });
      };

 
      
  componentWillMount(){
    this.setState({clickExit:false});
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
              // console.log("j6k6k75k754lh",groupList.user.members[1].Group)
              this.setMembersListgroupList(groupList.user.members);
            }
          }).catch(e => console.log(e));
    }
 render(){
     return(
 <React.Fragment>
        <div>
        <div className="container-fluid">
             <h4 className="header">My Group</h4>
            <h6> {this.state.groupList.length > 0 ? <div>{this.state.groupList.map(group=> <li className="list-group-item">{group.name}<button className="btn btn-light mt-1 ml-5" onClick={(e) => this.deleteGroup(e , group.id)}> Exit </button></li>)}</div> : <p>you do not join in to any group</p>}</h6>
        </div>
    </div>
</React.Fragment>
     );
 }
}

export default MyGroup;


// this