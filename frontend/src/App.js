import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react"
import Input from './Input';
import Response from './Response';
import RenderedResponses from './RenderedResponses';

function App() {
  const [text, setText] = useState([])
  const debugging_mode = false
  const url = debugging_mode === true ? "http://localhost:3001/" : "https://carefully-certain-swift.ngrok-free.app/"

  useEffect(() => {
    const doEverything = async () => {
      try {
        const resultOfAPICall = await axios.get(url + "getResponses")
        console.log(resultOfAPICall)
      if(resultOfAPICall.length !== text.length) {
        setText(resultOfAPICall.data)
      }
  

      }
      catch (error) {
        console.log(error)
      }
    }
    doEverything()
  }, [])
  // useEffect(() => {
  //   axios.post("http://localhost:3000/hello", {
  //     firstName: "Molly "
  //   }).then(resultOfAPICall => {
  //     console.log(resultOfAPICall)
  //   })
  // })
  return (
    <>
      <Input />

      <Response
        text =  "hi" 
      />

       <RenderedResponses
          arrayman={ text }      
      /> 
      


    </>
  );
}

export default App;
