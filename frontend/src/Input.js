import axios from "axios";
import './Input.css';

const colors = ['#cdfc93', '#ff7ecd', '#71d7ff', 'ce81ff', '#fff68b', '#ffc97d', '#ffbfeb', '#baffd8', '#b5d5ff', '#e3b7ff']

const Input = () => {
    const debugging_mode = false
    const url = debugging_mode === true ? "http://localhost:3001/" : "https://carefully-certain-swift.ngrok-free.app/"
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const answer = event.target.inputbox.value
        console.log("you answered", answer)
        axios.post(url  + "addResponse",
          {
            sleepThing: answer
        }, {
            headers:
            {
              "ngrok-skip-browser-warning": true
            }
          }).then(result => {
            window.location.reload()
        }).catch(e => console.log(e))

    }
    return (<>
        <form onSubmit={handleFormSubmit}>
            <div>
            Which items do you use when you're going to sleep?
            </div>
            <input type="text" id="inputbox" />
            <input type="submit" id="submitbutton" style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}/>
        </form> 
    </>)
}

export default Input