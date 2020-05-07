import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import Form from './Components/Form';
import List from './Components/List';


function App() {
  
  const [users, setUsers] = useState([]);

  return (
    <div className="container">
      <section className="hero is-dark">
        <div className="hero-body">
          <h1 className="title">Hello</h1>
        </div>
      </section>
      <br /><br />
      <div className="columns">
        <div className="column is-half">
          <Form createUser={newUser => setUsers([...users, newUser])} />
        </div>
        <div className="column is-half">
          <List users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
