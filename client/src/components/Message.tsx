function Message({role, message}: {
    role:"System"|"User",
    message: string
}) {
  return (
    <div className={`inline-flex  ${role=="System"? "text-white self-start bg-black": "self-end bg-white border max-w-2/3"} p-4 m-4 rounded-2xl`}><p>{message.replaceAll("**", " ").replaceAll("*", " ")}</p></div>
  )
}

export default Message