import {useState, useEffect} from "react";
const HomePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const callBackendAPI = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const body = await response.json();
        setData(body.message);
      } catch (error:unknown) {
        let message
        if (error instanceof Error) {
          message = error.message
        }  else {
          message = String(error)
        }
        console.error(message);      
      }
    };
    callBackendAPI();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        <p>{data}</p>
      </header>
    </div>
  );
}
 
export default HomePage;