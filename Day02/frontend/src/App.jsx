import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/joke")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error); // <-- Corrected from console.log(Error);
      });
  }, []);

  return (
    <>
      <h1>Jokes hai re deva</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.category}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
