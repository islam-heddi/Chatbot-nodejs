import ChatBot from "@/components/ChatBot"
import History from "@/components/History"
import { Button } from "@/components/ui/button"
import UserMenu from "@/components/UserMenu"
import { useState } from "react"
function Chat() {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <div className="flex flex-row items-start max-[1024px]:flex-col">
      <div className="flex flex-col max-[1024px]:hidden">
        <History />
        <UserMenu />
      </div>
      <div className="min-[1024px]:hidden">
        <Button className={`${opened? `hidden`: ""}`} onClick={() => setOpened(!opened)}>Show</Button>
        <div className={`bg-white absolute flex flex-col ${opened? `inline`: `hidden`}`}>
          <p className="cursor-pointer inline" onClick={() => setOpened(!opened)}>X</p>
          <History />
          <UserMenu />
        </div>
      </div>
      <ChatBot />
    </div>
  )
}

export default Chat