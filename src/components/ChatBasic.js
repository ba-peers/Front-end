import React from "react";
import io from "socket.io-client";
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

import Form from 'react-bootstrap/Form'



class ChatBasic extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            message: '',
            messages: []
        };

        this.socket = io('localhost:3001');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.props.username,
                message: this.state.message
            })

            this.setState({message: ''});
        }
    }
    
    render(){
        return (
            <div className="container chatbox">
                <div className="row">
                    <div className="col-4">
                        <div className="card cardchat">
                            <div className="card-body">
                                <div className="card-title">Chat Window</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                        
                               
                               
  <InputGroup className="mb-3">
    </InputGroup>


    <InputGroup className="mb-3">
    <FormControl
    value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}
      placeholder="message"
      aria-label="message"
      aria-describedby="basic-addon2"
    />
                               
                                <InputGroup.Append>
      <Button onClick={this.sendMessage} variant="outline-secondary">Button</Button>
    </InputGroup.Append>
    </InputGroup>
  
                            </div>
                        </div>
                    </div>
                </div>
       
        );
    }
}

export default ChatBasic