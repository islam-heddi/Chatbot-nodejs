import ChatBot from "@/components/ChatBot"
import History from "@/components/History"
import UserMenu from "@/components/UserMenu"
function Chat() {
  return (
    <div className="flex flex-row items-start">
      <div className="flex flex-col">
        <History />
        <UserMenu />
      </div>
      <ChatBot />
    </div>
  )
}

export default Chat