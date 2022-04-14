import React, { useState } from 'react';
import './Home.css';
import SearchBar from '../Search/SearchBar';
import List from './List';

const Home = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div>
      <div className="home">
        <SearchBar data={data} handleInputChange={handleInputChange} />
        {filteredData.length === 0 ? (
          <div className="list">
            {data.map((item) => (
              <List item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="list">
            {filteredData.map((item) => (
              <List item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
