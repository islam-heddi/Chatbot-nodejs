import ChatBot from "@/components/ChatBot"
import History from "@/components/History"
import { Button } from "@/components/ui/button"
import UserMenu from "@/components/UserMenu"
import { useState } from "react"

function Chat() {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-80 border-r">
        <History />
        <UserMenu />
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden flex items-center p-4 border-b">
        <Button onClick={() => setOpened(!opened)}>
          {opened ? "Close" : "Menu"}
        </Button>
      </div>

      {/* Mobile Sidebar */}
      {opened && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setOpened(false)}>
          <div className="absolute left-0 top-0 h-full w-80 bg-white border-r" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b">
              <Button onClick={() => setOpened(false)}>Close</Button>
            </div>
            <History />
            <UserMenu />
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1">
        <ChatBot />
      </div>
    </div>
  )
}

export default Chat