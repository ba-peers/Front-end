import React, { Component } from "react";
import apiUrl from "../apiConfig";
// import { join } from "path";
import Group from "./GroupForm";
// let url = `${apiUrl}/sign-in`;
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
class JoinGroup extends Component{
 
    state={
      formData:{
        group_key:null,
        member_name:''
      },
      clickJoin:false
    };

    handleJoinRequest = dataForm => {
      let url = `${apiUrl}/group/${dataForm.group_key}`;
      
      fetch(url, {
        mode: "cors",
        credentials: "include",
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(dataForm)// why ?
      })
        .then(res => res.json())
        .then(data => {
          if (data.status > 299) 
            this.setState({ err: data.message});
          else {
            // console.log('what is it?',dataForm.group_key)
            // this.props.setMembersList(data.member);

            this.handleMemberRequest(dataForm)
            // this.componentDidMount()
          }
        })
        .catch(e => console.log(e));
    };
    
      handleMemberRequest(dataForm) {
        let url = `${apiUrl}/group/${dataForm.group_key}/member`;
        
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
              console.log('yeah*****',data.member)
              this.props.changeToGroupForm(data.member)
            }
          })
          .catch(e => console.log(e));
      };

        handleSubmit = e => {
        e.preventDefault();
        this.handleJoinRequest(this.state.formData);
       
      };
   
    
   handleChange=({currentTarget})=>{
      const formData = { ...this.state.formData };
      formData[currentTarget.name] = currentTarget.value;
      this.setState({ formData });  
   }

  render(){
    return(      
<React.Fragment>   
  <Form onSubmit={this.handleSubmit}>
   <Form.Group controlId="formGroupEmail"  className="Createform">
    <Form.Label>Enter Your Name</Form.Label>
      <Form.Control  placeholder="Name"
      name="member_name"
      onChange={this.handleChange}
      />
  </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Enter Group Key</Form.Label>
      <Form.Control  placeholder="Group Key" 
      name="group_key"
      onChange={this.handleChange}
      />
  
    </Form.Group>
          <Button type="submit" variant="outline-success">
            Join!
          </Button>
    </Form>
</React.Fragment>
  );
  }
}

    
export default JoinGroup;