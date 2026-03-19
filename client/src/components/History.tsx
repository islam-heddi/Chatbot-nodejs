import { Fragment } from "react/jsx-runtime";
import ChatRoomComponent from "./ChatRoomComponent";
import NewChat from "./NewChat";
import { useHistory } from "@/context/History";
import { useEffect } from "react";
import { api } from "@/utils/api";
import { GET_CHATS } from "@/utils/constants";

export default function History() {
  const chats = useHistory(state => state.chats)
  const updateChats = useHistory(state => state.updateChats)
   useEffect(() => {
    api.get(GET_CHATS)
    .then((res) => {
      updateChats(res.data)
    })
    .catch((err) => console.log(err))
   }, [updateChats])
  return (
    <div className="flex flex-col items-center w-2xl h-[90vh] border-r-2 max-w-2xs overflow-y-scroll"><NewChat />{chats.length < 1? <p className="justify-self-center">No Message passed yet</p>: <div className="w-full">{chats.map((value,index) => <Fragment key={index}><ChatRoomComponent id={value._id} name={value.name} /></Fragment>)}</div>}</div>
  )
}
