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
  },{
    role:"User",
    message: "Nulla laborum reprehenderit ullamco proident ad incididunt esse anim pariatur anim cillum. Commodo incididunt sint ullamco ut. Ea eu est sint labore exercitation quis laboris sint eu consequat. Lorem consectetur enim occaecat ea nisi aliquip et eiusmod reprehenderit mollit aute adipisicing ad.Sit consequat irure fugiat et esse minim. Consectetur commodo anim duis labore amet id. Ipsum ullamco non ex aliquip quis deserunt est cillum qui ea commodo. Proident minim excepteur culpa cupidatat eu qui laborum velit dolore id nisi dolore laborum incididunt."
  },{
    role:"System",
    message: "Nulla laborum reprehenderit ullamco proident ad incididunt esse anim pariatur anim cillum. Commodo incididunt sint ullamco ut. Ea eu est sint labore exercitation quis laboris sint eu consequat. Lorem consectetur enim occaecat ea nisi aliquip et eiusmod reprehenderit mollit aute adipisicing ad.Sit consequat irure fugiat et esse minim. Consectetur commodo anim duis labore amet id. Ipsum ullamco non ex aliquip quis deserunt est cillum qui ea commodo. Proident minim excepteur culpa cupidatat eu qui laborum velit dolore id nisi dolore laborum incididunt."
  }]
  return (
    <div className="flex flex-col">
      {fakeMessage.map((value,index) => <Fragment key={index}><Message role={value.role} message={value.message} /></Fragment>)}
      <SendMessage />
    </div>
  )
}
