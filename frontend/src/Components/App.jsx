import { useState, useEffect } from 'react';
import { getData } from '../../api/api.jsx';

function App() {

  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const responseData = await getData();  // Call the getData function
      setData(responseData);  // Set the received data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();  // Fetch data when the component mounts
  }, []);


  return (
    <>
      {data}
    </>
  )
}

export default App
