import React from 'react';
import Input from '../../components/Input/Input';

const Login = () => (
  <>
    <form onSubmit={(data) => console.log(data)}>
      <Input type="text" name="user" label="UserName" value="" onChange={(ev) => console.log(ev)} />
      <Input type="password" name="password" label="Password" value="" onChange={(ev) => console.log(ev)} />
    </form>
  </>
);

export default Login;
