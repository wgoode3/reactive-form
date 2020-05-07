import React from 'react';
import 'bulma/css/bulma.min.css';
import Form from './Components/Form';

function App() {
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
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
