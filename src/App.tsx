import { useState, useEffect } from 'react';
import mggLogo from '/logo.png';
import './App.css'

function App() {
  // const [apiResponse, setApiResponse] = useState<string | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api'); // Assuming your Express server endpoint is '/api'
  //       const data = await response.text();
  //       setApiResponse(data);
  //     } catch (error) {
  //       console.error('Error fetching API:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  
  return (
    <main>
      <p><img className="logo" src={mggLogo} alt="Mystic Grove Games" /></p>
      {/* <p>API Response: {apiResponse}</p> */}
    </main>
  );
}


export default App
