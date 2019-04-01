import React from "react";
import CreateGroup from "./CreateGroup.js";

class MainpageForm extends React.Component{
   
    state = {
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
                <button onClick={this.handleSubmit} className="btn btn-primary"> Create group</button>
                <button type="click" className="btn btn-primary">Join Group</button>

                </form>
                {this.state.click===true ? <CreateGroup/> : ""}
            </React.Fragment>

       );
    }
}
export default MainpageForm;