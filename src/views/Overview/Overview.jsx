import React from 'react';
import Button from ' ../../components/Atoms/Button';
import { useSelector, useDispatch } from '../../hooks/useReactRedux';
import messageActions from '../../actions/messageActions';
import './styles';

const Overview = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => ({ message: state.messageReducer.message }));
  return (
    <>
      <div className="intro">Hello World!</div>
      <Button label="Click here to dispatch success message" onSubmit={() => dispatch(messageActions.success('Success!'))} />
      {message}
    </>
  );
};

export default Overview;
