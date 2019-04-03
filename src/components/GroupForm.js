import React from "react";
import ChatBasic from './ChatBasic.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Group extends React.Component {

      render() {
          return(
    <Container>
         <Row>
           <Col>
            <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                     <div className="single category member">
                        <h3 className="side-title">Member</h3>
                        <ul className='list-unstyled'>
                        {this.props.members.map(member => <li>{member.member_name}</li>)}
                        </ul>
                     </div>
                   </div>
                 </div> 
            </div>  
           </Col>
           <Col>
             <div> <ChatBasic /></div>
           </Col>
      </Row>
  </Container>
            
          );
      }

    }


export default Group;