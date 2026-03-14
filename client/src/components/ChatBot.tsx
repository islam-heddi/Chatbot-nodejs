import { Fragment } from "react/jsx-runtime";
import Message from "./Message";
import SendMessage from "./SendMessage";

interface msg {
  role: "User" | "System",
  message: string
}
export default function ChatBot() {
  const fakeMessage: msg[] = [ {
    role: "User",
    message: "Hi"
  },{
    role: "System",
    message: "How can i assist you today"
  } ,{
    role: "User",
    message: "fix my code"
  },{
    role: "System",
    message: "ok just send me your code"
  }]
  return (
    <div className="flex flex-col">
      {fakeMessage.map((value,index) => <Fragment key={index}><Message role={value.role} message={value.message} /></Fragment>)}
      <SendMessage />
    </div>
  )
}
