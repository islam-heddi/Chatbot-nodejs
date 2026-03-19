import { useChat } from "@/context/Chat"
import { api } from "@/utils/api"
import { GET_MESSAGES } from "@/utils/constants"

function ChatRoomComponent({id,name}: {id: string,name: string}) {
  const chatId = useChat(state => state.chatId)
  const updateChatId = useChat(state => state.updateChatId)
  const updateChatName = useChat(state => state.updateChatName)
  const updateMessages = useChat(state => state.updateMessages)
  const handleSelect = () => {
    updateChatId(id)
    updateChatName(name)
    api.get(GET_MESSAGES+id)
    .then(res => updateMessages(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div onClick={() => handleSelect()} className={`p-3 rounded-2xl mb-2 mt-2 mr-2 ${chatId == id? "bg-gray-200": ""} hover:bg-gray-300 cursor-pointer w-full`}>{name}</div>
  )
}

export default ChatRoomComponent