import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const List = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${item.id}`, { state: { item: item } });
  };

  return (
    <div className="container">
      <p>name: {item.name}</p>
      <p>breweryType: {item.brewery_type}</p>
      <p>city: {item.city}</p>
      <Button text="View details" handleClick={handleClick} />
    </div>
  );
};

export default List;
