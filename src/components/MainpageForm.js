import React from "react";
import CreateGroup from "./CreateGroup.js";
import JoinGroup from "./JoinGroup.js";
import Group from "./GroupForm";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button } from 'react-bootstrap';
import App from '../App.js'
import { MDBCarouselCaption,  MDBView, MDBMask } from
"mdbreact";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from "mdbreact"
import { Container } from "react-bootstrap";

class MainpageForm extends React.Component{
   
    state={
        click:false,
        clickCreate:false,
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
      {/* {this.state.membersList.length > 0 ? <Group members={this.state.membersList} /> : ( */}
      <React.Fragment>
      <ButtonGroup aria-label="Basic example" className="custom">

      <Button variant='outline-dark' size="lg" onClick={this.handleSubmitCreate} className="btn"> Create group</Button>
      <Button variant="outline-dark" size="lg" type="click" onClick={this.handleSubmit} className="btn">Join Group</Button>
      </ButtonGroup>
      {this.state.click===true ? <JoinGroup changeToGroupForm={this.props.changeToGroupForm} setMembersList={this.setMembersList}/>:""}
      {this.state.clickCreate===true ? <CreateGroup/> : ""}
      </React.Fragment>
      )}
  </React.Fragment>

      );
    }
      
}
export default MainpageForm;
        