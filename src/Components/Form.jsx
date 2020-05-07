import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const checkValid = () => {
    const newErrors = {};
    let valid = true;

    if(name.length < 1) {
      newErrors.name = "Name is required!"
      valid = false;
    } else if(name.length < 2) {
      newErrors.name = "Name must be 2 characters or longer"
      valid = false;
    }

    if(email.length < 1) {
      newErrors.email = "Email is required!"
      valid = false;
    } else if(!(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(email))){
      newErrors.email = "Valid Email is required!"
      valid = false;
    }

    if(password.length < 1) {
      newErrors.password = "Password is required!"
      valid = false;
    } else if(password.length < 8) {
      newErrors.password = "Password must be 8 characters or longer"
      valid = false;
    }

    setIsValid(valid);
    setErrors(newErrors);

  }

  useEffect( () => {
    checkValid();
  }, [name, email, password]);

  const formSubmit = (e) => {
    e.preventDefault();
    props.createUser({name, email, password});
    setName("");
    setEmail("");
    setPassword("");
    setNameTouched(false);
    setEmailTouched(false);
    setPasswordTouched(false);
  }

  return (
    <div className="message is-info">
      <div className="message-header">
        <p>Create User</p>
      </div>
      <div className="message-body">
        <form onSubmit={ formSubmit }>
          <div className="field">
            <div className="control">
              <label>Name:</label>
              <input 
                type="text" 
                className="input" 
                value={ name }
                onChange={e => setName(e.target.value)}
                onFocus={e => setNameTouched(true)}
              />
              {
                errors.name && nameTouched ?
                <p className="help is-danger">{ errors.name }</p>:
                ''
              }
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label>Email:</label>
              <input 
                type="text" 
                className="input" 
                value={ email }
                onChange={e => setEmail(e.target.value)}
                onFocus={e => setEmailTouched(true)}
              />
              {
                errors.email && emailTouched ?
                <p className="help is-danger">{ errors.email }</p>:
                ''
              }
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label>Password:</label>
              <input 
                type="password" 
                className="input" 
                value={ password }
                onChange={e => setPassword(e.target.value)}
                onFocus={e => setPasswordTouched(true)}
              />
              {
                errors.password && passwordTouched ?
                <p className="help is-danger">{ errors.password }</p>:
                ''
              }
            </div>
          </div>
          { 
            isValid ? 
            <input type="submit" value="Create User" className="button is-info" /> :
            <input type="submit" value="Create User" className="button is-info" disabled />
          }
        </form>
      </div>
    </div>
  );
}

export default Form;