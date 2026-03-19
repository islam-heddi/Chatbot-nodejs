import { Fragment } from "react/jsx-runtime";
import ChatRoomComponent from "./ChatRoomComponent";
import NewChat from "./NewChat";
import { useHistory } from "@/context/History";

export default function History() {
  const chats = useHistory(state => state.chats)
  const Rooms = [{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "New Channel"},{id: 1, name: "Javascript issue"}]
  //const Rooms: any[] = []
  // 
  return (
    <div className="flex flex-col items-center w-2xl h-[90vh] border-r-2 max-w-2xs overflow-y-scroll"><NewChat />{Rooms.length < 1? <p className="justify-self-center">No Message passed yet</p>: <div className="w-full">{chats.map((value,index) => <Fragment key={index}><ChatRoomComponent name={value.chatName} /></Fragment>)}</div>}</div>
  )
}
