import { useChat } from "@/context/Chat"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState, useTransition } from "react"
import { api } from "@/utils/api"
import { PROMPT } from "@/utils/constants"
function SendMessage() {
    const [loading, start] = useTransition()
    const chatId = useChat(state => state.chatId)
    const addMessages = useChat(state => state.addMessages)
    const [message,setMessage] = useState<string>("")
    const handleSend = () => {
        setMessage("")
        addMessages({
          content: message,
          role: "User",
        })
        start(() => {
          api.post(PROMPT, {
            chatId,
            message
          })
          .then(res => addMessages(res.data))
          .catch(err => console.log(err))
        })
    }
  return (
    <div className="flex flex-row gap-4 p-3 m-5 w-[70vw]"><Input type="text" placeholder="enter your message" onKeyDown={(event) => {if(event.key == "Enter" && !loading) {handleSend()}}} value={message} onChange={(e) => setMessage(e.target.value)} /><Button disabled={loading} onClick={() => handleSend()}>Send</Button></div>
  )
}

export default SendMessage