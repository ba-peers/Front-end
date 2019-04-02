import React from "react";

class Group extends React.Component {

      render() {

          return(
            <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                     <div className="single category">

                        <h3 className="side-title">Member</h3>
                        <ul className='list-unstyled'>
                        {this.props.members.map(member=> <li>{member.member_name}</li>)}
                        </ul>
                     </div>
                   </div>
                 </div>
                 <input className="form-control"type="text" ></input>
            </div>
              
          );
      }

    }


export default Group;
