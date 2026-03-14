
function ChatRoomComponent({name}: {name: string}) {
  return (
    <div className="p-3 rounded-2xl mb-2 mt-2 mr-2 hover:bg-gray-100 cursor-pointer w-full">{name}</div>
  )
}

export default ChatRoomComponent