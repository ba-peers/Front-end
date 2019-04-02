import React from "react";
import CreateGroup from "./CreateGroup.js";
import JoinGroup from "./JoinGroup.js";
import Group from "./GroupForm";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button } from 'react-bootstrap';

class MainpageForm extends React.Component{
   
    state={
        click:false,
        clickCreate:false,
        membersList: []
    }

    setMembersList = membersList => {
        this.setState({ 
          membersList
        });
      };

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            click:true,
            clickCreate:false
        });
      };



    handleSubmitCreate = e => {
        e.preventDefault();

        this.setState({
            clickCreate:true,
            click:false
        });
      };
    render(){
      // return(
            
      //           <div>
        
                
      //    <ButtonGroup aria-label="Basic example" className="custom">
      //    <Button variant="secondary" onClick={this.handleSubmitCreate}>Create Group</Button>
      //    <Button variant="secondary" onClick={this.handleSubmit} >Join Group</Button>
 
      //     </ButtonGroup>
      //     {this.state.click===true ? <JoinGroup />:""}
      //           {this.state.clickCreate===true ? <CreateGroup/> : ""}
      //           </div>

      //  );

      return(
      <React.Fragment>
      { this.state.membersList.length > 0 ?   <Group members={this.state.membersList} /> : (
      <React.Fragment>
      <ButtonGroup aria-label="Basic example" className="custom">

      <Button variant="secondary" onClick={this.handleSubmitCreate} className="btn btn-primary"> Create group</Button>
      <Button variant="secondary" type="click" onClick={this.handleSubmit} className="btn btn-primary">Join Group</Button>
      </ButtonGroup>

      {this.state.click===true ? <JoinGroup  setMembersList={this.setMembersList}/>:""}
      {this.state.clickCreate===true ? <CreateGroup/> : ""}
      </React.Fragment>
      )}
  </React.Fragment>
      );
    }
      
}
export default MainpageForm;
        