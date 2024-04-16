import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const doEverything = async () => {
      try {
        const resultOfAPICall = await axios.get("http://localhost:3001/getResponses")
        console.log(resultOfAPICall)
      }
      catch (error) {
        console.log(error)
      }
    }
    doEverything()
  })
  // useEffect(() => {
  //   axios.post("http://localhost:3000/hello", {
  //     firstName: "Molly "
  //   }).then(resultOfAPICall => {
  //     console.log(resultOfAPICall)
  //   })
  // })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
