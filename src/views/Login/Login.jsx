import React from 'react';
import Input from '../../components/Input/Input';
import CompanhiaSites from '../../assets/images/companhiasites.png';
import './styles';

const Login = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="Login-content">
        <span className="Login-title"><img src={CompanhiaSites} alt="" /></span>
        <form className="Login-form">
          <div className="Login-input">
            <Input type="text" name="user" label="Username" value="" onChange={(ev) => console.log(ev.target.value)} />
          </div>
          <div className="Login-input">
            <Input type="password" name="password" label="Password" value="" onChange={(ev) => console.log(ev.target.value)} />
          </div>
          <div className="Login-button">
            <button className="button" type="button" onClick={onSubmit}>Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
