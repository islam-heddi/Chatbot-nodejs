import ChatBot from "@/components/ChatBot"
import History from "@/components/History"
function Chat() {
  return (
    <div className="flex flex-row items-start"><History /><ChatBot /></div>
  )
}

export default Chat