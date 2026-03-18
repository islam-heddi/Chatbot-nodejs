import { Fragment } from "react/jsx-runtime";
import Message from "./Message";
import SendMessage from "./SendMessage";

interface msg {
  role: "User" | "System",
  message: string
}
export default function ChatBot() {
  const fakeMessage: msg[] = [{
    role: "User",
    message: "lorem"
  },{
    role: "System",
    message: "lorem"
  },]


  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-[80vh] overflow-y-scroll w-[75vw]">
      {fakeMessage.length < 1? <p className="p-4 grid place-items-center h-screen font-bold text-2xl">ask or start a new message</p> :fakeMessage.map((value,index) => <Fragment key={index}><Message role={value.role} message={value.message} /></Fragment>)}
      </div>
      <SendMessage />
    </div>
  )
}
