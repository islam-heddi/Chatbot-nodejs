function Message({role, message}: {
    role: "System" | "User",
    message: string
}) {
  const isUser = role === "User";
  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message.replaceAll("**", " ").replaceAll("*", " ")}</p>
      </div>
    </div>
  )
}

export default Message