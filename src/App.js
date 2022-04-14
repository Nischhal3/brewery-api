import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import ErrorPage from './ErrorPage';
import { useEffect, useState } from 'react';
import FetchData from './components/Api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData(setData);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/:id" element={<Details data={data} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
