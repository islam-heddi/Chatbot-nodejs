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
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <NewChat />
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.length < 1 ? (
          <p className="p-4 text-center text-gray-500">No messages yet</p>
        ) : (
          <div className="p-2">
            {chats
              .sort((a, b) => (new Date(b.createdAt as string)).getTime() - (new Date(a.createdAt as string)).getTime())
              .map((value, index) => (
                <Fragment key={index}>
                  <ChatRoomComponent id={value._id} name={value.name} />
                </Fragment>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
