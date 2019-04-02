import React from "react";
import CreateGroup from "./CreateGroup.js";
import JoinGroup from "./JoinGroup.js";
import Group from "./GroupForm";
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
            <React.Fragment>
                { this.state.membersList.length > 0 ?   <Group members={this.state.membersList} /> : (
                <React.Fragment>
                <form>
                <button onClick={this.handleSubmitCreate} className="btn btn-primary"> Create group</button>
                <button type="click" onClick={this.handleSubmit} className="btn btn-primary">Join Group</button>
                </form>

                {this.state.click===true ? <JoinGroup  setMembersList={this.setMembersList}/>:""}
                {this.state.clickCreate===true ? <CreateGroup/> : ""}
                </React.Fragment>
                )}
            </React.Fragment>

       );
    }
}
export default MainpageForm;
