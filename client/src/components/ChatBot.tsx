import { Fragment } from "react/jsx-runtime";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useChat } from "@/context/Chat";
import Loading from "./Loading";

export default function ChatBot() {
  const messages = useChat(state => state.messages)

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length < 1 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-semibold text-gray-500">Ask or start a new message</p>
          </div>
        ) : (
          messages.map((value, index) => (
            <Fragment key={index}>
              <Message role={value.role} message={value.content} />
            </Fragment>
          ))
        )}
        <Loading loading={useChat(state => state.loading)} />
      </div>
      <SendMessage />
    </div>
  )
}
