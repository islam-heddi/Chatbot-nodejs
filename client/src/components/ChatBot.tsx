import { Fragment } from "react/jsx-runtime";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useChat } from "@/context/Chat";

export default function ChatBot() {
  const messages = useChat(state => state.messages)

  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[80vh] overflow-y-scroll w-[75vw]">
      {messages.length < 1? <p className="p-4 grid place-items-center h-screen font-bold text-2xl">ask or start a new message</p> :messages.map((value,index) => <Fragment key={index}><Message role={value.role} message={value.content} /></Fragment>)}
      </div>
      <SendMessage />
    </div>
  )
}
