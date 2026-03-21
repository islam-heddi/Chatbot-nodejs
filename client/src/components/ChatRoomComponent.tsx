import { useChat } from "@/context/Chat"
import { api } from "@/utils/api"
import { GET_MESSAGES } from "@/utils/constants"

function ChatRoomComponent({id, name}: {id: string, name: string}) {
  const chatId = useChat(state => state.chatId)
  const updateChatId = useChat(state => state.updateChatId)
  const updateChatName = useChat(state => state.updateChatName)
  const updateMessages = useChat(state => state.updateMessages)
  const handleSelect = () => {
    updateChatId(id)
    updateChatName(name)
    api.get(GET_MESSAGES + id)
    .then(res => updateMessages(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div
      onClick={() => handleSelect()}
      className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
        chatId === id ? "bg-blue-100 text-blue-900" : "hover:bg-gray-100"
      }`}
    >
      <p className="text-sm font-medium truncate">{name}</p>
    </div>
  )
}

export default ChatRoomComponent