import React from 'react';


const List = (props) => {
  return (
    <>
      {props.users.map( (user, i) => 
        <div className="message is-primary" key={ i }>
          <div className="message-body">
            <p>Name: { user.name }</p>
            <p>Email: { user.email }</p>
            <p>Password: { user.password }</p>
          </div>
        </div>
      )}
    </>
  );
}

export default List;