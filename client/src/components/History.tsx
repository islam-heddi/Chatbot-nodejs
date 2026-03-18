import { Fragment } from "react/jsx-runtime";
import ChatRoomComponent from "./ChatRoomComponent";

export default function History() {
  const Rooms = [{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "hello"},{id: 1, name: "New Channel"},{id: 1, name: "Javascript issue"}]
  //const Rooms: any[] = []
  // 
  return (
    <div className="flex flex-col items-center w-2xl h-[90vh] border-r-2 max-w-2xs overflow-y-scroll">{Rooms.length < 1? <p className="justify-self-center">No Message passed yet</p>: <div className="w-full">{Rooms.map((value,index) => <Fragment key={index}><ChatRoomComponent name={value.name} /></Fragment>)}</div>}</div>
  )
}
