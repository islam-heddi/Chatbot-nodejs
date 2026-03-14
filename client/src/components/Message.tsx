function Message({role, message}: {
    role:"System"|"User",
    message: string
}) {
  return (
    <div className={`inline-flex text-white ${role=="System"? "self-start bg-blue-500": "self-end bg-blue-200"} p-4 m-4 rounded-2xl`}><p>{message}</p></div>
  )
}

export default Message