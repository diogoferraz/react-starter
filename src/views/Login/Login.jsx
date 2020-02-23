import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../../actions/userActions';
import Input from '../../components/Input/Input';
import CompanhiaSites from '../../assets/images/companhiasites.png';
import './styles';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    dispatch(userActions.loginInit({ username, password }));
  };

  return (
    <>
      <div className="Login-content">
        <span className="Login-title"><img src={CompanhiaSites} alt="" /></span>
        <form className="Login-form">
          <div className="Login-input">
            <Input type="text" name="user" label="Username" value={username} onChange={(ev) => setUsername(ev.target.value)} />
          </div>
          <div className="Login-input">
            <Input type="password" name="password" label="Password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
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
