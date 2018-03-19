import React from "react";
import './UserContact.css';

const UserContact = (props) => {
    console.log(props);
    return (
      <div className='host-contact'>
        <div className='host-info'>
         <h3> Host: </h3> <p>{props.first} {props.last}</p>
        </div>
        <div className='host-info'><h3> Email: </h3> <p>{props.email}</p></div>
        <div className='host-info'><h3> Cell: </h3> <p>{props.cell}</p></div>
      </div>
    );
}

export default UserContact;
