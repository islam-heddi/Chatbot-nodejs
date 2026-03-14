import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
function SendMessage() {
    const [message,setMessage] = useState<string>("")
    const handleSend = () => {
        setMessage("")
    }
  return (
    <div className="flex flex-row gap-4 p-3 m-5"><Input type="text" placeholder="enter your message" onKeyDown={(event) => {if(event.key == "Enter") {handleSend()}}} value={message} onChange={(e) => setMessage(e.target.value)} /><Button onClick={() => handleSend()}>Send</Button></div>
  )
}

export default SendMessage