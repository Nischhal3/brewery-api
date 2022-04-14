import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div>
      <p>Sorry! Item not found</p>
      <Button text="Go back" handleClick={handleClick} />
    </div>
  );
};

export default ErrorPage;
