import axios from "axios";
import './Input.css';

const Input = () => {
    const debugging_mode = false
    const url = debugging_mode === true ? "http://localhost:3001/" : "https://carefully-certain-swift.ngrok-free.app/"
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const answer = event.target.inputbox.value
        console.log("you answered", answer)
        axios.post(url  + "addResponse", {
            sleepThing: answer
        }).then(result => window.location.reload()).catch(e => console.log(e))

    }
    return (<>
        <form onSubmit={handleFormSubmit}>
            What do you eep with ?
            <input type="text" id="inputbox" />
            <input type="submit" />
        </form> 
    </>)
}

export default Input