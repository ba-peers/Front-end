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
      return(
            
                <div>
        
                
         <ButtonGroup aria-label="Basic example" className="custom">
         <Button variant="secondary" onClick={this.handleSubmit}>Create Group</Button>
         <Button variant="secondary" onClick={this.handleSubmit} >Join Group</Button>
 
          </ButtonGroup>
          {this.state.click===true ? <JoinGroup />:""}
                {this.state.click===true ? <CreateGroup/> : ""}
                </div>

       );
    }
}
export default MainpageForm;
