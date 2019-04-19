import React from "react";
import apiUrl from "../apiConfig";
import { setUser } from "../services/AuthService";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


// import { getUser, onSignin } from "./services/AuthService";
// import JoinGroup from "./JoinGroup"

class CreateGroup extends React.Component{


    state = {
       formData: {
         name: '',
         group_key:'',
       }
     };

     handleCreateRequest = data => {
       console.log(data.name);
       console.log(data.group_key);
       
       let url = `${apiUrl}/new-group`;

       fetch(url, {
         mode: "cors",
        //  method: "POST",
        //  credentials: "include",
         headers: {
           "Content-type": "application/json"
         },
         body: JSON.stringify(data)
       })
         .then(res => res.json())
         .then(data => {
           if (data.status > 299) 
             this.setState({ err: data.message});
           else {
             setUser(data);
            
           }
         })
         .catch(e => console.log(e));
     };
     handleSubmit = e => {
       e.preventDefault();
       this.handleCreateRequest(this.state.formData);
     };
   
     handleChange = ({ currentTarget }) => {
       const formData = { ...this.state.formData };
       formData[currentTarget.name] = currentTarget.value;
       this.setState({ formData });
     };


    
    render(){
        
        return(

<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formGroupEmail"  className="Createform">
    <Form.Label>Group Name</Form.Label>
    <Form.Control  placeholder="Enter Group Name"
     name="name"
     onChange={this.handleChange}
    />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Group Key</Form.Label>
    <Form.Control  placeholder="Enter Group Key" 
     name="group_key"
     onChange={this.handleChange}
    />
  </Form.Group>


          <Button type="submit" variant='outline-dark'>
            Create Group
          </Button>
    </Form>
   
);
        }
    }


    
export default CreateGroup;