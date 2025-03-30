import { useEffect, useState } from 'react'
import './App.css'

function App() {

   const [light,setLight] = useState('red');

   useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) =>
        prev === "red" ? "green" : prev === "green" ? "yellow" : "red"
      );
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <h1>Traffic Ligth</h1>
      <div className="container">
        <div className="traffic-light">
        <div className={`light red ${light === "red" ? "active" : ""}`}></div>
        <div className={`light yellow ${light === "yellow" ? "active" : ""}`}></div>
        <div className={`light green ${light === "green" ? "active" : ""}`}></div>
        </div>
      </div>
    </>
  )
}

export default App
