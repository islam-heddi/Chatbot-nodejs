import { useChat } from "@/context/Chat"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState, useTransition } from "react"
import { api } from "@/utils/api"
import { CREATE_CHAT, PROMPT } from "@/utils/constants"
import { useUser } from "@/context/User"
import { useHistory } from "@/context/History"
import { useShallow } from "zustand/shallow"
function SendMessage() {
    const [loading, start] = useTransition()
    const chatId = useChat(state => state.chatId)
    const userId = useUser(state => state.userId)
    const addChat = useHistory(state => state.addChat)
    const {updateChatId, updateChatName} = useChat(useShallow(state => ({
      updateChatId: state.updateChatId,
      updateChatName: state.updateChatName
    })))
    const addMessages = useChat(state => state.addMessages)
    const [message,setMessage] = useState<string>("")
    const handleSend = () => {
        if(chatId == ""){
          api.post(CREATE_CHAT, {
              userId
          }).then((res) => {
              addChat({
                  _id: res.data._id,
                  name: res.data.name,
                  createdAt: res.data.createdAt
              })
              updateChatId(res.data._id)
              updateChatName(res.data.name)
          })
          .catch(err => console.log(err))
        }
        setMessage("")
        addMessages({
          content: message,
          role: "User",
        })
        start(async () => {
          try {
            const res = await api.post(PROMPT, {
              chatId,
              message
            })  
            addMessages(res.data.result)
          } catch (err) {
            console.log(err)
          }
        })
    }
  return (
    <div className="flex items-center gap-2 p-4 border-t bg-white">
      <Input
        type="text"
        placeholder="Enter your message"
        onKeyDown={(event) => { if (event.key === "Enter" && !loading) { handleSend() } }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1"
      />
      <Button disabled={loading} onClick={() => handleSend()}>
        {loading ? "Sending..." : "Send"}
      </Button>
    </div>
  )
}

export default SendMessage