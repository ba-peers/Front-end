import React from "react";
import JoinGroup from "./JoinGroup.js";

class MainpageForm extends React.Component{
   
    state={
        click:false
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            click:true
        });
       
      };
      
    render(){
      return(
            <React.Fragment>
                <div>** Welcom **</div>
                <form>
                <button type="click" className="btn btn-primary"> Create group</button>
                <button type="click" onClick={this.handleSubmit} className="btn btn-primary">Join Group</button>
                </form>
                {this.state.click===true ? <JoinGroup />:""}
            </React.Fragment>

       );
    }
}
export default MainpageForm;
