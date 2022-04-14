import { useLocation } from 'react-router-dom';
import ErrorPage from '../../ErrorPage';
import DisplayDetails from './DisplayDetails';
import './DetailContainer.css';

const Details = ({ data }) => {
  const location = useLocation();
  const urlId = location.pathname.split('/');

  const result = data.filter((item) => item.id === urlId[1]);

  return (
    <div className="details">
      {result.length === 0 ? (
        <ErrorPage />
      ) : (
        <DisplayDetails item={result[0]} />
      )}
    </div>
  );
};

export default Details;
