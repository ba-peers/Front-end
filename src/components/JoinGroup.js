import React, { Component } from "react";
import apiUrl from "../apiConfig";
// import { join } from "path";
import Group from "./GroupForm";
// let url = `${apiUrl}/sign-in`;
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

//
class JoinGroup extends Component{
 
    state={
      formData:{
        group_key:null,
        member_name:''
      },
    };

    handleJoinRequest = dataForm => {
      console.log("hhhhhhmmmmmmmhhh *** ",dataForm.member_name);
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
            console.log('what is it?',data)
            // console.log('what is it?',dataForm.group_key)
            // this.props.setMembersList(data.member);

            this.handleMemberRequest(dataForm)
          }
        })
        .catch(e => console.log(e));
    };

    // handleJoinRequest = group_key => {
    //     let url = `${apiUrl}/group/${group_key}`;
        
    //     fetch(url, {
    //       mode: "cors",
    //       credentials: "include",
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json"
    //       }
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         if (data.status > 299) 
    //           this.setState({ err: data.message});
    //         else {
    //           console.log(data)
    //           this.handleMemberRequest(group_key)
    //         }
    //       })
    //       .catch(e => console.log(e));
    //   };

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
              // this.setState({members: data.member});

              this.props.setMembersList(data.member);
            }
          })
          .catch(e => console.log(e));
      };

        handleSubmit = e => {
        e.preventDefault();

        this.handleJoinRequest(this.state.formData);

      };
    //   handleSubmit = e => {
    //     e.preventDefault();
    //     this.handleJoinRequest(this.state.group_key);
    //   };
    
    // handleChange=({currentTarget})=>{
    //     this.setState({ group_key:currentTarget.value });   
    //  }
     handleChange=({currentTarget})=>{
      const formData = { ...this.state.formData };
      formData[currentTarget.name] = currentTarget.value;
      this.setState({ formData });  
   }
    render(){
        return(
           
<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formGroupEmail"  className="Createform">
    <Form.Label>Join Group</Form.Label>
    <Form.Control  placeholder="Enter Group ID"
    
     onChange={this.handleChange}
    />
  </Form.Group>


          <Button type="submit" variant="outline-success">
            Join!
          </Button>
    </Form>
        );
    }
}


export default JoinGroup;
    