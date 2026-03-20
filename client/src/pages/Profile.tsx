import { useHistory } from "@/context/History"
import { useUser } from "@/context/User"
import { useNavigate } from "react-router-dom"
function Profile() {
    const navigate = useNavigate()
    const username = useUser(state => state.username)
    const userEmail = useUser(state => state.email)
    const chats = useHistory(state => state.chats)
  return (
    <div className="flex flex-col items-center flex-wrap gap-10">
        <p onClick={() => navigate(-1)} className="cursor-pointer hover:text-gray-400">&lt;- back</p>
        <div className="flex flex-row items-center gap-5 flex-wrap">
            <div className="flex items-center justify-center h-20 w-20 bg-green-500 rounded-full text-white">
                <p className="text-4xl">{username.charAt(0).toUpperCase()}</p>
            </div>
            <h1 className="text-2xl">{username}</h1>
        </div>
        <div>
            <p>Email: {userEmail}</p>
            <p>Chats you created : {chats.length}</p>
        </div>
    </div>
  )
}

export default Profile