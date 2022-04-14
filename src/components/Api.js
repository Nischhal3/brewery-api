const URL = 'https://api.openbrewerydb.org/breweries';

const FetchData = async (setData) => {
  const request = await fetch(URL);
  const result = await request.json();
  setData(result);
};

export default FetchData;
