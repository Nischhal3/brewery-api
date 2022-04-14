import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import './DetailContainer.css';

const DisplayDetails = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div className="detail-container">
      <p>name: {item.name},</p>
      <p>brewery_type: {item.brewery_type},</p>
      <p>street: {item.street == null ? 'null' : item.street},</p>
      <p>address_2: {item.address_2 === null ? 'null' : item.address_2},</p>
      <p>city: {item.city},</p>
      <p>state: {item.state},</p>
      <p>
        county_province:{' '}
        {item.county_province === null ? 'null' : item.county_province},
      </p>
      <p>postal_code: {item.postal_code},</p>
      <Button text="Go back" handleClick={handleClick} />
    </div>
  );
};

export default DisplayDetails;
